import axios from 'axios';
import { getAccessToken, getRefreshToken, setAccessToken, clearTokens } from '../services/auth';
const baseURL = process.env.EXPO_PUBLIC_API_URL;

export const http = axios.create({ baseURL, timeout: 15000 });

http.interceptors.request.use(async (config) => {
  const token = await getAccessToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

http.interceptors.response.use(
  (r) => r,
  async (error) => {
    const { config, response } = error;
    if (response?.status === 401 && !config._retry) {
      config._retry = true;
      const refresh = await getRefreshToken();
      if (refresh) {
        const { data } = await axios.post(`${baseURL}/api/token/refresh/`, { refresh });
        await setAccessToken(data.access);
        config.headers.Authorization = `Bearer ${data.access}`;
        return http(config);
      }
      await clearTokens();
    }
    return Promise.reject(error);
  }
);
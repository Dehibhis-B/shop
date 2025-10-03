import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const baseURL = process.env.EXPO_PUBLIC_API_URL;

const ACCESS_KEY = 'accessToken';
const REFRESH_KEY = 'refreshToken';

export type AuthTokens = { access: string; refresh: string };

export async function login(username: string, password: string): Promise<AuthTokens> {
  const { data } = await axios.post(`${baseURL}/api/token/`, { username, password });
  return data as AuthTokens;
}

export async function saveTokens(access: string, refresh: string) {
  await AsyncStorage.multiSet([[ACCESS_KEY, access], [REFRESH_KEY, refresh]]);
}

export async function loadTokens(): Promise<Partial<AuthTokens>> {
  const items = await AsyncStorage.multiGet([ACCESS_KEY, REFRESH_KEY]);
  const map = Object.fromEntries(items);
  return { access: map[ACCESS_KEY] ?? undefined, refresh: map[REFRESH_KEY] ?? undefined };
}

export async function getAccessToken(): Promise<string | null> {
  return AsyncStorage.getItem(ACCESS_KEY);
}

export async function getRefreshToken(): Promise<string | null> {
  return AsyncStorage.getItem(REFRESH_KEY);
}

export async function setAccessToken(token: string) {
  await AsyncStorage.setItem(ACCESS_KEY, token);
}

export async function clearTokens() {
  await AsyncStorage.multiRemove([ACCESS_KEY, REFRESH_KEY]);
}
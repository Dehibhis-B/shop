import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useFonts } from 'expo-font';

import { useColorScheme } from '@/hooks/use-color-scheme';

import '../globals.css'

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

   const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    "Inter-Regular": require("../assets/fonts/inter-regular.ttf"),
    "Inter-SemiBold": require("../assets/fonts/inter-semi-bold.ttf"),
    "Inter-Bold": require("../assets/fonts/inter-bold.ttf"),
    "Poppins-Regular": require("../assets/fonts/poppins-regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/poppins-medium.ttf"),
    "Poppins-Semibold": require("../assets/fonts/poppins-semi-bold.ttf"),
    "Poppins-Bold": require("../assets/fonts/poppins-bold.ttf"),
    "Railway": require("../assets/fonts/Railway.ttf"),
    "Raleway": require("../assets/fonts/raleway.bold.ttf"),
  })

  if(!loaded){
    return null
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(routes)/login/index" options={{headerShown: false}}/>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

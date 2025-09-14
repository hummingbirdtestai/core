import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useFrameworkReady } from "@/hooks/useFrameworkReady";
import { AuthProvider } from "../contexts/AuthContext";
import "../global.css";

export default function RootLayout() {
  useFrameworkReady();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </AuthProvider>
    </GestureHandlerRootView>
  );
}

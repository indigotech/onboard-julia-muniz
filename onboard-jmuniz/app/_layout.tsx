import { client } from "@/constants/apollo-client";
import { AuthContextMemoProps } from "@/constants/interfaces/auth-context-memo-props";
import useAuthenticate from "@/hooks/useAuthenticate";
import { ApolloProvider } from "@apollo/client";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import { useEffect } from "react";
import "react-native-reanimated";

const defaultConte

const AuthContext = React.createContext<AuthContextMemoProps>();
// Prevent the splash screen from auto-hiding before asset loading is complete.
export default function RootLayout() {
  const [loaded] = useFonts({
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    SpaceMono: require("../assets/fonts/SpaceMono.ttf"),
  });

  const { authContext, state } = useAuthenticate();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={authContext}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="home" />
        </Stack>
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

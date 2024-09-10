import { client } from "@/constants/apollo-client";
import { AuthContext } from "@/constants/auth-context";
import { useAuthenticateUser } from "@/hooks/useAuthenticateUser";
import { ApolloProvider } from "@apollo/client";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import { useEffect } from "react";
import "react-native-reanimated";

export default function RootLayout() {
  const [loaded] = useFonts({
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    SpaceMono: require("../assets/fonts/SpaceMono.ttf"),
  });

  const authContext = useAuthenticateUser();

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
          {authContext.state.isSignout ? (
            <Stack.Screen name="index" />
          ) : (
            <Stack.Screen name="home" />
          )}
        </Stack>
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

import { client } from "@/constants/apollo-client";
import { AuthContext } from "@/constants/auth-context";
import { ApolloProvider } from "@apollo/client";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useState } from "react";
import { useEffect } from "react";
import { router } from "expo-router";
import "react-native-reanimated";

export default function RootLayout() {
  const [loaded] = useFonts({
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    SpaceMono: require("../assets/fonts/SpaceMono.ttf"),
  });

  const [loading, setLoading] = useState(true);
  const [signIn, setSignIn] = useState(false);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      setLoading(false);
    }
  }, [loaded]);

  useEffect(() => {
    if (!loading) {
      if (signIn) {
        router.replace("/home");
      } else {
        if (router.canDismiss()) {
          router.dismissAll();
        }
      }
    }
  }, [signIn, loading]);

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={{ loading, signIn, setLoading, setSignIn }}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
        </Stack>
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

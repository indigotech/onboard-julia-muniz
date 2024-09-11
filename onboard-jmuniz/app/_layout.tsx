import { client } from "@/constants/apollo-client";
import { ApolloProvider } from "@apollo/client";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import { useEffect } from "react";
import "react-native-reanimated";
import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";

export default function RootLayout() {
  const [loaded] = useFonts({
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    SpaceMono: require("../assets/fonts/SpaceMono.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  return (
    <ScrollView>
      <ApolloProvider client={client}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(home)" />
        </Stack>
      </ApolloProvider>
    </ScrollView>
  );
}

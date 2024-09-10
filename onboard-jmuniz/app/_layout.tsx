import { client } from "@/constants/apollo-client";
import { AuthContext } from "@/constants/auth-context";
import { useAuthenticateUser } from "@/hooks/useAuthenticateUser";
import { ApolloProvider } from "@apollo/client";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import { useEffect } from "react";
import { router } from "expo-router";
import "react-native-reanimated";

export default function RootLayout() {
  const [loaded] = useFonts({
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    SpaceMono: require("../assets/fonts/SpaceMono.ttf"),
  });

<<<<<<< HEAD
  const authContext = useAuthenticateUser();
=======
  const [loading, setLoading] = useState(true);
  const [signIn, setSignIn] = useState(false);
>>>>>>> 542afc0 (Loading Screen Function)

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      setLoading(false);
    }
  }, [loaded]);

  useEffect(() => {
    if (signIn) {
      router.replace("/home");
    } else {
      router.replace("/");
    }
  }, [signIn]);

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={authContext}>
        <Stack screenOptions={{ headerShown: false }}>
<<<<<<< HEAD
          {authContext.state.isSignout ? (
            <Stack.Screen name="index" />
          ) : (
            <Stack.Screen name="home" />
          )}
=======
          <Stack.Screen name="index" />
>>>>>>> 542afc0 (Loading Screen Function)
        </Stack>
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

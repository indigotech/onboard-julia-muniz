import { Stack } from "expo-router";

export function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Title" }} />
    </Stack>
  );
}

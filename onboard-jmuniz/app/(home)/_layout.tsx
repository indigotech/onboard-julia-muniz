import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="users" options={{ title: "Taqtile Users" }} />
    </Stack>
  );
}

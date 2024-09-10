import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="list" options={{ title: "Taqtile Users" }} />
    </Stack>
  );
}

import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="users"
        options={{ title: "Taqtile Users", headerBackVisible: false }}
      />
      <Stack.Screen
        name="add-users"
        options={{
          headerBackTitle: "Back",
          title: "",
        }}
      />
      <Stack.Screen
        name="details/[id]"
        options={{ title: "Details", headerBackTitle: "Back" }}
      />
    </Stack>
  );
}

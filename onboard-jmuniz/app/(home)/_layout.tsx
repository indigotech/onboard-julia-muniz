import { HeaderText } from "@/components/typography/header";
import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="users"
        options={{
          headerBackVisible: false,
          headerTitle: () => {
            return <HeaderText>Taqtile Users</HeaderText>;
          },
        }}
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
        options={{
          headerBackTitle: "Back",
          headerTitle: () => {
            return <HeaderText>Details</HeaderText>;
          },
        }}
      />
    </Stack>
  );
}

import { useRouter } from "expo-router";
import { PressableContainer } from "./pressable-container";
import { AddUserPressable } from "./add-user-pressable";
import { UserPressableIcon } from "./user-pressable-icon";

export default function AddUserButton() {
  const router = useRouter();
  return (
    <PressableContainer>
      <AddUserPressable onPress={() => router.push("/add-users")}>
        <UserPressableIcon>+</UserPressableIcon>
      </AddUserPressable>
    </PressableContainer>
  );
}

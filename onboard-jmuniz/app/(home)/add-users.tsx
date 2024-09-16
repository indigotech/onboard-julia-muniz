import * as React from "react-native";
import { DisplayText } from "@/components/typography/display";
import CreateUserForm from "@/components/form-pages/create-user-form";
import { ScrollBox } from "@/components/common/scroll-box";

export default function AddUsersView() {
  return (
    <ScrollBox>
      <DisplayText>Add a New User</DisplayText>
      <CreateUserForm />
    </ScrollBox>
  );
}

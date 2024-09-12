import { StyledTitle } from "@/components/styled-title";
import * as React from "react-native";
import CreateUserFormView from "@/components/create-user/create-user-form-view";
import { ScrollView } from "react-native-gesture-handler";

export default function AddUsersView() {
  return (
    <ScrollView>
      <StyledTitle>Add a New User</StyledTitle>
      <CreateUserFormView />
    </ScrollView>
  );
}

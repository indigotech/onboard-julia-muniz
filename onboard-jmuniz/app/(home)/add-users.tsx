import { StyledTitle } from "@/components/styled-title";
import * as React from "react-native";
import CreateUserFormView from "@/components/create-user/create-user-form-view";

export default function AddUsersView() {
  return (
    <>
      <StyledTitle>Add a New User</StyledTitle>
      <CreateUserFormView />
    </>
  );
}

import * as React from "react-native";
import { LoginSubmitButton } from "./login-submit-button";
import { LoginTextInput } from "./login-text-input";
import { LoginViewContainer } from "./login-view-container";
import { LoginTextBox } from "./login-text-box";
import { LoginLabelText } from "./login-label-text";

export function LoginView() {
  return (
    <LoginViewContainer>
      <LoginTextBox>
        <LoginLabelText>E-mail</LoginLabelText>
        <LoginTextInput />
        <LoginLabelText>Password</LoginLabelText>
        <LoginTextInput />
      </LoginTextBox>
      <LoginSubmitButton title={"Submit"}></LoginSubmitButton>
    </LoginViewContainer>
  );
}

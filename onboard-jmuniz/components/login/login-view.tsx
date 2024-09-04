import * as React from "react-native";
import { LoginSubmitButton } from "./login-submit-button";
import { LoginTextInput } from "./text-validation/login-text-input";
import { LoginViewContainer } from "./login-view-container";
import { LoginTextBox } from "./login-text-box";

export function LoginView() {
  return (
    <LoginViewContainer>
      <LoginTextBox>
        <LoginTextInput
          label="E-mail"
          conditions={[
            {
              pattern: /^[\S]{1,}[@][\S]{1,}(?:\.com)$/gm,
              message: "E-mail must have valid format: xxxx@xxxx.com.",
            },
          ]}
        />
        <LoginTextInput
          label="Password"
          conditions={[
            {
              pattern: /[a-zA-Z]{1,}/gm,
              message: "Password must have at least 1 letter.",
            },
            {
              pattern: /\d{1,}/gm,
              message: "Password must have at least 1 digit.",
            },
            {
              pattern: /\S{7,}/gm,
              message: "Password must have at least 7 valid characters.",
            },
          ]}
        />
      </LoginTextBox>
      <LoginSubmitButton title={"Submit"}></LoginSubmitButton>
    </LoginViewContainer>
  );
}

import * as React from "react-native";
import { LoginSubmitButton } from "./login-submit-button";
import { LoginTextInput } from "./text-validation/login-text-input";
import { LoginViewContainer } from "./login-view-container";
import { LoginTextBox } from "./login-text-box";
import { LoginTextInputProps } from "@/constants/interfaces/login-text-input-props";

const emailFieldData: LoginTextInputProps = {
  label: "E-mail",
  conditions: [
    {
      pattern: /^[\S]{1,}[@][\S]{1,}(?:\.com)(?:\.[a-zA-Z]{1,}){0,}$/gm,
      message: "E-mail must have valid format: xxxx@xxxx.com.",
    },
  ],
};

const passwordFieldData: LoginTextInputProps = {
  label: "Password",
  conditions: [
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
  ],
};

export function LoginView() {
  return (
    <LoginViewContainer>
      <LoginTextBox>
        <LoginTextInput data={emailFieldData} />
        <LoginTextInput data={passwordFieldData} />
      </LoginTextBox>
      <LoginSubmitButton title={"Submit"}></LoginSubmitButton>
    </LoginViewContainer>
  );
}

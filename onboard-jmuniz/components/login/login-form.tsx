import * as React from "react-native";
import { LoginFormSubmitButton } from "./login-form-submit-button";
import { LoginFormContainer } from "./login-form-container";
import { LoginFormInputContainer } from "./login-form-text-container";
import { useState } from "react";
import { useLoginUser, UseLoginUserProps } from "@/hooks/useLoginUser";
import { router } from "expo-router";
import {
  InputTextInput,
  LoginTextInputProps,
} from "./input-validation/input-text-input";

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

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginProps: UseLoginUserProps = {
    variables: {
      data: {
        email: email.toLowerCase(),
        password: password,
      },
    },
  };

  const { loginUser } = useLoginUser(loginProps);

  async function submitLogin() {
    try {
      await loginUser();
      router.push("/home");
    } catch (e) {
      if (React.Platform.OS == "web") {
        alert(e);
      } else {
        React.Alert.alert("Error", (e as Error).message);
      }
    }
  }

  return (
    <LoginFormContainer>
      <LoginFormInputContainer>
        <InputTextInput data={emailFieldData} onValidateInput={setEmail} />
        <InputTextInput
          data={passwordFieldData}
          onValidateInput={setPassword}
        />
      </LoginFormInputContainer>
      <LoginFormSubmitButton
        title={"Submit"}
        onPress={async () => await submitLogin()}
      ></LoginFormSubmitButton>
    </LoginFormContainer>
  );
}

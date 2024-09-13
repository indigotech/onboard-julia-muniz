import * as React from "react-native";
import { LoginFormSubmitButton } from "./login-form-submit-button";
import {
  InputTextInput,
  LoginTextInputProps,
} from "./input-validation/input-text-input";
import { LoginFormContainer } from "./login-form-container";
import { LoginFormInputContainer } from "./login-form-text-container";
import { useState } from "react";
import useLoginUser, { UseLoginUserProps } from "@/hooks/useLoginUser";
import { useRouter } from "expo-router";

export const emailFieldData: LoginTextInputProps = {
  label: "E-mail",
  conditions: [
    {
      pattern: /^[\S]{1,}[@][\S]{1,}(?:\.com)(?:\.[a-zA-Z]{1,}){0,}$/gm,
      message: "E-mail must have valid format: xxxx@xxxx.com.",
    },
  ],
  secureEntry: false,
};

export const passwordFieldData: LoginTextInputProps = {
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
  secureEntry: true,
};

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useLoginUser();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const loginProps: UseLoginUserProps = {
    variables: {
      data: {
        email: email.toLowerCase(),
        password: password,
      },
    },
  };

  async function submitLogin() {
    try {
      setLoading(true);
      await loginUser(loginProps);
      router.replace("/users");
    } catch (e) {
      if (React.Platform.OS == "web") {
        alert(e);
      } else {
        React.Alert.alert("Error", (e as Error).message);
      }
    } finally {
      setLoading(false);
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
      {loading ? (
        <React.ActivityIndicator size="large" />
      ) : (
        <LoginFormSubmitButton title={"Submit"} onPress={submitLogin} />
      )}
    </LoginFormContainer>
  );
}

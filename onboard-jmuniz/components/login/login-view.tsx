import * as React from "react-native";
import { LoginSubmitButton } from "./login-submit-button";
import { LoginTextInput } from "./login-text-input";
import { LoginViewContainer } from "./login-view-container";
import { LoginTextBox } from "./login-text-box";
import { LoginLabelText } from "./login-label-text";
import { useState } from "react";

export function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function isProfileValid(): string[] {
    const result: string[] = [];
    if (!email) {
      result.push("E-mail field must not be empty.\n");
    } else if (!/[\S]*[@][\S]*[.com]/gm.test(email)) {
      result.push("Must input valid email format: xxxx@xxxx.com.\n");
    }
    if (!password) {
      result.push("Password field must not be empty.\n");
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=\S{7,}).*/gm.test(password)) {
      result.push(
        "Password must have at least 7 characters, 1 letter and 1 digit.\n",
      );
    }
    return result;
  }

  function evaluateLogIn() {
    const profileEval: string[] = isProfileValid();
    if (profileEval.length) {
      let message = "";
      for (const item in profileEval) {
        message += profileEval[item];
      }
      alert(message);
    }
  }

  return (
    <LoginViewContainer>
      <LoginTextBox>
        <LoginLabelText>E-mail</LoginLabelText>
        <LoginTextInput value={email} onChangeText={setEmail} />
        <LoginLabelText>Password</LoginLabelText>
        <LoginTextInput value={password} onChangeText={setPassword} />
      </LoginTextBox>
      <LoginSubmitButton
        title={"Submit"}
        onPress={evaluateLogIn}
      ></LoginSubmitButton>
    </LoginViewContainer>
  );
}

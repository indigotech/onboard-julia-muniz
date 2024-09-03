import * as React from "react-native";
import { LoginSubmitButton } from "./login-submit-button";
import { LoginTextInput } from "./login-text-input";
import styled from "styled-components/native";

export function LoginView() {
  const LabelText = styled.Text`
    font-size: 15px;
    margin: 10px;
  `;

  const LoginTextBox = styled.View`
    margin-top: 40px;
    margin-bottom: 30px;
  `;

  const LoginViewContainer = styled.View`
    margin: 30px 10px;
  `;

  return (
    <LoginViewContainer>
      <LoginTextBox>
        <LabelText>E-mail</LabelText>
        <LoginTextInput />
        <LabelText>Password</LabelText>
        <LoginTextInput />
      </LoginTextBox>
      <LoginSubmitButton title={"Submit"}></LoginSubmitButton>
    </LoginViewContainer>
  );
}

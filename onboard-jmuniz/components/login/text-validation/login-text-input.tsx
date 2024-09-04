import styled from "styled-components/native";
import { LoginLabelText } from "./login-label-text";
import { LoginWarningText } from "./login-waring-text";
import { View } from "react-native";
import { useState } from "react";

export const StyledInput = styled.TextInput`
  padding: 10px;
  background-color: #e8e8e8;
  border-radius: 5px;
  box-shadow: 2px 2px #dcdcdc;
`;

interface LoginTextInputProps {
  label: string;
  conditions: { pattern: RegExp; message: string }[];
  onValueChange: (value: string) => void;
}
export function LoginTextInput(props: LoginTextInputProps) {
  const [value, setValue] = useState("");
  const [warning, setWarning] = useState("");

  function validateInput(input: string) {
    setValue(input);
    const messages = props.conditions
      .filter((entry) => !input.match(entry.pattern))
      .map((entry) => entry.message);
    console.log(messages);
    setWarning(messages.join("\n"));
  }

  return (
    <View>
      <LoginLabelText>{props.label}</LoginLabelText>
      <StyledInput value={value} onChangeText={validateInput}></StyledInput>
      <LoginWarningText>{warning}</LoginWarningText>
    </View>
  );
}

import styled from "styled-components/native";
import { LoginLabelText } from "./input-label-text";
import { LoginWarningText } from "./input-waring-text";
import { View } from "react-native";
import { useState } from "react";
import { LoginTextInputProps } from "@/constants/interfaces/login-text-input-props";

const StyledInput = styled.TextInput`
  padding: 10px;
  background-color: #e8e8e8;
  border-radius: 5px;
  box-shadow: 2px 2px #dcdcdc;
`;

export function LoginTextInput(props: {
  data: LoginTextInputProps;
  onValidateInput: (input: string) => void;
}) {
  const [value, setValue] = useState("");
  const [warning, setWarning] = useState("");

  function validateInput(input: string) {
    setValue(input);
    const messages = props.data.conditions
      .filter((entry) => !input.match(entry.pattern))
      .map((entry) => entry.message);
    setWarning(messages.join("\n"));
    if (messages.length) {
      props.onValidateInput(input);
    }
  }

  return (
    <View>
      <LoginLabelText>{props.data.label}</LoginLabelText>
      <StyledInput value={value} onChangeText={validateInput}></StyledInput>
      <LoginWarningText>{warning}</LoginWarningText>
    </View>
  );
}

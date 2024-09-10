import styled from "styled-components/native";
import { InputLabelText } from "./input-label-text";
import { InputWarningText } from "./input-waring-text";
import { View } from "react-native";
import { useState } from "react";

const StyledInput = styled.TextInput`
  padding: 10px;
  background-color: #e8e8e8;
  border-radius: 5px;
  box-shadow: 2px 2px #dcdcdc;
`;

export interface LoginTextInputProps {
  label: string;
  conditions: { pattern: RegExp; message: string }[];
}

export function InputTextInput(props: {
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
    if (!messages.length) {
      props.onValidateInput(input);
    }
  }

  return (
    <View>
      <InputLabelText>{props.data.label}</InputLabelText>
      <StyledInput value={value} onChangeText={validateInput}></StyledInput>
      <InputWarningText>{warning}</InputWarningText>
    </View>
  );
}

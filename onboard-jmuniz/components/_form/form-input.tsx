import styled from "styled-components/native";
import { LabelText } from "../_typography/label";
import { useState } from "react";
import { WarningText } from "../_typography/warning";

const StyledInput = styled.TextInput<{ $invalid: boolean }>`
  background-color: #777777;
  border-radius: 5px;
  padding: 1px;
  border: 1px;
  border-color: ${(props) => (props.$invalid ? "red" : "black")};
  color: ${(props) => (props.$invalid ? "red" : "black")};
  width: 100%;
`;

export interface TextInputProps {
  label: string;
  conditions: { pattern: RegExp; message: string }[];
  secureEntry: boolean;
}

export function FormInput(props: {
  data: TextInputProps;
  onValidateInput: (input: string) => void;
}) {
  const [value, setValue] = useState("");
  const [warning, setWarning] = useState("");
  const [error, setError] = useState(false);

  function validateInput(input: string) {
    setValue(input);
    const messages = props.data.conditions
      .filter((entry) => !input.match(entry.pattern))
      .map((entry) => entry.message);
    if (!messages.length) {
      props.onValidateInput(input);
      setError(false);
    } else {
      setWarning(messages.join("\n"));
      setError(true);
    }
  }

  return (
    <>
      <LabelText $invalid={error}>{props.data.label}</LabelText>
      <StyledInput
        value={value}
        onChangeText={validateInput}
        secureTextEntry={props.data.secureEntry}
        $invalid={error}
      />
      <WarningText $invalid={error}>{warning}</WarningText>
    </>
  );
}

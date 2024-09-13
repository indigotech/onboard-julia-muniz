import styled from "styled-components/native";
import { LabelText } from "../typography/label";
import { useState } from "react";
import { WarningText } from "../typography/warning";
import { Box } from "../common/box";

const StyledInput = styled.TextInput<{ $invalid: boolean }>`
  background-color: #dcdcdc;
  border-radius: 5px;
  padding: 5px;
  border: 1px;
  border-color: ${(props) => (props.$invalid ? "red" : "#777777")};
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
    <Box>
      <LabelText $invalid={error}>{props.data.label}</LabelText>
      <StyledInput
        value={value}
        onChangeText={validateInput}
        secureTextEntry={props.data.secureEntry}
        $invalid={error}
      />
      <WarningText $invalid={error}>{warning}</WarningText>
    </Box>
  );
}

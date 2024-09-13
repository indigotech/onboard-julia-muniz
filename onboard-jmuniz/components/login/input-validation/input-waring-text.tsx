import styled from "styled-components/native";

export const InputWarningText = styled.Text<{ $visibility?: string }>`
  font-size: 10px;
  margin: 10px;
  color: red;
  visibility: $visibility;
`;

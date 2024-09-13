import styled from "styled-components/native";

export const WarningText = styled.Text<{ $invalid: boolean }>`
  font-size: 12px;
  font-weight: normal;
  color: red;
  margin-top: 8px;
  display: ${(props) => (props.$invalid ? "block" : "none")};
`;

import styled from "styled-components/native";

export const LabelText = styled.Text<{ $invalid: boolean }>`
  font-size: 12px;
  font-weight: normal;
  color: ${(props) => (props.$invalid ? "red" : "#777777")};
  margin-bottom: 12px;
`;

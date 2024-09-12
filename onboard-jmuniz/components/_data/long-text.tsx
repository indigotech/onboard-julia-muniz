import { ContentText } from "../_typography/content";
import { LabelText } from "../_typography/label";
import styled from "styled-components/native";

const LongTextContainer = styled.View`
  background-color: #777777;
  border-radius: 5px;
  border: 1px;
  padding: 1px;
  border-color: black;
  width: 100%;
`;

export interface LongTextDataProps {
  label: string;
  value: string;
}

export default function LongTextData(props: LongTextDataProps) {
  return (
    <>
      <LabelText $invalid={false}>{props.label}</LabelText>
      <LongTextContainer>
        <ContentText>{props.value}</ContentText>
      </LongTextContainer>
    </>
  );
}

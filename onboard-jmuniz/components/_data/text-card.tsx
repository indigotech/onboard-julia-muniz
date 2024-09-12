import { ContentText } from "../_typography/content";
import { LabelText } from "../_typography/label";
import styled from "styled-components/native";

const TextCardContainer = styled.View`
  background-color: #777777;
  border-bottom: 1px;
  padding: 1px;
  border-color: black;
  width: 100%;
`;

export interface TextCardDataProps {
  mainValue: string;
  subValue: string;
}

export default function TextCardData(props: TextCardDataProps) {
  return (
    <TextCardContainer>
      <ContentText>{props.mainValue}</ContentText>
      <LabelText $invalid={false}>{props.subValue}</LabelText>
    </TextCardContainer>
  );
}

import { ContentText } from "../typography/content";
import { LabelText } from "../typography/label";
import styled from "styled-components/native";

const TextCardContainer = styled.View`
  background-color: #fefefe;
  padding: 5px;
  width: 100%;
  padding-left: 10px;
  border: 1px solid;
  border-color: #dcdcdc;
  border-top: 0px;
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

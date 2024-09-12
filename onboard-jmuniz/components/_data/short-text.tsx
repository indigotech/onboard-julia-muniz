import { ContentText } from "../_typography/content";
import { LabelText } from "../_typography/label";
import styled from "styled-components/native";
import { CenterColumn } from "../create-user/center-column";

const ShortTextContainer = styled.View`
  background-color: #777777;
  border-radius: 5px;
  border: 1px;
  padding: 1px;
  border-color: black;
`;

export interface ShortTextDataProps {
  label: string;
  value: string;
}

export default function ShortTextData(props: ShortTextDataProps) {
  return (
    <CenterColumn>
      <LabelText $invalid={false}>{props.label}</LabelText>
      <ShortTextContainer>
        <ContentText>{props.value}</ContentText>
      </ShortTextContainer>
    </CenterColumn>
  );
}

import { ContentText } from "../typography/content";
import { LabelText } from "../typography/label";
import styled from "styled-components/native";
import { ShortTextContainer } from "./short-text";

const LongTextContainer = styled(ShortTextContainer)`
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

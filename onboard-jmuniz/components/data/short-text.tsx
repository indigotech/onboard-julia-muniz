import { ContentText } from "../typography/content";
import { LabelText } from "../typography/label";
import styled from "styled-components/native";
import { Box } from "../common/box";
import { CenterColumn } from "../common/center-column";

export const ShortTextContainer = styled(Box)`
  background-color: #fefefe;
  border-radius: 5px;
  padding: 5px;
  border: 1px solid #777777;
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

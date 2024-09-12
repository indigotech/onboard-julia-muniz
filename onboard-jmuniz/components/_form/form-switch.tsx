// import styled from "styled-components/native";
import { CenterColumn } from "../_common/center-column";
import { LabelText } from "../_typography/label";
import { Switch } from "react-native";

export default function FormSwitch(props: {
  label: string;
  onChangeValue: (value: boolean) => void;
}) {
  return (
    <CenterColumn>
      <LabelText $invalid={false}>{props.label}</LabelText>
      <Switch onValueChange={props.onChangeValue} />
    </CenterColumn>
  );
}

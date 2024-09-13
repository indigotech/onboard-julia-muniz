import { CenterColumn } from "../common/center-column";
import { LabelText } from "../typography/label";
import { Switch } from "react-native";

export default function FormSwitch(props: {
  data: { label: string; value: boolean };

  onChangeValue: (value: boolean) => void;
}) {
  return (
    <CenterColumn>
      <LabelText $invalid={false}>{props.data.label}</LabelText>
      <Switch value={props.data.value} onValueChange={props.onChangeValue} />
    </CenterColumn>
  );
}

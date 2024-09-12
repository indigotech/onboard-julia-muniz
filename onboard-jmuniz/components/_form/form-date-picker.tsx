import { CenterColumn } from "../_common/center-column";
import { LabelText } from "../_typography/label";
import DatePicker from "./date-picker/date-picker";

export interface FormDatePickerProps {
  label: string;
  date: Date;
}

export default function FormDatePicker(props: {
  data: FormDatePickerProps;
  onValueChange: (date: Date) => void;
}) {
  return (
    <CenterColumn>
      <LabelText $invalid={false}>{props.data.label}</LabelText>
      <DatePicker date={props.data.date} setDate={props.onValueChange} />
    </CenterColumn>
  );
}

import { Text, Platform } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import styled from "styled-components/native";

const AndroidDatePickerPressable = styled.Pressable`
  background-color: #777777;
  padding: 5%;
`;

const minimumDate = new Date("1920-01-01");

export default function DatePicker(props: {
  date: Date;
  setDate: (input: Date) => void;
}) {
  const onChange = (event: DateTimePickerEvent, date?: Date) => {
    const currentDate = date ?? new Date();
    props.setDate(currentDate);
  };

  if (Platform.OS == "android") {
    function openAndroidDatepicker() {
      DateTimePickerAndroid.open({
        value: props.date,
        onChange,
        mode: "date",
        minimumDate: minimumDate,
        maximumDate: new Date(),
      });
    }

    return (
      <AndroidDatePickerPressable onPress={openAndroidDatepicker}>
        <Text>
          {props.date.toLocaleDateString([], {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </Text>
      </AndroidDatePickerPressable>
    );
  } else {
    return (
      <DateTimePicker
        value={props.date}
        mode="date"
        onChange={onChange}
        minimumDate={minimumDate}
        maximumDate={new Date()}
      />
    );
  }
}

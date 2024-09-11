import { Text, Platform } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import styled from "styled-components/native";

const AndroidDatepickerContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const AndroidDatePickerPressable = styled.Pressable`
  background-color: #cdcdcd;
  padding: 5%;
`;

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
      });
    }

    return (
      <AndroidDatepickerContainer>
        <AndroidDatePickerPressable onPress={openAndroidDatepicker}>
          <Text>
            {props.date.toLocaleDateString([], {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </Text>
        </AndroidDatePickerPressable>
      </AndroidDatepickerContainer>
    );
  } else {
    return (
      <DateTimePicker value={props.date} mode="date" onChange={onChange} />
    );
  }
}

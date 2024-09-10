import { ActivityIndicator } from "react-native";
import { InputLabelText } from "../login/input-validation/input-label-text";

export default function UsersListLoading(props: { isLoading: boolean }) {
  if (props.isLoading) {
    return <ActivityIndicator size={"small"} />;
  }
  return <InputLabelText>No more users found!</InputLabelText>;
}

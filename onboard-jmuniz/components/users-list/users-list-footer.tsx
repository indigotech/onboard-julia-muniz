import { ActivityIndicator } from "react-native";
import { InputLabelText } from "../login/input-validation/input-label-text";

export default function FlatListFooter(hasMore: boolean) {
  if (hasMore) {
    return <ActivityIndicator size={"large"} />;
  }
  return <InputLabelText>End of List</InputLabelText>;
}

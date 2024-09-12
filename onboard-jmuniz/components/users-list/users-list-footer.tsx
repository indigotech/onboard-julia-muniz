import { ActivityIndicator } from "react-native";
import { InputLabelText } from "../login/input-validation/input-label-text";
import { StyledView } from "../styled-view";

export default function FlatListFooter(hasMore: boolean) {
  if (hasMore) {
    return <ActivityIndicator size={"large"} />;
  }
  return (
    <StyledView>
      <InputLabelText>End of List</InputLabelText>
    </StyledView>
  );
}

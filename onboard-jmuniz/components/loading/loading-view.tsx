import { StyledView } from "../styled-view";
import { ActivityIndicator } from "react-native";

export default function LoadingView() {
  return (
    <StyledView>
      <ActivityIndicator size="large" />
    </StyledView>
  );
}

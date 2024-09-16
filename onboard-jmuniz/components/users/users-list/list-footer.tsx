import { CenterColumn } from "@/components/common/center-column";
import { LabelText } from "@/components/typography/label";
import { ActivityIndicator } from "react-native";

export default function ListFooter(endNotReached: boolean) {
  if (endNotReached) {
    return <ActivityIndicator size={"large"} />;
  }
  return (
    <CenterColumn>
      <LabelText $invalid={false}>No more users found</LabelText>
    </CenterColumn>
  );
}

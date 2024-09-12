import { ButtonText } from "../_typography/button";
import { Href, useRouter } from "expo-router";
import { Alert } from "react-native";
import { StyledTouchable } from "../_common/styled-touchable";

export interface FormPressableProps<QueryProps, ResponseProps> {
  redirectPath: Href<string>;
  queryFunction: (props: QueryProps) => Promise<ResponseProps | undefined>;
  queryProps: QueryProps;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  label: string;
}

export default function FormPressable<QueryProps, ResponseProps>(
  props: FormPressableProps<QueryProps, ResponseProps>,
) {
  const router = useRouter();
  async function submitForm() {
    try {
      props.setLoading(true);
      await props.queryFunction(props.queryProps);
      router.replace(props.redirectPath);
    } catch (e) {
      Alert.alert("Error", (e as Error).message);
    } finally {
      props.setLoading(false);
    }
  }

  return (
    <StyledTouchable onPress={submitForm}>
      <ButtonText>{props.label}</ButtonText>
    </StyledTouchable>
  );
}

import styled from "styled-components/native";
import { FabTouchable } from "./fab-touchable";
import { ButtonText } from "@/components/_typography/button";
import { Href, useRouter } from "expo-router";

const FabButtonContainer = styled.View`
  height: 0%;
  width: 100%;
  margin: auto;
  display: flex;
`;

export default function FabButton(props: { route: Href<string> }) {
  const router = useRouter();
  return (
    <FabButtonContainer>
      <FabTouchable onPress={() => router.push(props.route)}>
        <ButtonText>+</ButtonText>
      </FabTouchable>
    </FabButtonContainer>
  );
}

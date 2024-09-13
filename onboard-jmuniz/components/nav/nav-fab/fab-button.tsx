import styled from "styled-components/native";
import { FabTouchable } from "./fab-touchable";
import { Href, useRouter } from "expo-router";
import { FabText } from "@/components/typography/fab";

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
        <FabText>+</FabText>
      </FabTouchable>
    </FabButtonContainer>
  );
}

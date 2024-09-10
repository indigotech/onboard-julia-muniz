import { StyledView } from "@/components/styled-view";
import { StyledTitle } from "@/components/styled-title";
import { Pressable } from "react-native";
import { getToken } from "@/constants/secure-store";

export default function HomeView() {
  return (
    <StyledView>
      <StyledTitle> User logged in Successfully! </StyledTitle>
      <Pressable onPress={() => console.log(getToken())}>
        <StyledTitle> Get Token Test </StyledTitle>
      </Pressable>
    </StyledView>
  );
}

import { StyledView } from "@/components/styled-view";
import { StyledTitle } from "@/components/styled-title";
import React from "react";
import { LoginView } from "@/components/login-view";
export default function IndexView() {
  return (
    <StyledView>
      <StyledTitle> Welcome to Taqtile! </StyledTitle>
      <LoginView />
    </StyledView>
  );
}

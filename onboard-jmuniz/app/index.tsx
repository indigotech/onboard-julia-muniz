import { StyledView } from "@/components/styled-view";
import { StyledTitle } from "@/components/styled-title";
import React from "react";
import { LoginForm } from "@/components/login/login-form";

export default function LoginView() {
  return (
    <StyledView>
      <StyledTitle> Welcome to Taqtile! </StyledTitle>
      <LoginForm />
    </StyledView>
  );
}

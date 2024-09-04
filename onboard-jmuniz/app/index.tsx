import { StyledView } from "@/components/styled-view";
import { StyledTitle } from "@/components/styled-title";
import React from "react";
import { LoginView } from "@/components/login/login-view";

export default function IndexView() {
  // const clientLogin = (profile: loginProfile): number => {
  //   console.log(profile.email);
  //   console.log(profile.password);
  //   return 0;
  // };

  return (
    <StyledView>
      <StyledTitle> Welcome to Taqtile! </StyledTitle>
      <LoginView />
    </StyledView>
  );
}

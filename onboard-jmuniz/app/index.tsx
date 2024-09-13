import React from "react";
import LoginForm from "@/components/form-pages/login-form";
import { DisplayText } from "@/components/typography/display";
import { ContentBox } from "@/components/common/content-box";
import { LoginBox } from "@/components/login/login-box";

export default function LoginView() {
  return (
    <LoginBox>
      <ContentBox>
        <DisplayText>Welcome to Taqtile!</DisplayText>
        <LoginForm />
      </ContentBox>
    </LoginBox>
  );
}

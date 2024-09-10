import { StyledView } from "@/components/styled-view";
import { StyledTitle } from "@/components/styled-title";
import React from "react";
import { LoginForm } from "@/components/login/login-form";
import LoadingView from "@/components/loading/loading-view";
import { useGetContext } from "@/hooks/UseGetContext";

export default function LoginView() {
  const { loading } = useGetContext();
  return (
    <StyledView>
      {loading ? (
        <LoadingView />
      ) : (
        <>
          <StyledTitle> Welcome to Taqtile! </StyledTitle>
          <LoginForm />
        </>
      )}
    </StyledView>
  );
}

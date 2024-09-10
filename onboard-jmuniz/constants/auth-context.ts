import React from "react";
import { AuthContextProps } from "./interfaces/auth-context-props";
import AuthSignInResponseProps from "./interfaces/auth-signin-response-props";

export const AuthContext = React.createContext<AuthContextProps>({
  state: {
    isLoading: false,
    isSignout: true,
    userToken: null,
  },
  operations: {
    signIn: async () => {
      const response: AuthSignInResponseProps = { error: null };
      return response;
    },
    signOut: () => {
      return;
    },
    signUp: async () => {
      return;
    },
    restoreToken: () => {
      return;
    },
  },
});

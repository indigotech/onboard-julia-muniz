import React from "react";
<<<<<<< HEAD
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
=======

export interface AuthContextProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  signIn: boolean;
  setSignIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = React.createContext<AuthContextProps | undefined>(
  undefined,
);
>>>>>>> 542afc0 (Loading Screen Function)

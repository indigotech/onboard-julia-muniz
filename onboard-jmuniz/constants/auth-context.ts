import React from "react";

export interface AuthContextProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  signIn: boolean;
  setSignIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = React.createContext<AuthContextProps | undefined>(
  undefined,
);

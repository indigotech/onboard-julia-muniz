import { UseLoginUserProps } from "./use-login-user-props";

export interface AuthContextMemoProps {
  signIn: (data: UseLoginUserProps) => Promise<void>;
  signOut: () => void;
  signUp: (data: UseLoginUserProps) => Promise<void>;
  restoreToken: () => void;
}

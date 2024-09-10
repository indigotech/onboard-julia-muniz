import { AuthContextStateProps } from "./auth-context-state-props";
import AuthSignInResponseProps from "./auth-signin-response-props";
import { UseLoginUserProps } from "./use-login-user-props";

export interface AuthContextProps {
  state: AuthContextStateProps;
  operations: {
    signIn: (data: UseLoginUserProps) => Promise<AuthSignInResponseProps>;
    signOut: () => void;
    signUp: (data: UseLoginUserProps) => Promise<void>;
    restoreToken: () => void;
  };
}

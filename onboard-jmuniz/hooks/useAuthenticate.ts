import * as React from "react";
import { getToken } from "@/constants/secure-store";
import { useLoginUser } from "./useLoginUser";
import { UseLoginUserProps } from "@/constants/interfaces/use-login-user-props";
import { AuthContextStateProps } from "@/constants/interfaces/auth-context-state-props";
import { AuthContextMemoProps } from "@/constants/interfaces/auth-context-memo-props";

type Action =
  | { type: "RESTORE_TOKEN"; token: string }
  | { type: "SIGN_IN"; token: string }
  | { type: "SIGN_OUT" };

export default function useAuthenticate() {
  const [state, dispatch] = React.useReducer(
    (
      prevState: AuthContextStateProps,
      action: Action,
    ): AuthContextStateProps => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  const authContext: AuthContextMemoProps = React.useMemo(
    () => ({
      signIn: async (data: UseLoginUserProps) => {
        try {
          const { loginUser } = useLoginUser(data);
          const result = await loginUser();
          dispatch({ type: "SIGN_IN", token: result?.login.token || "" });
        } catch (e) {
          console.log(e);
        }
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async (data: UseLoginUserProps) => {
        // not implemented yet
        console.log(data);
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
      restoreToken: () => {
        try {
          const userToken = getToken();
          dispatch({ type: "RESTORE_TOKEN", token: userToken || "" });
        } catch (e) {
          console.log(e);
        }
      },
    }),
    [],
  );

  return { authContext, state };
}

import * as React from "react";
import { getToken, saveToken } from "@/constants/secure-store";
import { UseLoginUserProps } from "@/constants/interfaces/use-login-user-props";
import { AuthContextStateProps } from "@/constants/interfaces/auth-context-state-props";
import { AuthContextProps } from "@/constants/interfaces/auth-context-props";
import { FetchResult, gql, useMutation } from "@apollo/client";
import { LoginUserResponseProps } from "@/constants/interfaces/login-user-response-props";
import AuthSignInResponseProps from "@/constants/interfaces/auth-signin-response-props";

export enum AuthActionEnum {
  SIGN_IN = "SIGN_IN",
  SIGN_OUT = "SIGN_OUT",
  RESTORE_TOKEN = "RESTORE_TOKEN",
}

interface AuthAction {
  type: AuthActionEnum;
  token: string | null;
}

const LOGIN_USER = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      token
    }
  }
`;

export function useAuthenticateUser(): AuthContextProps {
  const [state, dispatch] = React.useReducer(
    (
      prevState: AuthContextStateProps,
      action: AuthAction,
    ): AuthContextStateProps => {
      switch (action.type) {
        case AuthActionEnum.RESTORE_TOKEN:
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case AuthActionEnum.SIGN_IN:
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case AuthActionEnum.SIGN_OUT:
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
        default:
          return {
            ...prevState,
          };
      }
    },
    {
      isLoading: false,
      isSignout: true,
      userToken: null,
    },
  );

  const signIn = async (props: UseLoginUserProps) => {
    const [executeUserLogin] = useMutation(LOGIN_USER);
    const response: AuthSignInResponseProps = { error: null };
    try {
      if (props.variables.data.email && props.variables.data.password) {
        const result: FetchResult<LoginUserResponseProps> =
          await executeUserLogin(props);
        if (!result.data) {
          throw new Error("Failed to fetch user");
        }
        await saveToken(result.data.login.token);
        dispatch({
          type: AuthActionEnum.SIGN_IN,
          token: result.data.login.token,
        });
      }
    } catch (e) {
      if (e instanceof Error) {
        response.error = e.message;
      }
      response.error = JSON.stringify(e);
    }
    return response;
  };

  const signUp = async (data: UseLoginUserProps) => {
    console.log(data);
  };

  const signOut = () => {
    dispatch({ type: AuthActionEnum.SIGN_OUT, token: null });
  };

  const restoreToken = () => {
    try {
      dispatch({ type: AuthActionEnum.RESTORE_TOKEN, token: getToken() });
    } catch (e) {
      console.log(e);
    }
  };

  return { state, operations: { signIn, signOut, restoreToken, signUp } };
}

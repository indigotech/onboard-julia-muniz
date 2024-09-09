import { LoginUserResponseProps } from "@/constants/interfaces/login-user-response-props";
import { SaveToken } from "@/constants/secure-store";
import { FetchResult, gql, useMutation } from "@apollo/client";
import { useState } from "react";

const LOGIN_USER = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      token
    }
  }
`;

export interface UseLoginUserProps {
  variables: {
    data: {
      email: string;
      password: string;
    };
  };
}

export const useLoginUser = (props: UseLoginUserProps) => {
  const [executeUserLogin] = useMutation(LOGIN_USER);
  const [successfull, setSuccessful] = useState(false);

  const loginUser = async () => {
    if (props.variables.data.email && props.variables.data.password) {
      const result: FetchResult<LoginUserResponseProps> =
        await executeUserLogin(props);
      if (!result.data) {
        throw new Error("Failed to fetch user");
      }
      setSuccessful(true);
      await SaveToken(result.data.login.token);
      return result.data;
    }
  };
  return { loginUser, successfull };
};

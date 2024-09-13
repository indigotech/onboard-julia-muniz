import { saveToken } from "@/constants/secure-store";
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
export interface LoginUserResponseProps {
  login: {
    token: string;
  };
}

export default function useLoginUser() {
  const [executeUserLogin] = useMutation(LOGIN_USER);
  const [successfull, setSuccessful] = useState(false);

  const loginUser = async (props: UseLoginUserProps) => {
    if (props.variables.data.email && props.variables.data.password) {
      const result: FetchResult<LoginUserResponseProps> =
        await executeUserLogin(props);
      if (!result.data) {
        throw new Error("Failed to fetch user");
      }
      setSuccessful(true);
      await saveToken(result.data.login.token);
      return result.data;
    }
    throw new Error("User credentials must be valid");
  };
  return { loginUser, successfull };
}

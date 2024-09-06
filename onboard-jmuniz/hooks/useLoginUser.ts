import { loginUserResponseProps } from "@/constants/interfaces/login-user-response-props";
import { useLoginUserProps } from "@/constants/interfaces/use-login-user-props";
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

export const useLoginUser = (props: useLoginUserProps) => {
  const [executeUserLogin] = useMutation(LOGIN_USER);
  const [successfull, setSuccessful] = useState(false);

  const loginUser = async () => {
    if (props.variables.data.email && props.variables.data.password) {
      const result: FetchResult<loginUserResponseProps> =
        await executeUserLogin(props);
      if (!result.data) {
        throw new Error("Failed to fetch user");
      }
      setSuccessful(true);
      await saveToken(result.data.login.token);
      return result.data;
    }
  };
  return { loginUser, successfull };
};

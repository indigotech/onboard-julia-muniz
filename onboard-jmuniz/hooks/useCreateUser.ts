import { FetchResult, gql, useMutation } from "@apollo/client";
import { useState } from "react";

const LOGIN_USER = gql`
  mutation CreateUser($data: UserInput!) {
    createUser(data: $data) {
      id
    }
  }
`;

export enum UserRole {
  USER = "user",
  ADMIN = "admin",
}

export interface UseCreateUserProps {
  variables: {
    data: {
      name: string;
      email: string;
      birthDate: Date;
      phone: string;
      role: UserRole;
      password: string;
    };
  };
}
export interface CreateUserResponseProps {
  createUser: {
    id: number;
  };
}

function propsAreValid(props: UseCreateUserProps) {
  if (
    props.variables.data.name &&
    props.variables.data.email &&
    props.variables.data.password &&
    props.variables.data.phone &&
    props.variables.data.birthDate &&
    Object.values(UserRole).includes(props.variables.data.role)
  ) {
    return true;
  }
  return false;
}

export default function useCreateUser() {
  const [executeUserLogin] = useMutation(LOGIN_USER);
  const [successfull, setSuccessful] = useState(false);

  const createUser = async (props: UseCreateUserProps) => {
    if (propsAreValid(props)) {
      const result: FetchResult<CreateUserResponseProps> =
        await executeUserLogin(props);
      if (!result.data) {
        throw new Error("Failed to create user");
      }
      setSuccessful(true);
      return result.data;
    }
  };
  return { createUser, successfull };
}

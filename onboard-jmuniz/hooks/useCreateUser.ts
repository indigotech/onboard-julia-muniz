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

export interface CreateUserProps {
  email: string;
  password: string;
  birthDate: Date;
  phone: string;
  name: string;
  role: UserRole;
}

export interface UseCreateUserProps {
  variables: {
    data: CreateUserProps;
  };
}
export interface CreateUserResponseProps {
  createUser: {
    id: number;
  };
}

function propsAreValid(props: UseCreateUserProps) {
  return (
    props.variables.data.name &&
    props.variables.data.email &&
    props.variables.data.password &&
    props.variables.data.phone &&
    props.variables.data.birthDate &&
    Object.values(UserRole).includes(props.variables.data.role)
  );
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
    throw new Error("All fields must be valid");
  };
  return { createUser, successfull };
}

import { gql, useQuery } from "@apollo/client";
import { CreateUserProps } from "./useCreateUser";

const USER_DETAILS = gql`
  query User($id: ID) {
    user(id: $id) {
      name
      phone
      birthDate
      email
      role
    }
  }
`;

interface UseGetUserProps {
  user: CreateUserProps;
}

export default function useGetUserDetails(id: number) {
  const { loading, data } = useQuery<UseGetUserProps>(USER_DETAILS, {
    variables: { id: id },
  });
  return { loading, data };
}

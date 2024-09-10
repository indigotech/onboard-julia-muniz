import { gql, useQuery } from "@apollo/client";
import { GetToken } from "@/constants/secure-store";
import { UserProps } from "@/app/(home)/list";

const PAGE_SIZE = 20;

const USERS_LIST = gql`
  query Users($data: PageInput!) {
    users(data: $data) {
      nodes {
        name
        email
      }
    }
  }
`;

export interface UsersListResultProps {
  users: {
    nodes: UserProps[];
  };
}

export default function useGetUsersList(): UserProps[] | undefined {
  const token = GetToken();
  // const apolloClient = client;
  const { data } = useQuery<UsersListResultProps>(USERS_LIST, {
    variables: { data: { offset: 300, limit: PAGE_SIZE } },
    context: {
      headers: {
        authorization: token,
      },
    },
  });

  return data?.users.nodes;
}

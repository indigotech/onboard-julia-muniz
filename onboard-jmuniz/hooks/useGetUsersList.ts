import { gql, useQuery } from "@apollo/client";

export const QUERY_LIMIT = 20;

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

export interface UserProps {
  email: string;
  name: string;
}

export interface UsersListResultProps {
  users: {
    nodes: UserProps[];
  };
}

export default function useGetUsersList(offset: number) {
  const { loading, data, fetchMore } = useQuery<UsersListResultProps>(
    USERS_LIST,
    {
      variables: { data: { offset: offset, limit: QUERY_LIMIT } },
      fetchPolicy: "cache-and-network",
      notifyOnNetworkStatusChange: true,
    },
  );
  return { loading, data, fetchMore };
}

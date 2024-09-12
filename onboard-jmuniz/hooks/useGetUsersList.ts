import { gql, useQuery } from "@apollo/client";

export const QUERY_LIMIT = 20;

const USERS_LIST = gql`
  query Users($data: PageInput!) {
    users(data: $data) {
      nodes {
        name
        email
        id
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;

export interface UserProps {
  email: string;
  name: string;
  id: number;
}

export interface UsersListResultProps {
  users: {
    nodes: UserProps[];
    pageInfo: {
      hasNextPage: boolean;
    };
  };
}

export default function useGetUsersList(offset: number) {
  const { loading, data, fetchMore } = useQuery<UsersListResultProps>(
    USERS_LIST,
    {
      variables: { data: { offset: offset, limit: QUERY_LIMIT } },
      fetchPolicy: "no-cache",
      notifyOnNetworkStatusChange: true,
    },
  );
  return { loading, data, fetchMore };
}

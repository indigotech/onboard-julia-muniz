import { UserProps } from "@/app/(home)/users";
import { gql, useQuery } from "@apollo/client";

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

export default function useGetUsersList(page: number): UserProps[] | undefined {
  const { data } = useQuery<UsersListResultProps>(USERS_LIST, {
    variables: { data: { offset: page, limit: PAGE_SIZE } },
  });

  return data?.users.nodes;
}

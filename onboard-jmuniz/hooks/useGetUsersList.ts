import { gql, useQuery } from "@apollo/client";
import useGetClient from "./useGetClient";
import { GetToken } from "@/constants/secure-store";

const USERS_LIST = gql`
  query Users {
    users(data: { offset: 380, limit: 100 }) {
      nodes {
        name
        email
      }
    }
  }
`;

export interface UsersListResultProps {
  data: {
    users: {
      nodes: {
        name: string;
        email: string;
      }[];
    };
  };
}

export default function useGetUsersList() {
  const [client] = useGetClient(GetToken() ?? "");
  const { data } = useQuery(USERS_LIST, { client: client });

  const getList = (): UsersListResultProps => {
    return data;
  };

  return { getList };
}

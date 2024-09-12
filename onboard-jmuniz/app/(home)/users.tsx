import AddUserButton from "@/components/users-list/add-users/add-user-button";
import { UserElement } from "@/components/users-list/user-element";
import { UsersListContainer } from "@/components/users-list/users-list-container";
import FlatListFooter from "@/components/users-list/users-list-footer";
import useGetUsersList from "@/hooks/useGetUsersList";
import React from "react";
import { FlatList } from "react-native";

export default function UsersView() {
  const { loading, data, fetchMore } = useGetUsersList(0);

  function fetchMoreUsers() {
    if (!loading && data?.users.pageInfo.hasNextPage) {
      fetchMore({
        variables: {
          data: {
            offset: data?.users.nodes.length,
          },
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (fetchMoreResult && prev.users) {
            fetchMoreResult.users.nodes = [
              ...new Set([...prev.users.nodes, ...fetchMoreResult.users.nodes]),
            ];
            return fetchMoreResult;
          }
          return prev;
        },
      });
    }
  }

  return (
    <UsersListContainer>
      <FlatList
        data={data?.users.nodes}
        renderItem={({ item }) => (
          <UserElement name={item.name} email={item.email} id={item.id} />
        )}
        onEndReached={fetchMoreUsers}
        onEndReachedThreshold={0.4}
        ListFooterComponent={FlatListFooter(
          data?.users.pageInfo.hasNextPage ?? true,
        )}
      />
      <AddUserButton />
    </UsersListContainer>
  );
}

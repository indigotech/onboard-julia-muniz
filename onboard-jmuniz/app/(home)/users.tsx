import { FullWidth } from "@/components/common/full-width";
import FabButton from "@/components/nav/nav-fab/fab-button";
import ListFooter from "@/components/users/users-list/list-footer";
import { UserElement } from "@/components/users/users-list/user-element";
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
    <FullWidth>
      <FlatList
        data={data?.users.nodes}
        renderItem={({ item }) => (
          <UserElement name={item.name} email={item.email} id={item.id} />
        )}
        onEndReached={fetchMoreUsers}
        onEndReachedThreshold={0.4}
        ListFooterComponent={ListFooter(
          data?.users.pageInfo.hasNextPage ?? true,
        )}
      />
      <FabButton route={"/add-users"} />
    </FullWidth>
  );
}

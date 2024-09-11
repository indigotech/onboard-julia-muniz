import { UserElement } from "@/components/users-list/user-element";
import { UsersListContainer } from "@/components/users-list/users-list-container";
import useGetUsersList from "@/hooks/useGetUsersList";
import React, { useState } from "react";
import { FlatList, ActivityIndicator } from "react-native";

export default function UsersView() {
  const { loading, data, fetchMore } = useGetUsersList(0);
  const [end, setEnd] = useState(false);

  function fetchMoreUsers() {
    if (!loading && !end) {
      fetchMore({
        variables: {
          data: {
            offset: data?.users.nodes.length,
          },
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (fetchMoreResult && prev.users) {
            return {
              users: {
                nodes: [
                  ...new Set([
                    ...prev.users.nodes,
                    ...fetchMoreResult.users.nodes,
                  ]),
                ],
              },
            };
          }
          setEnd(true);
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
          <UserElement name={item.name} email={item.email} />
        )}
        onEndReached={fetchMoreUsers}
        onEndReachedThreshold={0.4}
        ListEmptyComponent={<ActivityIndicator size={"large"} />}
      />
    </UsersListContainer>
  );
}

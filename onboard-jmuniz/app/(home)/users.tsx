import { InputLabelText } from "@/components/login/input-validation/input-label-text";
import { UserElement } from "@/components/users-list/user-element";
import { UsersListContainer } from "@/components/users-list/users-list-container";
import useGetUsersList from "@/hooks/useGetUsersList";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, ActivityIndicator } from "react-native";
import styled from "styled-components/native";

const TestView = styled.View`
  height: 0%;
  width: 100%;
  margin: auto;
  display: flex;
`;

const AddUserPressable = styled.TouchableHighlight`
  background-color: gray;
  position: absolute;
  bottom: 20px;
  right: 10%;
  z-index: 1;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

const CenterText = styled.Text`
  align-self: center;
  font-size: 35px;
  color: white;
  font-weight: 800;
`;

export default function UsersView() {
  const { loading, data, fetchMore } = useGetUsersList(0);
  const router = useRouter();

  function FlatListFooter(hasMore: boolean) {
    if (hasMore) {
      return <ActivityIndicator size={"large"} />;
    }
    return <InputLabelText>End of List</InputLabelText>;
  }

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
          <UserElement name={item.name} email={item.email} />
        )}
        onEndReached={fetchMoreUsers}
        onEndReachedThreshold={0.4}
        ListFooterComponent={FlatListFooter(
          data?.users.pageInfo.hasNextPage ?? true,
        )}
      />
      <TestView>
        <AddUserPressable onPress={() => router.push("/add-users")}>
          <CenterText>+</CenterText>
        </AddUserPressable>
      </TestView>
    </UsersListContainer>
  );
}

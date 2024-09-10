import { UsersListElementContainer } from "@/components/users-list/users-list-element-container";
import useGetUsersList from "@/hooks/useGetUsersList";
import React from "react";
import { FlatList, Text, View } from "react-native";

export interface UserProps {
  name: string;
  email: string;
}

export default function UsersView() {
  const users = useGetUsersList(0);
  const UserElement = (props: UserProps) => {
    return (
      <UsersListElementContainer>
        <Text>Name: {props.name}</Text>
        <Text>Email: {props.email}</Text>
      </UsersListElementContainer>
    );
  };
  return (
    <View>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <UserElement name={item.name} email={item.email} />
        )}
      ></FlatList>
    </View>
  );
}

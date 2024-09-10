import { UserElement } from "@/components/users-list/user-element";
import useGetUsersList from "@/hooks/useGetUsersList";
import React from "react";
import { FlatList, View } from "react-native";

export interface UserProps {
  name: string;
  email: string;
}

export default function UsersView() {
  const users = useGetUsersList(0);
  return (
    <View>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <UserElement name={item.name} email={item.email} />
        )}
      />
    </View>
  );
}

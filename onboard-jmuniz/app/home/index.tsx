import { UsersListElementContainer } from "@/components/users-list/users-list-element-container";
import useGetUsersList from "@/hooks/useGetUsersList";
import React from "react";
import { FlatList, Text, View } from "react-native";

export interface UserProps {
  name: string;
  email: string;
}

const testData: UserProps[] = [
  {
    name: "Ab",
    email: "ab@email.com",
  },
  {
    name: "Cd",
    email: "cd@email.com",
  },
  {
    name: "Ef",
    email: "ef@email.com",
  },
  {
    name: "Gh",
    email: "gh@email.com",
  },
  {
    name: "Ij",
    email: "ij@email.com",
  },
  {
    name: "Kl",
    email: "kl@email.com",
  },
  {
    name: "Mn",
    email: "mn@email.com",
  },
  {
    name: "Cd",
    email: "cd@email.com",
  },
  {
    name: "Ef",
    email: "ef@email.com",
  },
  {
    name: "Gh",
    email: "gh@email.com",
  },
  {
    name: "Ij",
    email: "ij@email.com",
  },
  {
    name: "Kl",
    email: "kl@email.com",
  },
  {
    name: "Mn",
    email: "mn@email.com",
  },
  {
    name: "Cd",
    email: "cd@email.com",
  },
  {
    name: "Ef",
    email: "ef@email.com",
  },
  {
    name: "Gh",
    email: "gh@email.com",
  },
  {
    name: "Ij",
    email: "ij@email.com",
  },
  {
    name: "Kl",
    email: "kl@email.com",
  },
  {
    name: "Mn",
    email: "mn@email.com",
  },
  {
    name: "Cd",
    email: "cd@email.com",
  },
  {
    name: "Ef",
    email: "ef@email.com",
  },
  {
    name: "Gh",
    email: "gh@email.com",
  },
  {
    name: "Ij",
    email: "ij@email.com",
  },
  {
    name: "Kl",
    email: "kl@email.com",
  },
  {
    name: "Mn",
    email: "mn@email.com",
  },
  {
    name: "Cd",
    email: "cd@email.com",
  },
  {
    name: "Ef",
    email: "ef@email.com",
  },
  {
    name: "Gh",
    email: "gh@email.com",
  },
  {
    name: "Ij",
    email: "ij@email.com",
  },
  {
    name: "Kl",
    email: "kl@email.com",
  },
  {
    name: "Mn",
    email: "mn@email.com",
  },
  {
    name: "Cd",
    email: "cd@email.com",
  },
  {
    name: "Ef",
    email: "ef@email.com",
  },
  {
    name: "Gh",
    email: "gh@email.com",
  },
  {
    name: "Ij",
    email: "ij@email.com",
  },
  {
    name: "Kl",
    email: "kl@email.com",
  },
  {
    name: "Mn",
    email: "mn@email.com",
  },
  {
    name: "Cd",
    email: "cd@email.com",
  },
  {
    name: "Ef",
    email: "ef@email.com",
  },
  {
    name: "Gh",
    email: "gh@email.com",
  },
  {
    name: "Ij",
    email: "ij@email.com",
  },
  {
    name: "Kl",
    email: "kl@email.com",
  },
  {
    name: "Mn",
    email: "mn@email.com",
  },
  {
    name: "Cd",
    email: "cd@email.com",
  },
  {
    name: "Ef",
    email: "ef@email.com",
  },
  {
    name: "Gh",
    email: "gh@email.com",
  },
  {
    name: "Ij",
    email: "ij@email.com",
  },
  {
    name: "Kl",
    email: "kl@email.com",
  },
  {
    name: "Mn",
    email: "mn@email.com",
  },
  {
    name: "Cd",
    email: "cd@email.com",
  },
  {
    name: "Ef",
    email: "ef@email.com",
  },
  {
    name: "Gh",
    email: "gh@email.com",
  },
  {
    name: "Ij",
    email: "ij@email.com",
  },
  {
    name: "Kl",
    email: "kl@email.com",
  },
  {
    name: "Mn",
    email: "mn@email.com",
  },
  {
    name: "Cd",
    email: "cd@email.com",
  },
  {
    name: "Ef",
    email: "ef@email.com",
  },
  {
    name: "Gh",
    email: "gh@email.com",
  },
  {
    name: "Ij",
    email: "ij@email.com",
  },
  {
    name: "Kl",
    email: "kl@email.com",
  },
  {
    name: "Mn",
    email: "mn@email.com",
  },
  {
    name: "Cd",
    email: "cd@email.com",
  },
  {
    name: "Ef",
    email: "ef@email.com",
  },
  {
    name: "Gh",
    email: "gh@email.com",
  },
  {
    name: "Ij",
    email: "ij@email.com",
  },
  {
    name: "Kl",
    email: "kl@email.com",
  },
  {
    name: "Mn",
    email: "mn@email.com",
  },
];

export default function HomeView() {
  const { getList } = useGetUsersList();
  const newData: UserProps[] = getList().data.users.nodes;
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
        data={newData}
        renderItem={({ item }) => (
          <UserElement name={item.name} email={item.email} />
        )}
      ></FlatList>
    </View>
  );
}

import { UserProps } from "@/hooks/useGetUsersList";
import { UsersListElementContainer } from "./users-list-element-container";
import { Text } from "react-native";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";

export const UserElement = (props: UserProps) => (
  <UsersListElementContainer>
    <Link
      href={{ pathname: "/details/[id]", params: { id: props.id } }}
      asChild
    >
      <TouchableOpacity>
        <Text>Name: {props.name}</Text>
        <Text>Email: {props.email}</Text>
      </TouchableOpacity>
    </Link>
  </UsersListElementContainer>
);

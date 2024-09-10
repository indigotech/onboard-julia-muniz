import { UserProps } from "@/app/(home)/users";
import { UsersListElementContainer } from "./users-list-element-container";
import { Text } from "react-native";

export const UserElement = (props: UserProps) => (
  <UsersListElementContainer>
    <Text>Name: {props.name}</Text>
    <Text>Email: {props.email}</Text>
  </UsersListElementContainer>
);

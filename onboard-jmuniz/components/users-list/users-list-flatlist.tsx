import { UserProps } from "@/app/(home)/users";
import { FlatList } from "react-native";
import styled from "styled-components/native";

export const UsersListFlatList = styled(
  FlatList as new () => FlatList<UserProps>,
)`
  flex: 1;
`;

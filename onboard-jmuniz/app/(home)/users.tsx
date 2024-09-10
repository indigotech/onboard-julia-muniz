import { UserElement } from "@/components/users-list/user-element";
import useGetUsersList, { PAGE_SIZE } from "@/hooks/useGetUsersList";
import React, { useEffect, useState } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";

export interface UserProps {
  name: string;
  email: string;
}

export default function UsersView() {
  const [page, setPage] = useState(0);
  const [users, setUsers] = useState<UserProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const data = useGetUsersList(page) ?? [];
  useEffect(() => {
    if (data.length && isLoading) {
      setUsers([...users, ...data]);
      setIsLoading(false);
    }
  }, [data, isLoading]);
  function fetchData() {
    if (!isLoading) {
      setPage(page + PAGE_SIZE);
      setIsLoading(true);
    }
  }
  return (
    <View>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <UserElement name={item.name} email={item.email} />
        )}
        onEndReached={fetchData}
        onEndReachedThreshold={0.4}
        ListEmptyComponent={<ActivityIndicator size={"large"} />}
      />
    </View>
  );
}

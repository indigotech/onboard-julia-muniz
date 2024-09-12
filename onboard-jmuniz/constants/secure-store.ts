import * as SecureStore from "expo-secure-store";

const USER_TOKEN = "token";

export const saveToken = async (userToken: string) => {
  return SecureStore.setItemAsync(USER_TOKEN, userToken);
};

export const getToken = async () => {
  return SecureStore.getItemAsync(USER_TOKEN);
};

import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

const USER_TOKEN = "token";

export const saveToken = async (userToken: string) => {
  if (Platform.OS == "web") {
    return window.localStorage.setItem(USER_TOKEN, userToken);
  }
  return SecureStore.setItemAsync(USER_TOKEN, userToken);
};

export const getToken = async () => {
  if (Platform.OS == "web") {
    return window.localStorage.getItem(USER_TOKEN);
  }
  return SecureStore.getItemAsync(USER_TOKEN);
};

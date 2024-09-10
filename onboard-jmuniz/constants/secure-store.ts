import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

const USER_TOKEN = "token";

export const SaveToken = async (userToken: string) => {
  if (Platform.OS == "web") {
    return window.localStorage.setItem(USER_TOKEN, userToken);
  }
  return SecureStore.setItemAsync(USER_TOKEN, userToken);
};

export const GetToken = () => {
  if (Platform.OS == "web") {
    return window.localStorage.getItem(USER_TOKEN);
  }
  return SecureStore.getItem(USER_TOKEN);
};

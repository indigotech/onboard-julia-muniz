import { AuthContext } from "@/constants/auth-context";
import { useContext } from "react";

export function useGetContext() {
  const authContext = useContext(AuthContext);
  if (authContext === undefined) {
    throw new Error("Auth Context did not receive valid value");
  }
  return authContext;
}

import { UserProps } from "@/app/(home)/users";
import { isLoading } from "expo-font";
import { useReducer } from "react";

export enum ListActionTypes {
  REQ = "REQUEST",
  REQM = "REQUEST MORE",
  SUCC = "SUCCESS",
  ERR = "ERROR",
  EOL = "END OF LIST",
}

export interface ListAction {
  type: ListActionTypes;
}

export interface ListState {
  isLoading: boolean;
  isLoadingMore: boolean;
  page: number;
  error: string[];
  data: UserProps[];
}

export const UserListReducer = useReducer<ListAction, ListState>(
  (state, action) => {
    switch(action.type){
        case ListActionTypes.REQ:
            return {
                isLoading
            }
    }
  },
  {
    isLoading: false,
    isLoadingMore: false,
    page: 0,
    error: [],
    data: [],
  },
);

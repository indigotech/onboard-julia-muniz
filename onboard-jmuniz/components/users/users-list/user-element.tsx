import { UserProps } from "@/hooks/useGetUsersList";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import TextCardData from "../../data/text-card";

export const UserElement = (props: UserProps) => (
  <Link href={{ pathname: "/details/[id]", params: { id: props.id } }} asChild>
    <TouchableOpacity>
      <TextCardData mainValue={props.name} subValue={props.email} />
    </TouchableOpacity>
  </Link>
);

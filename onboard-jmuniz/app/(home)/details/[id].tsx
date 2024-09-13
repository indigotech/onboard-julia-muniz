import { ContentBox } from "@/components/common/content-box";
import { FullWidth } from "@/components/common/full-width";
import { Row } from "@/components/common/row";
import { ScrollBox } from "@/components/common/scroll-box";
import LongTextData from "@/components/data/long-text";
import ShortTextData from "@/components/data/short-text";
import { DisplayText } from "@/components/typography/display";
import useGetUserDetails from "@/hooks/useGetUserDetails";
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator } from "react-native";

const UNDEF = "UNDEF";

enum DetailsLabel {
  ROLE = "Role",
  BIRTH = "Birth",
  NAME = "Name",
  PHONE = "Phone",
  EMAIL = "E-mail",
}

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const { data, loading } = useGetUserDetails(Number(id));

  return (
    <ScrollBox>
      {loading ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <>
          <DisplayText>User #{id} </DisplayText>
          <FullWidth>
            <ContentBox>
              <Row>
                <ShortTextData
                  label={DetailsLabel.ROLE}
                  value={data?.user.role.toUpperCase() ?? UNDEF}
                />
                <ShortTextData
                  label={DetailsLabel.BIRTH}
                  value={data?.user.birthDate.toString() ?? UNDEF}
                />
              </Row>
              <LongTextData
                label={DetailsLabel.NAME}
                value={data?.user.name ?? UNDEF}
              />
              <LongTextData
                label={DetailsLabel.PHONE}
                value={data?.user.phone ?? UNDEF}
              />
              <LongTextData
                label={DetailsLabel.EMAIL}
                value={data?.user.email ?? UNDEF}
              />
            </ContentBox>
          </FullWidth>
        </>
      )}
    </ScrollBox>
  );
}

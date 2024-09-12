import { CenterColumn } from "@/components/create-user/center-column";
import { RowContainer } from "@/components/create-user/row-container";
import { StyledTitle } from "@/components/styled-title";
import { DetailCard } from "@/components/user-details/detail-card";
import { DetailCardBody } from "@/components/user-details/detail-card-body";
import { UserDetailsContent } from "@/components/user-details/user-details-content";
import { UserDetailsLabel } from "@/components/user-details/user-details-label";
import useGetUserDetails from "@/hooks/useGetUserDetails";
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const { data, loading } = useGetUserDetails(Number(id));

  return (
    <ScrollView>
      {loading ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <>
          <StyledTitle>User #{id} </StyledTitle>
          <DetailCard>
            <DetailCardBody>
              <RowContainer>
                <CenterColumn>
                  <UserDetailsLabel>Role</UserDetailsLabel>
                  <UserDetailsContent>
                    <UserDetailsLabel>
                      {data?.user.role.toUpperCase()}
                    </UserDetailsLabel>
                  </UserDetailsContent>
                </CenterColumn>
                <CenterColumn>
                  <UserDetailsLabel>Birth</UserDetailsLabel>
                  <UserDetailsContent>
                    <UserDetailsLabel>
                      {data?.user.birthDate.toString()}
                    </UserDetailsLabel>
                  </UserDetailsContent>
                </CenterColumn>
              </RowContainer>
              <UserDetailsLabel>Name</UserDetailsLabel>
              <UserDetailsContent>
                <UserDetailsLabel>{data?.user.name}</UserDetailsLabel>
              </UserDetailsContent>
              <UserDetailsLabel>Phone</UserDetailsLabel>
              <UserDetailsContent>
                <UserDetailsLabel>{data?.user.phone}</UserDetailsLabel>
              </UserDetailsContent>
              <UserDetailsLabel>E-mail</UserDetailsLabel>
              <UserDetailsContent>
                <UserDetailsLabel>{data?.user.email}</UserDetailsLabel>
              </UserDetailsContent>
            </DetailCardBody>
          </DetailCard>
        </>
      )}
    </ScrollView>
  );
}

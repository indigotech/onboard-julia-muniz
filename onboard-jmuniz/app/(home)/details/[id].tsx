import { CenterColumn } from "@/components/create-user/center-column";
import { RowContainer } from "@/components/create-user/row-container";
import { StyledTitle } from "@/components/styled-title";
import { DetailCard } from "@/components/user-details/detail-card";
import { DetailCardBody } from "@/components/user-details/detail-card-body";
import { UserDetailsContent } from "@/components/user-details/user-details-content";
import { UserDetailsLabel } from "@/components/user-details/user-details-label";
import { CreateUserProps, UserRole } from "@/hooks/useCreateUser";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function DetailsScreen() {
  const dummy: CreateUserProps = {
    name: "Dummy Name",
    email: "dummy@email.com",
    phone: "1234567890",
    password: "",
    birthDate: new Date(),
    role: UserRole.USER,
  };
  const { id } = useLocalSearchParams();

  return (
    <ScrollView>
      <View>
        <StyledTitle>User #{id} </StyledTitle>
        <DetailCard>
          <DetailCardBody>
            <RowContainer>
              <CenterColumn>
                <UserDetailsLabel>Role</UserDetailsLabel>
                <UserDetailsContent>
                  <UserDetailsLabel>
                    {dummy.role.toUpperCase()}
                  </UserDetailsLabel>
                </UserDetailsContent>
              </CenterColumn>
              <CenterColumn>
                <UserDetailsLabel>Birth</UserDetailsLabel>
                <UserDetailsContent>
                  <UserDetailsLabel>
                    {dummy.birthDate.toLocaleDateString([], {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </UserDetailsLabel>
                </UserDetailsContent>
              </CenterColumn>
            </RowContainer>
            <UserDetailsLabel>Name</UserDetailsLabel>
            <UserDetailsContent>
              <UserDetailsLabel>{dummy.name}</UserDetailsLabel>
            </UserDetailsContent>
            <UserDetailsLabel>Phone</UserDetailsLabel>
            <UserDetailsContent>
              <UserDetailsLabel>{dummy.phone}</UserDetailsLabel>
            </UserDetailsContent>
            <UserDetailsLabel>E-mail</UserDetailsLabel>
            <UserDetailsContent>
              <UserDetailsLabel>{dummy.email}</UserDetailsLabel>
            </UserDetailsContent>
          </DetailCardBody>
        </DetailCard>
      </View>
    </ScrollView>
  );
}

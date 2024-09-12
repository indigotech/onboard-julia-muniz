import { ActivityIndicator, Switch } from "react-native";
import { InputLabelText } from "../login/input-validation/input-label-text";
import { LoginFormContainer } from "../login/login-form-container";
import { LoginFormInputContainer } from "../login/login-form-text-container";
import { RowContainer } from "./row-container";
import { useState } from "react";
import { styled } from "styled-components/native";
import { emailFieldData, passwordFieldData } from "../login/login-form";
import {
  InputTextInput,
  LoginTextInputProps,
} from "../login/input-validation/input-text-input";
import { LoginFormSubmitButton } from "../login/login-form-submit-button";
import DatePicker from "./date-picker/date-picker";
import useCreateUser, {
  CreateUserProps,
  UserRole,
} from "@/hooks/useCreateUser";
import * as React from "react-native";
import { useRouter } from "expo-router";
import { CenterColumn } from "./center-column";

const emptyForm: CreateUserProps = {
  name: "",
  email: "",
  password: "",
  phone: "",
  birthDate: new Date(),
  role: UserRole.USER,
};

const FormsView = styled.View`
  overflow: scroll;
  width: 90%;
  height: 100%;
  margin: auto;
`;

export const phoneFieldData: LoginTextInputProps = {
  label: "Phone",
  conditions: [
    {
      pattern: /^\d{10,11}$/gm,
      message: "Phone must be between 10 and 11 numbers",
    },
  ],
  secureEntry: false,
};

export const nameFieldData: LoginTextInputProps = {
  label: "Name",
  conditions: [
    {
      pattern: /\b((([A-Z])|([Á-Û]))[-a-zá-û ']+[ ]*){2,}$/gm,
      message: "Must insert at least 2 valid names",
    },
  ],
  secureEntry: false,
};

export default function CreateUserFormView() {
  const [userForms, setUserForms] = useState<CreateUserProps>(emptyForm);
  const [adminSwitch, setAdminSwitch] = useState(false);
  const [loading, setLoading] = useState(false);
  const { createUser } = useCreateUser();
  const router = useRouter();

  function switchChange(newValue: boolean) {
    setAdminSwitch(newValue);
    if (newValue) {
      setUserForms({ ...userForms, role: UserRole.ADMIN });
    } else {
      setUserForms({ ...userForms, role: UserRole.USER });
    }
  }

  async function submitUser() {
    try {
      setLoading(true);
      await createUser({ variables: { data: userForms } });
      router.replace("/users");
    } catch (e) {
      if (React.Platform.OS == "web") {
        alert(e);
      } else {
        React.Alert.alert("Error", (e as Error).message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <FormsView>
      <LoginFormContainer>
        <LoginFormInputContainer>
          <RowContainer>
            <CenterColumn>
              <InputLabelText>Admin</InputLabelText>
              <Switch value={adminSwitch} onValueChange={switchChange} />
            </CenterColumn>
            <CenterColumn>
              <InputLabelText>Birth Date</InputLabelText>
              <DatePicker
                date={userForms.birthDate}
                setDate={(e) => setUserForms({ ...userForms, birthDate: e })}
              />
            </CenterColumn>
          </RowContainer>
          <InputTextInput
            data={nameFieldData}
            onValidateInput={(e) => setUserForms({ ...userForms, name: e })}
          />
          <InputTextInput
            data={emailFieldData}
            onValidateInput={(e) =>
              setUserForms({ ...userForms, email: e.toLowerCase() })
            }
          />
          <InputTextInput
            data={phoneFieldData}
            onValidateInput={(e) => setUserForms({ ...userForms, phone: e })}
          />
          <InputTextInput
            data={passwordFieldData}
            onValidateInput={(e) => setUserForms({ ...userForms, password: e })}
          />
        </LoginFormInputContainer>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <LoginFormSubmitButton title={"Submit"} onPress={submitUser} />
        )}
      </LoginFormContainer>
    </FormsView>
  );
}

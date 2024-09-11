import { Switch } from "react-native";
import { InputLabelText } from "../login/input-validation/input-label-text";
import { LoginFormContainer } from "../login/login-form-container";
import { LoginFormInputContainer } from "../login/login-form-text-container";
import { ColumnContainer } from "./column-container";
import { RowContainer } from "./row-container";
import React, { useState } from "react";
import { styled } from "styled-components/native";
import { emailFieldData, passwordFieldData } from "../login/login-form";
import {
  InputTextInput,
  LoginTextInputProps,
} from "../login/input-validation/input-text-input";
import { LoginFormSubmitButton } from "../login/login-form-submit-button";
import DatePicker from "./date-picker/date-picker";

const FormsView = styled.View`
  overflow: scroll;
  width: 90%;
  height: 100%;
  margin: auto;
`;

enum UserRole {
  USER = "user",
  ADMIN = "admin",
}
interface CreateUserProps {
  email: string;
  password: string;
  birthDate: Date;
  phone: string;
  name: string;
  role: UserRole;
}

export const phoneFieldData: LoginTextInputProps = {
  label: "Phone",
  conditions: [
    {
      pattern: /^\d{7,16}$/gm,
      message: "Phone must be between 7 and 16 numbers",
    },
  ],
  secureEntry: false,
};

export const nameFieldData: LoginTextInputProps = {
  label: "Name",
  conditions: [],
  secureEntry: false,
};

export default function CreateUserFormView() {
  const [userForms, setUserForms] = useState<CreateUserProps>({
    name: "",
    email: "",
    password: "",
    phone: "",
    birthDate: new Date(),
    role: UserRole.USER,
  });
  const [adminSwitch, setAdminSwitch] = useState(false);

  function switchChange(newValue: boolean) {
    setAdminSwitch(newValue);
    if (newValue) {
      setUserForms({ ...userForms, role: UserRole.ADMIN });
    } else {
      setUserForms({ ...userForms, role: UserRole.USER });
    }
  }

  return (
    <FormsView>
      <LoginFormContainer>
        <LoginFormInputContainer>
          <RowContainer>
            <ColumnContainer>
              <InputLabelText>Admin</InputLabelText>
              <Switch value={adminSwitch} onValueChange={switchChange} />
            </ColumnContainer>
            <ColumnContainer>
              <InputLabelText>Birth Date</InputLabelText>
              <DatePicker
                date={userForms.birthDate}
                setDate={(e) => setUserForms({ ...userForms, birthDate: e })}
              />
            </ColumnContainer>
          </RowContainer>
          <InputTextInput
            data={nameFieldData}
            onValidateInput={(e) => setUserForms({ ...userForms, name: e })}
          />
          <InputTextInput
            data={emailFieldData}
            onValidateInput={(e) => setUserForms({ ...userForms, email: e })}
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
        <LoginFormSubmitButton title={"Create New User"} />
      </LoginFormContainer>
    </FormsView>
  );
}

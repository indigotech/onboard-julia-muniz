import { ContentBox } from "@/components/common/content-box";
import { Row } from "@/components/common/row";
import FormDatePicker from "@/components/form/form-date-picker";
import { FormInput } from "@/components/form/form-input";
import FormPressable from "@/components/form/form-pressable";
import FormSwitch from "@/components/form/form-switch";
import useCreateUser, {
  CreateUserProps,
  CreateUserResponseProps,
  UseCreateUserProps,
  UserRole,
} from "@/hooks/useCreateUser";
import { useState } from "react";
import { ActivityIndicator } from "react-native";
import { emailFieldData, passwordFieldData } from "./login-form";
import { Box } from "../common/box";

const emptyForm: CreateUserProps = {
  name: "",
  email: "",
  password: "",
  phone: "",
  birthDate: new Date(),
  role: UserRole.USER,
};

export interface LoginTextInputProps {
  label: string;
  conditions: {
    pattern: RegExp;
    message: string;
  }[];
  secureEntry: boolean;
}

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

export default function CreateUserForm() {
  const [userForms, setUserForms] = useState<CreateUserProps>(emptyForm);
  const [loading, setLoading] = useState(false);
  const { createUser } = useCreateUser();

  return (
    <ContentBox>
      <Box>
        <Row>
          <FormSwitch
            data={{
              label: "Admin",
              value: userForms.role == UserRole.ADMIN,
            }}
            onChangeValue={(e) => {
              setUserForms({
                ...userForms,
                role: e ? UserRole.ADMIN : UserRole.USER,
              });
            }}
          />
          <FormDatePicker
            data={{ label: "Birth Date", date: userForms.birthDate }}
            onValueChange={(e) => {
              setUserForms({
                ...userForms,
                birthDate: e,
              });
            }}
          />
        </Row>
        <FormInput
          data={nameFieldData}
          onValidateInput={(e) => {
            setUserForms({ ...userForms, name: e });
          }}
        />
        <FormInput
          data={emailFieldData}
          onValidateInput={(e) =>
            setUserForms({ ...userForms, email: e.toLowerCase() })
          }
        />
        <FormInput
          data={phoneFieldData}
          onValidateInput={(e) => setUserForms({ ...userForms, phone: e })}
        />
        <FormInput
          data={passwordFieldData}
          onValidateInput={(e) => setUserForms({ ...userForms, password: e })}
        />
      </Box>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FormPressable<UseCreateUserProps, Promise<CreateUserResponseProps>>
          redirectPath={"/users"}
          queryFunction={createUser}
          queryProps={{ variables: { data: userForms } }}
          setLoading={setLoading}
          label="Create User"
        />
      )}
    </ContentBox>
  );
}

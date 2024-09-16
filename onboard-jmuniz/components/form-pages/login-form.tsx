import { ContentBox } from "@/components/common/content-box";
import { FormInput } from "@/components/form/form-input";
import FormPressable from "@/components/form/form-pressable";
import useLoginUser, {
  LoginUserResponseProps,
  UseLoginUserProps,
} from "@/hooks/useLoginUser";
import { useState } from "react";
import { ActivityIndicator } from "react-native";
import { LoginTextInputProps } from "./create-user-form";
import { Box } from "../common/box";

export const emailFieldData: LoginTextInputProps = {
  label: "E-mail",
  conditions: [
    {
      pattern: /^[\S]{1,}[@][\S]{1,}(?:\.com)(?:\.[a-zA-Z]{1,}){0,}$/gm,
      message: "E-mail must have valid format: xxxx@xxxx.com.",
    },
  ],
  secureEntry: false,
};

export const passwordFieldData: LoginTextInputProps = {
  label: "Password",
  conditions: [
    {
      pattern: /[a-zA-Z]{1,}/gm,
      message: "Password must have at least 1 letter.",
    },
    {
      pattern: /\d{1,}/gm,
      message: "Password must have at least 1 digit.",
    },
    {
      pattern: /\S{7,}/gm,
      message: "Password must have at least 7 valid characters.",
    },
  ],
  secureEntry: true,
};

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useLoginUser();
  const [loading, setLoading] = useState(false);

  const loginProps: UseLoginUserProps = {
    variables: {
      data: {
        email: email.toLowerCase(),
        password: password,
      },
    },
  };
  return (
    <ContentBox>
      <Box>
        <FormInput data={emailFieldData} onValidateInput={setEmail} />
        <FormInput data={passwordFieldData} onValidateInput={setPassword} />
      </Box>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FormPressable<UseLoginUserProps, Promise<LoginUserResponseProps>>
          redirectPath={"/users"}
          queryFunction={loginUser}
          queryProps={loginProps}
          setLoading={setLoading}
          label="Submit"
        />
      )}
    </ContentBox>
  );
}

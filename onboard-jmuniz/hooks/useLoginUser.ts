import { gql, useMutation } from "@apollo/client";

const LOGIN_USER = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      token
      user {
        id
        name
        phone
        birthDate
        role
      }
    }
  }
`;

// interface useLoginUserProps {
//   variables: {
//     data: {
//       email: string;
//       password: string;
//     };
//   };
// }

export const useLoginUser = () => {
  const [loginUser] = useMutation(LOGIN_USER);
  return [loginUser];
};

import { gql } from "@apollo/client";

export const UPDATE_USER_PW = gql`
  mutation updateUserPw($email: String!, $pw: String!) {
    updateUserPw(email: $email, pw: $pw) {
      id
      email
    }
  }
`;
export const USER_GET_TOKEN = gql`
  mutation userGetToken($phone: String!) {
    userGetToken(phone: $phone)
  }
`;
export const PROOF_TOKEN = gql`
  mutation proofToken($phone: String!, $mytoken: String!) {
    proofToken(phone: $phone, mytoken: $mytoken)
  }
`;

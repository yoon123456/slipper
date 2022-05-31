import { gql } from "@apollo/client";

// 인증완료 후 이메일찾기를 요청하는 mutation
export const SEARCH_USER_EMAIL = gql`
  mutation searchUserEmail($phone: String!) {
    searchUserEmail(phone: $phone) {
      email
    }
  }
`;

// 인증번호를 요청하는 mutation
export const USER_GET_TOKEN = gql`
  mutation userGetToken($phone: String!) {
    userGetToken(phone: $phone)
  }
`;

// 인증번호를 보내주는 mutation
export const PROOF_TOKEN = gql`
  mutation proofToken($phone: String!, $mytoken: String!) {
    proofToken(phone: $phone, mytoken: $mytoken)
  }
`;

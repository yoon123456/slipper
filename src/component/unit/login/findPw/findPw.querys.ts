import { gql } from "@apollo/client";

// 비번을 변경하는 mutation
export const UPDATE_USER_PW = gql`
  mutation updateUserPw($email: String!, $pw: String!) {
    updateUserPw(email: $email, pw: $pw)
  }
`;

// 인증번호를 요청하는 mutation
export const USER_GET_TOKEN = gql`
  mutation userGetToken($phone: String!) {
    userGetToken(phone: $phone)
  }
`;

// 인증완료를 요청하는 mutation
export const PROOF_TOKEN = gql`
  mutation proofToken($phone: String!, $mytoken: String!) {
    proofToken(phone: $phone, mytoken: $mytoken)
  }
`;

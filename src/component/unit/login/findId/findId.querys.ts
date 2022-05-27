import { gql } from "@apollo/client";

export const SEARCH_USER_EMAIL = gql`
  mutation searchUserEmail($phone: String!) {
    searchUserEmail(phone: $phone) {
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

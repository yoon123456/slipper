import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      email
      nickname
      phone
      image
      introduce
    }
  }
`;

export const GET_TOKEN = gql`
  mutation getToken($phone: String!) {
    getToken(phone: $phone)
  }
`;
export const PROOF_TOKEN = gql`
  mutation proofToken($phone: String!, $mytoken: String!) {
    proofToken(phone: $phone, mytoken: $mytoken)
  }
`;

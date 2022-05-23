import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $pw: String!) {
    login(email: $email, pw: $pw)
  }
`;

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      email
      nickname
    }
  }
`;

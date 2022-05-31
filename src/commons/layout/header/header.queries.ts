import { gql } from "@apollo/client";

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      id
      email
      nickname
      subStart
      subEnd
      subType
    }
  }
`;

export const UPDATE_PAYMENT = gql`
  mutation updatePayment($userId: String!) {
    updatePayment(userId: $userId)
  }
`;

export const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

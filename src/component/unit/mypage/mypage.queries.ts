import { gql } from "@apollo/client";

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      id
      nickname
      imageUrl
      introduce
      subStart
      subEnd
      payment {
        id
        paymentStatus
        impUid
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserSaveInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      nickname
      imageUrl
      introduce
    }
  }
`;

export const FETCH_PAYMENTS = gql`
  query fetchPayments {
    fetchPayments {
      id
      subStart
      subEnd
      subType
    }
  }
`;

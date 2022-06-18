import { gql } from "@apollo/client";

export const FETCH_PAYMENTS = gql`
  query fetchPayments {
    fetchPayments {
      id
      paymentStatus
      subStart
      subEnd
      impUid
      user {
        id
        email
        nickname
        phone
      }
    }
  }
`;

import { gql } from "@apollo/client";

export const FETCH_PAYMENTS = gql`
  query fetchPayments($page: Int) {
    fetchPayments(page: $page) {
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

import { gql } from "@apollo/client";

export const FETCH_PAYMENTS = gql`
  query fetchPayments($page: Int) {
    fetchPayments(page: $page) {
      id
      paymentStatus
      subStart
      subEnd
      impUid
      subType
      subRefund
      user {
        id
        email
        nickname
        phone
      }
    }
  }
`;

export const REFUND_PAYMENT = gql`
  mutation refundPayment($impUid: String!) {
    refundPayment(impUid: $impUid)
  }
`;

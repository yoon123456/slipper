import { gql } from "@apollo/client";

export const CREATE_PAYMENT = gql`
  mutation createPayment($impUid: String!, $amount: Float!) {
    createPayment(impUid: $impUid, amount: $amount) {
      # paymentDate
      # paymentAmount
      # subType
      impUid
    }
  }
`;

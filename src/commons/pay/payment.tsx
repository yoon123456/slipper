import { Modal } from "antd";
import { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styled from "@emotion/styled";

// import {
//   CREATE_POINT_TRANSACTION_OF_LOADING,
//   FETCH_USER_LOGGED_IN,
// } from "./payment.queries";

import { useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
} from "../types/generated/types";
import Script from "next/script";
import { IpropsPayment } from "./payment.type";

declare const window: typeof globalThis & {
  IMP: any;
};

export const IButton = styled.div`
  padding: 3% 10% 3% 10%;
  font-size: 1.2rem;
  color: white;
  border: #c4cacf;
  background-color: #c4cacf;
  border-radius: 5%;
  cursor: pointer;
  :hover {
    padding: 2.2% 9% 2.2% 9%;
    background-color: white;
    color: #c4cacf;
    border: 2px solid #c4cacf;
  }
`;

export default function PaymentPage(props: IpropsPayment) {
  // const [createPointTransactionOfLoading] = useMutation<
  //   Pick<IMutation, "createPointTransactionOfLoading">,
  //   IMutationCreatePointTransactionOfLoadingArgs
  // >(CREATE_POINT_TRANSACTION_OF_LOADING);

  const [amount, setAmount] = useState(0);

  useEffect(() => {
    aaa;
  });

  function aaa() {
    setAmount(props.value);
  }

  console.log(amount);

  const requestPay = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675");
    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: `${amount}원 충전`,
        amount: amount,
        buyer_email: "ㅗ",
        buyer_name: "ㅗ",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/user",
      },
      // callback
      async (rsp: any) => {
        if (rsp.success) {
          // try {
          //   await createPointTransactionOfLoading({
          //     variables: {
          //       impUid: rsp.imp_uid,
          //     },
          //     update(cache, { data }) {
          //       cache.modify({
          //         fields: {
          //           fetchUserLoggedIn: (prev) => {
          //             return [data?.createPointTransactionOfLoading + prev];
          //           },
          //         },
          //       });
          //     },
          //   });
          //   Modal.success({ content: "충전완료" });
          // } catch (error: any) {
          //   Modal.error({ content: error.message });
          // }
        } else {
          console.log(rsp.error_msg);
        }
      }
    );
  };

  return (
    <>
      <Script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.12.4.min.js"
      ></Script>
      <Script
        type="text/javascript"
        src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
      ></Script>
      <FormControl sx={{ m: 0, minWidth: 120 }} size="small"></FormControl>
      <IButton onClick={requestPay}>Get started</IButton>
    </>
  );
}

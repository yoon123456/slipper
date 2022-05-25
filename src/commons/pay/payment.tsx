import { Modal } from "antd";
import { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import styled from "@emotion/styled";
import { CREATE_PAYMENT } from "./payment.queries";
import { useMutation, useQuery } from "@apollo/client";
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
  const [createPayment] = useMutation(CREATE_PAYMENT);

  const [amount, setAmount] = useState(0);

  useEffect(() => {
    aaa();
  });

  function aaa() {
    setAmount(props.value);
  }
  const requestPay = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp62545658");
    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: `${amount}원 충전`,
        amount: amount,
        buyer_email: "championcom@naver.com",
        buyer_name: "슬리퍼테스트",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        // m_redirect_url: "http://localhost:3000/user",
      },
      // callback
      async (rsp: any) => {
        if (rsp.success) {
          try {
            await createPayment({
              variables: {
                impUid: String(rsp.imp_uid),
                amount: Number(rsp.paid_amount),
              },
              // update(cache, { data }) {
              //   cache.modify({
              //     fields: {
              //       fetchUserLoggedIn: (prev) => {
              //         return [data?.createPointTransactionOfLoading + prev];
              //       },
              //     },
              //   });
              // },
            });
            Modal.success({ content: "결제완료" });
          } catch (error: any) {
            Modal.error({ content: error.message });
            console.log(rsp.imp_uid, rsp.paid_amount);
          }
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

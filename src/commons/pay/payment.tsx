import { Modal } from "antd";
import { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import styled from "@emotion/styled";
import { CREATE_PAYMENT } from "./payment.queries";
import { useMutation, useQuery } from "@apollo/client";
import Script from "next/script";
import { IpropsPayment } from "./payment.type";
import { useRecoilState } from "recoil";
import { isClickedNumState } from "../store";
import { useRouter } from "next/router";

declare const window: typeof globalThis & {
  IMP: any;
};

export const IButton = styled.div`
  width: 50%;
  padding: 4%;
  color: gray;
  font-size: 1.3rem;
  text-align: center;
  border: none;
  border-radius: 10px;
  background-color: white;
  background: linear-gradient(to bottom, white 5%, #ffffff 100%);
  box-shadow: 3px 3px 7px 0 rgba(0, 0, 0, 0.25),
    -4px -4px 7px 0 rgba(255, 255, 255, 0.3);
  cursor: pointer;
  :hover {
    top: 2px;
    color: #008af6;
  }
`;

export default function PaymentPage(props: IpropsPayment) {
  const [createPayment] = useMutation(CREATE_PAYMENT);
  const [, setIsClickedNum] = useRecoilState(isClickedNumState);
  const [amount, setAmount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setIsClickedNum(0);
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
          await createPayment({
            variables: {
              impUid: String(rsp.imp_uid),
              amount: Number(rsp.paid_amount),
            },
          });
          Modal.success({ content: "결제완료" });

          setIsClickedNum(99999);
        } else {
          Modal.error({ content: "결제가 되지 않았습니다." });
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

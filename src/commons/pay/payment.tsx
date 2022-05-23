import { Modal } from "antd";
import { useState } from "react";

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

declare const window: typeof globalThis & {
  IMP: any;
};
const IButton = styled(Button)`
  background-color: #fe9a2e;
  height: 38px;
  color: black;
`;

export default function PaymentPage(props: any) {
  // const [createPointTransactionOfLoading] = useMutation<
  //   Pick<IMutation, "createPointTransactionOfLoading">,
  //   IMutationCreatePointTransactionOfLoadingArgs
  // >(CREATE_POINT_TRANSACTION_OF_LOADING);

  // eslint-disable-next-line no-unused-vars
  // const { data } = useQuery(FETCH_USER_LOGGED_IN);

  // 디테일에서 매수자의 정보를 가져옴 // 상품판매 디테일에서 매도자의 정보를 가져옴

  const [amount, setAmount] = useState(100);
  // const router = useRouter();
  const onChangeMount = (event: any) => {
    setAmount(event.target.value);
  };

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
          alert("결재완료");
          //   try {
          //     await createPointTransactionOfLoading({
          //       variables: {
          //         impUid: rsp.imp_uid,
          //       },
          //       update(cache, { data }) {
          //         cache.modify({
          //           fields: {
          //             fetchUserLoggedIn: (prev) => {
          //               return [data?.createPointTransactionOfLoading + prev];
          //             },
          //           },
          //         });
          //       },
          //     });
          //     Modal.success({ content: "충전완료" });
          //   } catch (error: any) {
          //     Modal.error({ content: error.message });
          //   }
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
      <FormControl sx={{ m: 0, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">Money</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          label="Money"
          onChange={onChangeMount}
        >
          <MenuItem value="">
            <em>Point</em>
          </MenuItem>
          <MenuItem value={100}>100</MenuItem>
          <MenuItem value={200}>200</MenuItem>
          <MenuItem value={300}>300</MenuItem>
          <MenuItem value={400}>400</MenuItem>
          <MenuItem value={500}>500</MenuItem>
        </Select>
      </FormControl>
      <IButton onClick={requestPay}>결제하기</IButton>
    </>
  );
}

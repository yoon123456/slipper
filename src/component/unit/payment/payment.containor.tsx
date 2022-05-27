import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import PaymentPresenter from "./payment.presenter";
import { FETCH_USER } from "./payment.queries";
import { userLoginInfo } from "../../../commons/store";
import { useRecoilState } from "recoil";
import { IQuery } from "../../../commons/types/generated/types";

export default function PaymentContainor() {
  const { data } = useQuery(FETCH_USER);

  const [MonthFlag, setMonthFlag] = useState(0);
  const [loginInfo] = useRecoilState(userLoginInfo);
  useEffect(() => {
    onClickMonth;
  });

  const onClickMonth = () => {
    setMonthFlag(0);
  };

  return <PaymentPresenter data={data} MonthFlag={MonthFlag} />;
}

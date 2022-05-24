import { useQuery } from "@apollo/client";
import { useState, MouseEvent, useEffect } from "react";
import PaymentPresenter from "./payment.presenter";
import { FETCH_USER } from "./payment.queries";
export default function PaymentContainor() {
  const { data } = useQuery(FETCH_USER);

  const [MonthFlag, setMonthFlag] = useState(0);

  useEffect(() => {
    onClickMonth;
  });

  const onClickMonth = () => {
    setMonthFlag(0);
  };

  return <PaymentPresenter data={data} MonthFlag={MonthFlag} />;
}

import { useQuery } from "@apollo/client";
import PaymentPresenter from "./payment.presenter";
import { FETCH_USER } from "./payment.queries";
export default function PaymentContainor() {
  return <PaymentPresenter />;
}

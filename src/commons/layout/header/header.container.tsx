import { useMutation, useQuery } from "@apollo/client";
import { useMovetoPage } from "../../hooks/movePage";
import HeaderPresenter from "./header.presenter";
import { FETCH_USER, UPDATE_PAYMENT } from "./header.queries";
import { getDate } from "../../libraries/date";
import {
  IMutation,
  IMutationUpdatePaymentArgs,
} from "../../types/generated/types";
import { Modal } from "antd";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function HeaderContainer() {
  const { onClickMoveToPage } = useMovetoPage();
  const { data } = useQuery(FETCH_USER);
  const router = useRouter();

  const [udpatePayment] = useMutation<
    Pick<IMutation, "updatePayment">,
    IMutationUpdatePaymentArgs
  >(UPDATE_PAYMENT);

  const userPayment = async () => {
    if (getDate(data?.fetchUser.subEnd) === getDate(new Date())) {
      try {
        await udpatePayment({
          variables: {
            userId: data.fetchUser.id,
          },
        });
        Modal.success({
          content: "결재기간이 만료되어 로그인창으로 이동합니다.",
        });
        router.push("/login");
      } catch (error: any) {
        Modal.error({ content: "오류" });
      }
    }
  };

  useEffect(() => {
    userPayment();
    return;
  });

  return <HeaderPresenter onClickMoveToPage={onClickMoveToPage} data={data} />;
}

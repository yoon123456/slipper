import { useMutation, useQuery } from "@apollo/client";
import { useMovetoPage } from "../../hooks/movePage";
import HeaderPresenter from "./header.presenter";
import { FETCH_USER, UPDATE_PAYMENT, LOGOUT } from "./header.queries";
import { getDate } from "../../libraries/date";
import {
  IMutation,
  IMutationUpdatePaymentArgs,
} from "../../types/generated/types";
import { Modal } from "antd";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { isClickedNumState } from "../../store";

export default function HeaderContainer() {
  const { onClickMoveToPage } = useMovetoPage();
  const [, setIsClickedNum] = useRecoilState(isClickedNumState);
  const { data } = useQuery(FETCH_USER);
  const [logout] = useMutation<Pick<IMutation, "logout">>(LOGOUT);
  const router = useRouter();

  const [udpatePayment] = useMutation<
    Pick<IMutation, "updatePayment">,
    IMutationUpdatePaymentArgs
  >(UPDATE_PAYMENT);

  const userPayment = async () => {
    if (data?.fetchUser.subType) {
      const current = new Date(getDate()),
        currentTime = current.getTime(); // 현재
      const sub = new Date(data?.fetchUser.subEnd),
        subTime = sub.getTime(); // 쿠폰
      const result = subTime - 9 * 60 * 60 * 1000;
      if (currentTime >= result) {
        try {
          await udpatePayment({
            variables: {
              userId: data.fetchUser.id,
            },
          });
          Modal.success({
            content: "결재기간이 만료되어 결제창으로 이동합니다.",
          });
          out();
          setIsClickedNum(0);
          router.push("/login");
        } catch (error: any) {
          Modal.error({ content: "오류" });
          return false;
        }
      } else {
        return false;
      }
    }
  };

  const out = async () => {
    try {
      await logout();
      Modal.success({ content: "다시 로그인 해주세요" });
      // location.reload();
      router.push("/boards");
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  useEffect(() => {
    userPayment();
  }, [data]);

  return (
    <HeaderPresenter
      onClickMoveToPage={onClickMoveToPage}
      data={data}
      out={out}
    />
  );
}

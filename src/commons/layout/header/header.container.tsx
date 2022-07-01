import { useMutation, useQuery } from "@apollo/client";
import { useMovetoPage } from "../../hooks/movePage";
import HeaderPresenter from "./header.presenter";
import { FETCH_USER, UPDATE_PAYMENT, LOGOUT } from "./header.queries";
import { getPaymentDate } from "../../libraries/date";
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
  const router = useRouter();
  const { onClickMoveToPage } = useMovetoPage();

  const BOARDS_NEW = ["/boards/new"];
  const PAYMENT = ["/payment"];
  const MYPAGE = ["/mypage"];

  const ClickBoard = BOARDS_NEW.includes(router.asPath);
  const ClickPayment = PAYMENT.includes(router.asPath);
  const ClickMypage = MYPAGE.includes(router.asPath);

  const [, setIsClickedNum] = useRecoilState(isClickedNumState);

  const { data } = useQuery(FETCH_USER);
  const [logout] = useMutation<Pick<IMutation, "logout">>(LOGOUT);
  const [udpatePayment] = useMutation<
    Pick<IMutation, "updatePayment">,
    IMutationUpdatePaymentArgs
  >(UPDATE_PAYMENT);

  const userPayment = async () => {
    if (data?.fetchUser.subType) {
      const current = new Date(getPaymentDate()),
        currentTime = current.getTime();
      const sub = new Date(data?.fetchUser.subEnd),
        subTime = sub.getTime();
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
          setIsClickedNum(0);
          router.push("/boards");
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
      Modal.success({ content: "로그아웃 되었습니다" });
      router.push("/boards");
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  useEffect(() => {
    userPayment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return (
    <HeaderPresenter
      onClickMoveToPage={onClickMoveToPage}
      data={data}
      out={out}
      ClickBoard={ClickBoard}
      ClickPayment={ClickPayment}
      ClickMypage={ClickMypage}
    />
  );
}

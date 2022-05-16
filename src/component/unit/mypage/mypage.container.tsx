// 해리 작업 5/13
import MyPagePresenter from "./mypage.presenter";
import { useState } from "react";

export default function MyPageContainer() {
  const [openMyinfo, setOpenMyinfo] = useState(true);
  const [openMyboards, setOpenMyboards] = useState(false);
  const [openMypicks, setOpenMypicks] = useState(false);
  const [openPayment, setOpenPayment] = useState(false);
  const [openMypaids, setOpenMypaids] = useState(false);

  const onClickMyinfo = () => {
    setOpenMyinfo(true);
    setOpenMyboards(false);
    setOpenMypicks(false);
    setOpenPayment(false);
    setOpenMypaids(false);
  };

  const onClickMyboards = () => {
    setOpenMyinfo(false);
    setOpenMyboards(true);
    setOpenMypicks(false);
    setOpenPayment(false);
    setOpenMypaids(false);
  };

  const onClickMypicks = () => {
    setOpenMyinfo(false);
    setOpenMyboards(false);
    setOpenMypicks(true);
    setOpenPayment(false);
    setOpenMypaids(false);
  };

  const onClickPayment = () => {
    setOpenMyinfo(false);
    setOpenMyboards(false);
    setOpenMypicks(false);
    setOpenPayment(true);
    setOpenMypaids(false);
  };

  const onClickMypaids = () => {
    setOpenMyinfo(false);
    setOpenMyboards(false);
    setOpenMypicks(false);
    setOpenPayment(false);
    setOpenMypaids(true);
  };

  return (
    <MyPagePresenter
      openMyinfo={openMyinfo}
      openMyboards={openMyboards}
      openMypicks={openMypicks}
      openPayment={openPayment}
      openMypaids={openMypaids}
      onClickMyinfo={onClickMyinfo}
      onClickMyboards={onClickMyboards}
      onClickMypicks={onClickMypicks}
      onClickPayment={onClickPayment}
      onClickMypaids={onClickMypaids}
    />
  );
}

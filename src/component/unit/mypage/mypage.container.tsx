// 해리 작업 5/13
import MyPagePresenter from "./mypage.presenter";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { FETCH_USER } from "./mypage.queries";

export default function MyPageContainer() {
  const { data } = useQuery(FETCH_USER);

  const [mypageRight, setMypageRight] = useState("myinformation");

  const onClickMyinfo = () => {
    setMypageRight("myinformation");
  };
  const onClickMyboards = () => {
    setMypageRight("myboards");
  };
  const onClickMypicks = () => {
    setMypageRight("mypicks");
  };
  const onClickMypaids = () => {
    setMypageRight("mypaids");
  };

  return (
    <>
      <MyPagePresenter
        mypageRight={mypageRight}
        onClickMyinfo={onClickMyinfo}
        onClickMyboards={onClickMyboards}
        onClickMypicks={onClickMypicks}
        onClickMypaids={onClickMypaids}
        data={data}
      />
    </>
  );
}

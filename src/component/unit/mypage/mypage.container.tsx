// haeri 작업시작 22.05.13
import MyPagePresenter from "./mypage.presenter";
import { FETCH_USER, UPDATE_USER } from "./mypage.queries";
import { useMutation, useQuery } from "@apollo/client";
import React, { ChangeEvent, useState } from "react";
import { Modal } from "antd";
import {
  IQuery,
  IQueryTestFetchUserArgs,
} from "../../../commons/types/generated/types";

export default function MyPageContainer() {
  const [updateUser] = useMutation(UPDATE_USER);
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUser">,
    IQueryTestFetchUserArgs
  >(FETCH_USER);

  // haeri 메뉴 전환
  const [mypageRight, setMypageRight] = useState("mypicks");
  const onClickMypicks = () => {
    setMypageRight("mypicks");
  };
  const onClickMyboards = () => {
    setMypageRight("myboards");
  };
  const onClickMypaids = () => {
    setMypageRight("mypaids");
  };

  // haeri 닉네임,프로필사진,자기소개글 수정
  const [modalVisible, setModalVisible] = useState(false);
  const [nickname, setNickname] = useState("");
  const [fileUrl, setFileUrl] = useState([""]);
  const [introduce, setIntroduce] = useState("");
  const showModal = () => {
    setModalVisible(true);
  };
  const modalCancel = () => {
    setModalVisible(false);
  };
  const onChangeNickname = (event: ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };
  const onChangeFileUrl = (fileUrl: string) => {
    const newFileUrl = [fileUrl];
    setFileUrl(newFileUrl);
  };
  const onChangeIntroduce = (event: ChangeEvent<HTMLInputElement>) => {
    setIntroduce(event.target.value);
  };
  const modalOk = async () => {
    try {
      await updateUser({
        variables: {
          updateUserInput: {
            nickname,
            imageUrl: String(fileUrl),
            introduce,
          },
        },
      });
      refetch();
      setModalVisible(false);
      Modal.success({ content: "개인정보 수정 완료" });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <MyPagePresenter
        mypageRight={mypageRight}
        onClickMypicks={onClickMypicks}
        onClickMyboards={onClickMyboards}
        onClickMypaids={onClickMypaids}
        data={data}
        showModal={showModal}
        modalVisible={modalVisible}
        modalCancel={modalCancel}
        onChangeNickname={onChangeNickname}
        onChangeFileUrl={onChangeFileUrl}
        fileUrl={fileUrl}
        onChangeIntroduce={onChangeIntroduce}
        modalOk={modalOk}
      />
    </>
  );
}

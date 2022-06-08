// haeri 작업시작 22.05.13
import MyPagePresenter from "./mypage.presenter";
import { FETCH_USER, UPDATE_USER } from "./mypage.queries";
import { useMutation, useQuery } from "@apollo/client";
import React, { ChangeEvent, useState } from "react";
import { Modal } from "antd";
import { IUpdateUserInput } from "./mypage.types";

export default function MyPageContainer() {
  const [updateUser] = useMutation(UPDATE_USER);
  const { data, refetch } = useQuery(FETCH_USER);

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

  // haeri 닉네임,프로필사진,자기소개글 수정(Modal)
  const [modalVisible, setModalVisible] = useState(false);
  const [nickname, setNickname] = useState(data?.fetchUser.nickname);
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
    if (!nickname && !fileUrl && !introduce) {
      Modal.error({ content: "수정한 내용이 없습니다." });
      return;
    }
    const updateUserInput: IUpdateUserInput = {};
    if (nickname) updateUserInput.nickname = nickname;
    if (fileUrl) updateUserInput.imageUrl = String(fileUrl);
    if (introduce) updateUserInput.introduce = introduce;
    try {
      await updateUser({
        variables: {
          updateUserInput,
        },
      });
      refetch();
      setModalVisible(false);
      Modal.success({ content: "개인정보 수정 완료" });
      setNickname("");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
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
      nickname={nickname}
    />
  );
}

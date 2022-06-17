import MyPagePresenter from "./mypage.presenter";
import { FETCH_USER, UPDATE_USER, FETCH_PAYMENTS } from "./mypage.queries";
import { useMutation, useQuery } from "@apollo/client";
import React, { ChangeEvent, useState } from "react";
import { Modal } from "antd";
import { IUpdateUserInput } from "./mypage.types";

export default function MyPageContainer() {
  const [updateUser] = useMutation(UPDATE_USER);
  const { data, refetch, fetchMore } = useQuery(FETCH_USER);
  const { data: payment, fetchMore: payFecthMore } = useQuery(FETCH_PAYMENTS);
  const [modalVisible, setModalVisible] = useState(false);
  const [nickname, setNickname] = useState("");
  const [fileUrl, setFileUrl] = useState([""]);
  const [introduce, setIntroduce] = useState("");
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

  const myInfo = async () => {
    const updateUserInput: IUpdateUserInput = {};
    if (nickname) updateUserInput.nickname = nickname;
    if (fileUrl) updateUserInput.imageUrl = String(fileUrl);
    if (introduce) updateUserInput.introduce = introduce;
    await updateUser({
      variables: {
        updateUserInput,
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchUser: () => {
              return data.updateUser;
            },
          },
        });
      },
    });
  };

  const modalOk = () => {
    try {
      myInfo();
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
      payment={payment}
      payFecthMore={payFecthMore}
    />
  );
}

// 해리 작업 5/13
import MyPagePresenter from "./mypage.presenter";
import { FETCH_USER, UPDATE_USER } from "./mypage.queries";
import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Modal } from "antd";

export default function MyPageContainer() {
  const [updateUser] = useMutation(UPDATE_USER);
  const { data, refetch } = useQuery(FETCH_USER);

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

  // 닉네임 수정
  const [nicknameModalVisible, setNicknameModalVisible] = useState(false);
  const [nickname, setNickname] = useState("");
  const showNicknameModal = () => {
    setNicknameModalVisible(true);
  };
  const nicknameModalCancel = () => {
    setNicknameModalVisible(false);
  };
  const onChangeNickname = (event: any) => {
    setNickname(event.target.value);
  };
  const nicknameModalOk = async () => {
    try {
      await updateUser({
        variables: {
          updateUserInput: {
            nickname,
          },
        },
      });
      refetch();
      setNicknameModalVisible(false);
      Modal.success({ content: "닉네임 수정 완료" });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  // 프로필이미지 수정
  const [profileImgModalVisible, setProfileImgModalVisible] = useState(false);
  const [fileUrl, setFileUrl] = useState([""]);
  const showProfileImgModal = () => {
    setProfileImgModalVisible(true);
  };
  const profileImgModalCancel = () => {
    setProfileImgModalVisible(false);
  };
  const onChangeFileUrl = (fileUrl: string) => {
    const newFileUrl = [fileUrl];
    setFileUrl(newFileUrl);
  };
  const profileImgModalOk = async () => {
    try {
      await updateUser({
        variables: {
          updateUserInput: {
            // imageUrl: fileUrl,
            imageUrl: String(fileUrl),
          },
        },
        // refetchQueries: [
        //   {
        //     query: FETCH_USER,
        //   },
        // ],
      });
      refetch();
      setProfileImgModalVisible(false);
      Modal.success({ content: "프로필사진 수정 완료" });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  // 자기소개글 수정
  const [introduceModalVisible, setIntroduceModalVisible] = useState(false);
  const [introduce, setIntroduce] = useState("");
  const showIntroduceModal = () => {
    setIntroduceModalVisible(true);
  };
  const introduceModalCancel = () => {
    setIntroduceModalVisible(false);
  };
  const onChangeIntroduce = (event: any) => {
    setIntroduce(event.target.value);
  };
  const introduceModalOk = async () => {
    try {
      await updateUser({
        variables: {
          updateUserInput: {
            introduce,
          },
        },
        // refetchQueries: [
        //   {
        //     query: FETCH_USER,
        //     // variables: { boardId: router.query.boardId },
        //   },
        // ];
      });
      refetch();
      setIntroduceModalVisible(false);
      Modal.success({ content: "자기소개글 수정 완료" });
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
        // 닉네임
        showNicknameModal={showNicknameModal}
        nicknameModalVisible={nicknameModalVisible}
        nicknameModalCancel={nicknameModalCancel}
        onChangeNickname={onChangeNickname}
        nicknameModalOk={nicknameModalOk}
        // 프로필이미지
        showProfileImgModal={showProfileImgModal}
        profileImgModalVisible={profileImgModalVisible}
        profileImgModalCancel={profileImgModalCancel}
        onChangeFileUrl={onChangeFileUrl}
        fileUrl={fileUrl}
        profileImgModalOk={profileImgModalOk}
        // 자기소개
        showIntroduceModal={showIntroduceModal}
        introduceModalVisible={introduceModalVisible}
        introduceModalCancel={introduceModalCancel}
        onChangeIntroduce={onChangeIntroduce}
        introduceModalOk={introduceModalOk}
      />
    </>
  );
}

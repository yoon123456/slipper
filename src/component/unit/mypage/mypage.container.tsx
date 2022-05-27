// 해리 작업 5/13
import MyPagePresenter from "./mypage.presenter";
import { FETCH_USER, UPDATE_USER } from "./mypage.queries";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";

export default function MyPageContainer() {
  const { data } = useQuery(FETCH_USER);
  const [updateUser] = useMutation(UPDATE_USER);

  const [mypageRight, setMypageRight] = useState("mypicks");
  const [openNicknameEdit, setOpenNicknameEdit] = useState(false);
  const [editedNickname, setEditedNickname] = useState("");

  // const onClickMyinfo = () => {
  //   setMypageRight("myinformation");
  // };
  const onClickMypicks = () => {
    setMypageRight("mypicks");
  };
  const onClickMyboards = () => {
    setMypageRight("myboards");
  };
  const onClickMypaids = () => {
    setMypageRight("mypaids");
  };
  const onClickOpenNicknameEdit = () => {
    setOpenNicknameEdit(true);
  };
  const onChangeNickname = (event: any) => {
    setEditedNickname(event.target.value);
  };

  const updateNickname = async () => {
    try {
      await updateUser({
        variables: {
          updateUserInput: {
            nickname: editedNickname,
          },
        },
      });
      Modal.success({ content: "게시글 수정에 성공하였습니다!" });
      setOpenNicknameEdit(false);
      // refetchQueries: [
      //   {
      //     query: FETCH_USER,
      //     // variables: { boardId: router.query.boardId },
      //   },
      // ];
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <>
      <MyPagePresenter
        data={data}
        mypageRight={mypageRight}
        // onClickMyinfo={onClickMyinfo}
        onClickMypicks={onClickMypicks}
        onClickMyboards={onClickMyboards}
        onClickMypaids={onClickMypaids}
        onClickOpenNicknameEdit={onClickOpenNicknameEdit}
        openNicknameEdit={openNicknameEdit}
        onChangeNickname={onChangeNickname}
        updateNickname={updateNickname}
      />
    </>
  );
}

// 해리 작업 5/15
import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import MyinformationPresenter from "./myinformation.presenter";
import { FETCH_USER, UPDATE_USER } from "./myinformation.queries";

export default function MyinformationContainer() {
  const { data } = useQuery(FETCH_USER);
  const [fileUrl, setFileUrl] = useState([""]);
  const [editUser, setEditUser] = useState(false);

  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });

  console.log(data);

  const [updateUser] = useMutation(UPDATE_USER);

  const onChangeFileUrl = (fileUrl: string) => {
    const newFileUrl = [fileUrl];
    setFileUrl(newFileUrl);
  };

  const onClickMoveToUpdate = () => {
    setEditUser(true);
    console.log(editUser);
  };

  const onClickUpdateUser = async (data: any) => {
    try {
      await updateUser({
        variables: {
          updateUserInput: {
            nickname: data.nickname,
            imageUrl: String(fileUrl),
            introduce: data.introduce,
          },
        },
      });
      Modal.success({ content: "게시글 수정에 성공하였습니다!" });
      setEditUser(false);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <MyinformationPresenter
      data={data}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onChangeFileUrl={onChangeFileUrl}
      fileUrl={fileUrl}
      onClickMoveToUpdate={onClickMoveToUpdate}
      onClickUpdateUser={onClickUpdateUser}
      editUser={editUser}
    />
  );
}

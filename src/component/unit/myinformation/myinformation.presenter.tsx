// 해리 작업 5/15
// import { useState } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ImageProfile from "../../../commons/imageProfile";
import * as S from "./myinformation.styles";
import { IMyinformationPresenter } from "./myinformation.types";

export default function MyinformationPresenter(props: IMyinformationPresenter) {
  // const [isToEdit, setIsToEdit] = useState(false);

  // const onClickToEdit = () => {
  //   setIsToEdit(true);
  // };
  // const onClickFinishEdit = () => {
  //   setIsToEdit(false);
  // };

  return (
    <S.StyledForm
      onSubmit={props.handleSubmit(
        props.editUser ? props.onClickUpdateUser : props.onClickMoveToUpdate
      )}
    >
      <S.WrapperRight>
        <S.Body>
          <S.BodyRow>
            {/* {isToEdit ? ( */}
            {props.editUser ? (
              <S.Header>프로필 이미지</S.Header>
            ) : (
              <S.Header>닉네임</S.Header>
            )}
            {/* {isToEdit ? ( */}
            {props.editUser ? (
              // <S.ProfileImgEdit />
              <ImageProfile
                onChangeFileUrl={props.onChangeFileUrl}
                fileUrl={props.fileUrl}
              />
            ) : (
              <S.Contents>{props.data?.fetchUser.nickname}</S.Contents>
            )}
          </S.BodyRow>
          <S.BodyRow>
            {/* {isToEdit ? ( */}
            {props.editUser ? (
              <S.Header>닉네임</S.Header>
            ) : (
              <S.Header>이메일</S.Header>
            )}
            {/* {isToEdit ? ( */}
            {props.editUser ? (
              <S.ContentsEdit
                placeholder="닉네임을 입력해주세요."
                {...props.register("nickname")}
              />
            ) : (
              <S.Contents>{props.data?.fetchUser.email}</S.Contents>
            )}
          </S.BodyRow>
          <S.BodyRow>
            <S.Header>자기소개글</S.Header>
            {/* {isToEdit ? ( */}
            {props.editUser ? (
              <S.IntroductionEdit
                placeholder="소개글을 입력해주세요."
                {...props.register("introduce")}
              />
            ) : (
              <S.Introduction>{props.data?.fetchUser.introduce}</S.Introduction>
            )}
          </S.BodyRow>
        </S.Body>
        <S.ButtonWrapper>
          <S.Button type="submit">
            {props.editUser ? "수정완료" : "수정"}
          </S.Button>
          {/* {props.editUser ? (
            <S.Button type="submit">수정완료</S.Button>
          ) : (
            <S.Button type="submit">수정</S.Button>
          )} */}
        </S.ButtonWrapper>
      </S.WrapperRight>
    </S.StyledForm>
  );
}

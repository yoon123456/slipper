// 해리 작업 5/15
// import { useState } from "react";
import * as S from "./myinformation.styles";

export default function MyinformationPresenter(props) {
  // const [isToEdit, setIsToEdit] = useState(false);

  // const onClickToEdit = () => {
  //   setIsToEdit(true);
  // };
  // const onClickFinishEdit = () => {
  //   setIsToEdit(false);
  // };

  return (
    <S.WrapperRight>
      <S.Body>
        <S.BodyRow>
          <S.Header>닉네임</S.Header>
          {props.isToEdit ? (
            <S.ContentsEdit placeholder="닉네임을 입력해주세요." />
          ) : (
            <S.Contents>부천토박이</S.Contents>
          )}
        </S.BodyRow>
        <S.BodyRow>
          <S.Header>이메일</S.Header>
          {props.isToEdit ? (
            <S.ContentsEdit placeholder="이메일을 입력해주세요." />
          ) : (
            <S.Contents>haeri789@gamil.com</S.Contents>
          )}
        </S.BodyRow>
        <S.BodyRow>
          <S.Header>자기소개글</S.Header>
          {props.isToEdit ? (
            <S.IntroductionEdit placeholder="소개글을 입력해주세요." />
          ) : (
            <S.Introduction>
              안녕하세요 부천토박이입니다~!@@@@@@@@@@ 안녕하세요
              부천토박이입니다~!@@@@@@@@@@ 안녕하세요
              부천토박이입니다~!@@@@@@@@@@ 안녕하세요
              부천토박이입니다~!@@@@@@@@@@ 안녕하세요
              부천토박이입니다~!@@@@@@@@@@ 안녕하세요
              부천토박이입니다~!@@@@@@@@@@ 안녕하세요
              부천토박이입니다~!@@@@@@@@@@ 안녕하세요
              부천토박이입니다~!@@@@@@@@@@ 안녕하세요
              부천토박이입니다~!@@@@@@@@@@ 부천토박이입니다~!@@@@@@@@@@
              안녕하세요 부천토박이입니다~!@@@@@@@@@@
              부천토박이입니다~!@@@@@@@@@@ 안녕하세요
              부천토박이입니다~!@@@@@@@@@@ 부천토박이입니다~!@@@@@@@@@@
              안녕하세요 부천토박이입니다~!@@@@@@@@@@
              부천토박이입니다~!@@@@@@@@@@ 안녕하세요
              부천토박이입니다~!@@@@@@@@@@ 부천토박이입니다~!@@@@@@@@@@
              안녕하세요 부천토박이입니다~!@@@@@@@@@@
              부천토박이입니다~!@@@@@@@@@@ 안녕하세요
              부천토박이입니다~!@@@@@@@@@@ 부천토박이입니다~!@@@@@@@@@@
              안녕하세요 부천토박이입니다~!@@@@@@@@@@
              부천토박이입니다~!@@@@@@@@@@ 안녕하세요
              부천토박이입니다~!@@@@@@@@@@ 부천토박이입니다~!@@@@@@@@@@
              안녕하세요 부천토박이입니다~!@@@@@@@@@@
              부천토박이입니다~!@@@@@@@@@@ 안녕하세요
              부천토박이입니다~!@@@@@@@@@@ 부천토박이입니다~!@@@@@@@@@@
              안녕하세요 부천토박이입니다~!@@@@@@@@@@
              부천토박이입니다~!@@@@@@@@@@ 안녕하세요
              부천토박이입니다~!@@@@@@@@@@ 부천토박이입니다~!@@@@@@@@@@
              안녕하세요 부천토박이입니다~!@@@@@@@@@@
              부천토박이입니다~!@@@@@@@@@@ 안녕하세요
              부천토박이입니다~!@@@@@@@@@@ 부천토박이입니다~!@@@@@@@@@@
              안녕하세요 부천토박이입니다~!@@@@@@@@@@
              부천토박이입니다~!@@@@@@@@@@ 안녕하세요
              부천토박이입니다~!@@@@@@@@@@ 부천토박이입니다~!@@@@@@@@@@
              안녕하세요 부천토박이입니다~!@@@@@@@@@@
            </S.Introduction>
          )}
        </S.BodyRow>
      </S.Body>
      <S.ButtonWrapper>
        <S.Button
          onClick={
            props.isToEdit ? props.onClickFinishEdit : props.onClickToEdit
          }
        >
          {props.isToEdit ? "수정완료" : "수정"}
        </S.Button>
      </S.ButtonWrapper>
    </S.WrapperRight>
  );
}

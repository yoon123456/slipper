// 해리 작업 5/15
import { useState } from "react";
import MyPagePresenter from "../mypage/mypage.presenter";
import * as S from "./myinformation.styles";

export default function MyinformationPresenter() {
  const [isEdit, setIsEdit] = useState(false);

  const onClickToEdit = () => {
    setIsEdit(true);
  };
  const onClickFinishEdit = () => {
    setIsEdit(false);
  };

  return (
    <S.WrapperRight>
      <S.Body>
        <S.BodyRow>
          <S.Header>닉네임</S.Header>
          {isEdit ? (
            <S.ContentsEdit placeholder="닉네임을 입력해주세요." />
          ) : (
            <S.Contents>부천토박이</S.Contents>
          )}
        </S.BodyRow>
        <S.BodyRow>
          <S.Header>이메일</S.Header>
          {isEdit ? (
            <S.ContentsEdit placeholder="이메일을 입력해주세요." />
          ) : (
            <S.Contents>haeri789@gamil.com</S.Contents>
          )}
        </S.BodyRow>
        <S.BodyRow>
          <S.Header>자기소개글</S.Header>
          {isEdit ? (
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
        {isEdit ? (
          <S.Button onClick={onClickFinishEdit}>수정완료</S.Button>
        ) : (
          <S.Button onClick={onClickToEdit}>수정</S.Button>
        )}
      </S.ButtonWrapper>
    </S.WrapperRight>
  );
}

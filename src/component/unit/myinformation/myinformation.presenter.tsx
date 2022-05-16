// 해리 작업 5/15
import MyPagePresenter from "../mypage/mypage.presenter";
import * as S from "./myinformation.styles";

export default function MyinformationPresenter() {
  return (
    <S.WrapperRight>
      <S.Body>
        <S.BodyRow>
          <S.Header>닉네임</S.Header>
          <S.Contents>부천토박이</S.Contents>
        </S.BodyRow>
        <S.BodyRow>
          <S.Header>이메일</S.Header>
          <S.Contents>haeri789@gamil.com</S.Contents>
        </S.BodyRow>
        <S.BodyRow>
          <S.Header>자기소개글</S.Header>
          <S.Introduction>
            안녕하세요 부천토박이입니다~!@@@@@@@@@@
          </S.Introduction>
        </S.BodyRow>
      </S.Body>
      <S.ButtonWrapper>
        <S.Button>수정</S.Button>
      </S.ButtonWrapper>
    </S.WrapperRight>
  );
}

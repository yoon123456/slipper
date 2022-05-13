// 해리 작업 5/13
import * as S from "./mypage.styles";
export default function MyPagePresenter() {
  return (
    <S.WrapperOut>
      <S.WrapperTop>
        <S.WrapperLeft>
          <S.ProfileImage src="/image/profile.png"></S.ProfileImage>
          <S.Introduction>안녕하세요 부천토박이입니다!~</S.Introduction>
        </S.WrapperLeft>
        <S.WrapperRight>
          <S.RightRow>
            <S.Header>닉네임</S.Header>
            <S.Contents>부천토박이</S.Contents>
          </S.RightRow>
          <S.RightRow>
            <S.Header>이메일</S.Header>
            <S.Contents>haeri789@gamil.com</S.Contents>
          </S.RightRow>
          <S.RightRow>
            <S.Header>결제내역</S.Header>
            <S.PaymentDetails>
              <S.Contents>3주 이용권(2022.03.01~2022.03.30)</S.Contents>
              <S.Contents>1주 이용권(2022.05.10~2022.05.17)</S.Contents>
              <S.Contents>1주 이용권(2022.05.10~2022.05.17)</S.Contents>
              <S.Contents>1주 이용권(2022.05.10~2022.05.17)</S.Contents>
              <S.Contents>1주 이용권(2022.05.10~2022.05.17)</S.Contents>
            </S.PaymentDetails>
          </S.RightRow>
        </S.WrapperRight>
      </S.WrapperTop>
      <S.WrapperBottom>
        <S.Button>수정</S.Button>
        <S.Button>취소</S.Button>
      </S.WrapperBottom>
    </S.WrapperOut>
  );
}

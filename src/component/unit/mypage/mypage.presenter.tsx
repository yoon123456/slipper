// 해리 작업 5/13
import MyBoardsPresenter from "../myboards/myboards.presenter";
import MyinformationPresenter from "../myinformation/myinformation.presenter";
import MypaidsPresenter from "../mypaids/mypaids.presenter";
import MypicksPresenter from "../mypicks/mypicks.presenter";
import PaymentPresenter from "../payment/payment.presenter";
import * as S from "./mypage.styles";

export default function MyPagePresenter(props) {
  return (
    <S.WrapperOut>
      <S.WrapperLeft>
        <S.Nickname>부천토박이 님의 MYPAGE</S.Nickname>
        <S.ProfileImage></S.ProfileImage>
        <S.MenuWrapper onClick={props.onClickMyinfo}>
          <S.Icon src="/image/myinfo.png"></S.Icon>
          <S.MenuButton>개인 정보</S.MenuButton>
        </S.MenuWrapper>
        <S.MenuWrapper onClick={props.onClickMyboards}>
          <S.Icon src="/image/myboards.png"></S.Icon>
          <S.MenuButton>내가 쓴 글</S.MenuButton>
        </S.MenuWrapper>
        <S.MenuWrapper onClick={props.onClickMypicks}>
          <S.Icon src="/image/mypicks.png"></S.Icon>
          <S.MenuButton>찜한 글</S.MenuButton>
        </S.MenuWrapper>
        <S.MenuWrapper onClick={props.onClickPayment}>
          <S.Icon src="/image/pay.png"></S.Icon>
          <S.MenuButton>결제하기</S.MenuButton>
        </S.MenuWrapper>
        <S.MenuWrapper onClick={props.onClickMypaids}>
          <S.Icon src="/image/mypaids.png"></S.Icon>
          <S.MenuButton>결제내역</S.MenuButton>
        </S.MenuWrapper>
      </S.WrapperLeft>
      <S.WrapperRight>
        {props.openMyinfo && <MyinformationPresenter />}
        {props.openMyboards && <MyBoardsPresenter />}
        {props.openMypicks && <MypicksPresenter />}
        {props.openPayment && <PaymentPresenter />}
        {props.openMypaids && <MypaidsPresenter />}
      </S.WrapperRight>
    </S.WrapperOut>
  );
}

// 해리 작업 5/13
import MyinformationPresenter from "../myinformation/myinformation.presenter";
import MyBoardsPresenter from "../myboards/myboards.presenter";
import MypicksPresenter from "../mypicks/mypicks.presenter";
import PaymentPresenter from "../payment/payment.presenter";
import MypaidsPresenter from "../mypaids/mypaids.presenter";
import * as S from "./mypage.styles";

export default function MyPagePresenter(props: any) {
  // console.log(props.hamMypageRight);
  return (
    <S.WrapperOut>
      <S.WrapperLeft>
        <S.NicknameWrapper>
          <S.NicknameFront>부천토박이 </S.NicknameFront>
          <S.Nickname>님의 신발장</S.Nickname>
        </S.NicknameWrapper>
        <S.ProfileImage></S.ProfileImage>
        <S.MenuWrapper onClick={props.onClickMyinfo}>
          <S.Icon src="/image/myinfo.png"></S.Icon>
          <S.MenuButton>개인 정보</S.MenuButton>
        </S.MenuWrapper>
        <S.MenuWrapper onClick={props.onClickMypicks}>
          <S.Icon src="/image/mypicks.png"></S.Icon>
          <S.MenuButton>찜한 글</S.MenuButton>
        </S.MenuWrapper>
        <S.MenuWrapper onClick={props.onClickMyboards}>
          <S.Icon src="/image/myboards.png"></S.Icon>
          <S.MenuButton>내가 쓴 글</S.MenuButton>
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
        {(props.mypageRight === "myinformation" ||
          props.hamMypageRight === "myinformation") && (
          <MyinformationPresenter />
        )}
        {props.mypageRight === "myboards" && <MyBoardsPresenter />}
        {(props.mypageRight === "mypicks" ||
          props.hamMypageRight === "mypicks") && <MypicksPresenter />}
        {(props.mypageRight === "payment" ||
          props.hamMypageRight === "payment") && <PaymentPresenter />}
        {props.mypageRight === "mypaids" && <MypaidsPresenter />}
      </S.WrapperRight>
    </S.WrapperOut>
  );
}

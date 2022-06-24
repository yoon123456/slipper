import * as S from "./header.styles";
import Logo from "../../logo";
import { HeaderPrpos } from "./header.types";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../store";

export default function HeaderPresenter(props: HeaderPrpos) {
  const [accessToken] = useRecoilState(accessTokenState);

  return (
    <>
      <S.WrapperOutH>
        <S.WrapperBox>
          <S.WrapperInLogo onClick={props.onClickMoveToPage("/boards")}>
            <Logo />
          </S.WrapperInLogo>
          <S.WrapperIn>
            <S.TestWrapper>
              <S.Board
                onClick={props.onClickMoveToPage("/boards/new")}
                ClickBoard={props.ClickBoard}
              >
                글쓰기
              </S.Board>
              <S.Payment
                onClick={props.onClickMoveToPage("/payment")}
                ClickPayment={props.ClickPayment}
              >
                구독서비스
              </S.Payment>
              <S.Mypage
                onClick={props.onClickMoveToPage("/mypage")}
                ClickMypage={props.ClickMypage}
              >
                마이페이지
              </S.Mypage>
            </S.TestWrapper>
          </S.WrapperIn>
          <S.WrapperUser>
            {accessToken ? (
              <S.WrapperUserLogin>
                <S.LogIn onClick={props.out}>
                  로그아웃
                  <S.LogoutIcon src="/image/logouticon.png" />
                </S.LogIn>
              </S.WrapperUserLogin>
            ) : (
              <S.WrapperUserLogin>
                <S.LogIn onClick={props.onClickMoveToPage("/login")}>
                  로그인
                  <S.LogoutIcon src="/image/logouticon.png" />
                </S.LogIn>
              </S.WrapperUserLogin>
            )}
            {accessToken ? (
              <S.UserImage>
                <S.UserImgWrap>
                  <S.UserImg
                    src={
                      props.data?.fetchUser.imageUrl
                        ? props.data?.fetchUser.imageUrl
                        : "image/profileDefault.png"
                    }
                  />
                </S.UserImgWrap>
              </S.UserImage>
            ) : (
              <></>
            )}
          </S.WrapperUser>
        </S.WrapperBox>
      </S.WrapperOutH>
    </>
  );
}

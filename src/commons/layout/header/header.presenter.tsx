import * as S from "./header.styles";
import Logo from "../../logo";
import { HeaderPrpos } from "./header.types";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../store";

export default function HeaderPresenter(props: HeaderPrpos) {
  const [accessToken] = useRecoilState(accessTokenState);

  return (
    <>
      <S.WrapperOut>
        <S.WrapperBox>
          <S.WrapperInLogo onClick={props.onClickMoveToPage("/boards")}>
            <Logo />
          </S.WrapperInLogo>
          <S.WrapperIn>
            <S.TestWrapper>
              <S.Test onClick={props.onClickMoveToPage("/boards/new")}>
                글쓰기
              </S.Test>
              <S.Test onClick={props.onClickMoveToPage("/payment")}>
                구독서비스
              </S.Test>
              <S.Test onClick={props.onClickMoveToPage("/mypage")}>
                내 신발장
              </S.Test>
            </S.TestWrapper>
          </S.WrapperIn>
          {accessToken ? (
            <S.WrapUser>
              <S.WrapperInUser>
                {props.data?.fetchUser.nickname}
              </S.WrapperInUser>
              <S.WrapperInMy>님 안녕하세요</S.WrapperInMy>
              <S.LogOut onClick={props.out}>로그아웃</S.LogOut>
            </S.WrapUser>
          ) : (
            <S.LogIn onClick={props.onClickMoveToPage("/login")}>
              로그인
            </S.LogIn>
          )}
          {/* <S.WrapperInHam>햄버거</S.WrapperInHam> */}
          {/* <Ham /> */}
        </S.WrapperBox>
      </S.WrapperOut>
    </>
  );
}

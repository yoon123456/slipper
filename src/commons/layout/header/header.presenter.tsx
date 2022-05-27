import * as S from "./header.styles";
import Ham from "../../ham";
import Logo from "../../logo";
import { HeaderPrpos } from "./header.types";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../store";

export default function HeaderPresenter(props: HeaderPrpos) {
  const [accessToken] = useRecoilState(accessTokenState);

  return (
    <>
      <S.WrapperOut>
        <S.WrapperInLogo onClick={props.onClickMoveToPage("/boards")}>
          <Logo />
        </S.WrapperInLogo>
        <S.WrapperIn>
          {accessToken ? (
            <S.WrapUser>
              <S.WrapperInUser>
                {props.data?.fetchUser.nickname}
              </S.WrapperInUser>
              <S.WrapperInMy>님 안녕하세요</S.WrapperInMy>
            </S.WrapUser>
          ) : (
            <div></div>
          )}
          {/* <S.WrapperInHam>햄버거</S.WrapperInHam> */}
          <Ham />
        </S.WrapperIn>
      </S.WrapperOut>
    </>
  );
}

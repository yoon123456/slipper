import * as S from "./header.styles";
import Ham from "../../ham";
import Logo from "../../logo";
import { HeaderPrpos } from "./header.types";

export default function HeaderPresenter(props: HeaderPrpos) {
  console.log(props.data);
  return (
    <>
      <S.WrapperOut>
        <S.WrapperInLogo onClick={props.onClickMoveToPage("/boards")}>
          <Logo />
        </S.WrapperInLogo>
        <S.WrapperIn>
          <S.WrapperInUser>{props.data}</S.WrapperInUser>
          {/* <S.WrapperInMy>내 신발장</S.WrapperInMy> */}
          {/* <S.WrapperInHam>햄버거</S.WrapperInHam> */}
          <Ham />
        </S.WrapperIn>
      </S.WrapperOut>
    </>
  );
}

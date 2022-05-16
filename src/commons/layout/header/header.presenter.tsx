import * as S from "./header.styled";
import Ham from "../../ham";
import Logo from "../../logo";

export default function HeaderPresenter() {
  return (
    <>
      <S.WrapperOut>
        <S.WrapperInLogo>
          <Logo />
        </S.WrapperInLogo>
        <S.WrapperIn>
          <S.WrapperInUser>님의 뚜벅뚜벅</S.WrapperInUser>
          <S.WrapperInMy>내 신발장</S.WrapperInMy>
          {/* <S.WrapperInHam>햄버거</S.WrapperInHam> */}
          <Ham />
        </S.WrapperIn>
      </S.WrapperOut>
    </>
  );
}

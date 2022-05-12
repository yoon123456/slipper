import * as S from "./header.styled";

import { HeaderPrpos } from "./header.types";

export default function HeaderPresenter() {
  return (
    <>
      <S.WrapperOut>
        <S.WrapperInLogo></S.WrapperInLogo>
        <S.WrapperIn>
          <S.WrapperInUser>OO님의 뚜벅뚜벅</S.WrapperInUser>
          <S.WrapperInMy>마이페이지</S.WrapperInMy>
          <S.WrapperInHam>햄버거</S.WrapperInHam>
        </S.WrapperIn>
      </S.WrapperOut>
    </>
  );
}

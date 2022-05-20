// 내가 쓴 글 리스트 presenter
// 예원 작업 5/13

import * as S from "./myboards.styles";

export default function MyBoardsPresenter() {
  return (
    <S.WrapperOut>
      <S.Head>내가 쓴 글</S.Head>
      <S.UserContents>
        <S.ImageWrap>
          <S.Image src={"/image/listimage.png"} />
          <S.Heart src="/image/pickheart.png" />
        </S.ImageWrap>
        <S.UserWrap>
          <S.ListTitle>광교호수공원으로 놀러와</S.ListTitle>
          <S.ListHometown>원천동</S.ListHometown>
          <S.ListShopName>도미노피자</S.ListShopName>
        </S.UserWrap>
      </S.UserContents>
    </S.WrapperOut>
  );
}

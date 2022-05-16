// 예원작업 5/16

import Category from "../../../../commons/category";
import * as S from "./list.styles";
import { useMovetoPage } from "../../../../commons/hooks/movePage";

export default function ListPresenter() {
  const { onClickMoveToPage } = useMovetoPage();

  return (
    <S.WrapperOut>
      <S.WrapperTop>
        <S.SearchBar type="text" placeholder="원하는 동네로 이동해보세요" />
        <S.CategoryWrap>
          <Category />
        </S.CategoryWrap>
        <S.SearchButton>
          <S.Serach>검색</S.Serach>
        </S.SearchButton>
      </S.WrapperTop>
      <S.WrapperMiddle>
        <S.WrapperWrite>
          <S.Button onClick={onClickMoveToPage("/boards/new")}>글쓰기</S.Button>
          <S.Pen src="/image/listpen.png" />
        </S.WrapperWrite>
        <S.WrapperArray>
          <S.Array>최신순</S.Array>
          <S.Array>찜한순</S.Array>
        </S.WrapperArray>
      </S.WrapperMiddle>
      <S.WrapperBody>
        <S.WrapperLeft>
          <S.Wrapper>
            <S.UserContents onClick={onClickMoveToPage("/boards/edit")}>
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
          </S.Wrapper>
          <S.WrapperBottom></S.WrapperBottom>
        </S.WrapperLeft>
        <S.WrapperRight>
          <S.Map src={"/image/mapimage.png"} />
        </S.WrapperRight>
      </S.WrapperBody>
    </S.WrapperOut>
  );
}

{
  /* 
<S.Gallery onClick={onClickMoveToPage("/boards/detail")}>
  <S.A>
    <S.Img src="/image/listimage.png" />
    <S.Figcaption>
      <S.Icon>만족도</S.Icon>
      <S.Categoty>카테고리</S.Categoty>
      <S.Title>제목</S.Title>
    </S.Figcaption>
  </S.A>
</S.Gallery>; */
}

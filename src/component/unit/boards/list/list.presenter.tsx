import Category from "../../../../commons/category";
import * as S from "./list.styles";
import { useMovetoPage } from "../../../../commons/hooks/movePage";
import { HeartOutlined } from "@ant-design/icons";

export default function ListPresenter() {
  const { onClickMoveToPage } = useMovetoPage();

  return (
    <S.WrapperOut>
      <S.WrapperLeft>
        <S.WrapperTop>
          <S.SearchBar type="text" placeholder="원하는 동네로 이동해보세요" />
        </S.WrapperTop>
        <S.CategoryWrap>
          <Category />
        </S.CategoryWrap>
        <S.SearchButton>
          <S.Serach>검색</S.Serach>
        </S.SearchButton>
        <S.WrapperMiddle>
          <S.WrapperArray>
            <S.Array>최신순</S.Array>
            <S.Array>찜한순</S.Array>
          </S.WrapperArray>
          <S.WrapperWrite>
            <S.Button>글쓰기</S.Button>
          </S.WrapperWrite>
        </S.WrapperMiddle>
        <S.Wrapper>
          <S.UserContents>
            <S.Image src={"/image/listimage.png"} />
            <S.Heart>
              <HeartOutlined />
            </S.Heart>
            <S.ListTitle>광교호수공원으로 놀러와</S.ListTitle>
            <S.ListHometown>원천동</S.ListHometown>
          </S.UserContents>
          <S.UserContents>
            <S.Image src={"/image/listimage.png"} />
            <S.Heart>
              <HeartOutlined />
            </S.Heart>
            <S.ListTitle>광교호수공원으로 놀러와</S.ListTitle>
            <S.ListHometown>원천동</S.ListHometown>
          </S.UserContents>
          <S.UserContents>
            <S.Image src={"/image/listimage.png"} />
            <S.Heart>
              {" "}
              <HeartOutlined />
            </S.Heart>
            <S.ListTitle>광교호수공원으로 놀러와</S.ListTitle>
            <S.ListHometown>원천동</S.ListHometown>
          </S.UserContents>
          <S.UserContents>
            <S.Image src={"/image/listimage.png"} />
            <S.Heart>
              {" "}
              <HeartOutlined />
            </S.Heart>
            <S.ListTitle>광교호수공원으로 놀러와</S.ListTitle>
            <S.ListHometown>원천동</S.ListHometown>
          </S.UserContents>
        </S.Wrapper>
        <S.WrapperBottom></S.WrapperBottom>
      </S.WrapperLeft>
      <S.WrapperRight>
        <S.Map src={"/image/listmapEx.png"} />
      </S.WrapperRight>
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

// 내가 쓴 글 리스트 presenter
// 예원 작업 5/13

import * as S from "./myboards.styles";

export default function MyBoardsPresenter() {
  return (
    <S.WrapperOut>
      <S.WrapperLeft>
        <S.UserPhoto></S.UserPhoto>
        <S.UserName></S.UserName>
        <S.UserEmail></S.UserEmail>
      </S.WrapperLeft>
      <S.WrapperRight>
        <S.Wrapper>
          <S.Gallery>
            <S.A>
              <S.Img src="/image/listimage.png" />
              <S.Figcaption>
                <S.Icon>만족도</S.Icon>
                <S.Categoty>카테고리</S.Categoty>
                <S.Title>제목</S.Title>
              </S.Figcaption>
            </S.A>
          </S.Gallery>
          <S.Gallery>
            <S.A>
              <S.Img src="/image/listimage.png" />
              <S.Figcaption>
                <S.Icon>만족도</S.Icon>
                <S.Categoty>카테고리</S.Categoty>
                <S.Title>제목</S.Title>
              </S.Figcaption>
            </S.A>
          </S.Gallery>
          <S.Gallery>
            <S.A>
              <S.Img src="/image/listimage.png" />
              <S.Figcaption>
                <S.Icon>만족도</S.Icon>
                <S.Categoty>카테고리</S.Categoty>
                <S.Title>제목</S.Title>
              </S.Figcaption>
            </S.A>
          </S.Gallery>
          <S.Gallery>
            <S.A>
              <S.Img src="/image/listimage.png" />
              <S.Figcaption>
                <S.Icon>만족도</S.Icon>
                <S.Categoty>카테고리</S.Categoty>
                <S.Title>제목</S.Title>
              </S.Figcaption>
            </S.A>
          </S.Gallery>
          <S.Gallery>
            <S.A>
              <S.Img src="/image/listimage.png" />
              <S.Figcaption>
                <S.Icon>만족도</S.Icon>
                <S.Categoty>카테고리</S.Categoty>
                <S.Title>제목</S.Title>
              </S.Figcaption>
            </S.A>
          </S.Gallery>
          <S.Gallery>
            <S.A>
              <S.Img src="/image/listimage.png" />
              <S.Figcaption>
                <S.Icon>만족도</S.Icon>
                <S.Categoty>카테고리</S.Categoty>
                <S.Title>제목</S.Title>
              </S.Figcaption>
            </S.A>
          </S.Gallery>
        </S.Wrapper>
      </S.WrapperRight>
    </S.WrapperOut>
  );
}

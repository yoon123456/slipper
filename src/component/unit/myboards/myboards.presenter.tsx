// 내가 쓴 글 리스트 presenter
// 예원 작업 5/13

import * as S from "./myboards.styles";
import { HeartOutlined } from "@ant-design/icons";

export default function MyBoardsPresenter() {
  return (
    <S.WrapperOut>
      <S.Wrapper>
        {/* <S.Gallery>
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
        </S.Gallery> */}
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
      </S.Wrapper>
    </S.WrapperOut>
  );
}

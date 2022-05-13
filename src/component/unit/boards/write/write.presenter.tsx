// 해리 작업 5/12
import Category from "../../../../commons/category";
import * as S from "./write.styles";
import "react-quill/dist/quill.snow.css";

export default function WritePresenter(props) {
  return (
    <S.WrapperOut>
      <S.WrapperTop>
        <S.CategoryHeader>카테고리</S.CategoryHeader>
        <Category />
      </S.WrapperTop>
      <S.WrapperCenter>
        <S.Title placeholder="제목을 입력해주세요."></S.Title>
        <S.CenterRow>
          <S.Period placeholder="거주기간을 입력해주세요."></S.Period>
          <S.RatingWrapper>
            <S.RatingHeader>만족도</S.RatingHeader>
            <S.Rating src="/image/ratingGood.png"></S.Rating>
            <S.Rating src="/image/ratingSoso.png"></S.Rating>
            <S.Rating
              src="/image/ratingBad.svg"
              style={{ width: 22, height: 22 }}
            ></S.Rating>
          </S.RatingWrapper>
        </S.CenterRow>
        {/* <S.Contents> */}
        <props.ReactQuill style={{ height: 300 }} />
        {/* </S.Contents> */}
        <S.ImageWrapper>
          <S.Image></S.Image>
          <S.Image></S.Image>
          <S.Image></S.Image>
          <S.Image></S.Image>
        </S.ImageWrapper>
        <S.Map src="/image/mapEx.png"></S.Map>
        <S.Store placeholder="가게 이름"></S.Store>
        <S.Address placeholder="가게 주소"></S.Address>
      </S.WrapperCenter>
      <S.WrapperBottom>
        <S.Button>취소</S.Button>
        <S.Button>등록</S.Button>
      </S.WrapperBottom>
    </S.WrapperOut>
  );
}

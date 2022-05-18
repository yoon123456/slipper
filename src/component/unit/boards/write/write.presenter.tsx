// 해리 작업 5/12
import "react-quill/dist/quill.snow.css";
import Category from "../../../../commons/category";
import * as S from "./write.styles";

export default function WritePresenter(props) {
  return (
    <S.WrapperOut>
      <S.StepWrapper>
        <S.StepHead>Step1</S.StepHead>
        <S.StepExplain>거주기간, 만족도, 내용을 작성해주세요</S.StepExplain>
        <S.Head>거주기간</S.Head>
        <S.Input placeholder="거주기간을 입력해주세요."></S.Input>
        <S.Head>제목</S.Head>
        <S.Input placeholder="제목을 입력해주세요."></S.Input>
        <S.Head>만족도</S.Head>
        <S.RatingWrapper>
          <S.Rating src="/image/ratingGood.png"></S.Rating>
          <S.Rating src="/image/ratingSoso.png"></S.Rating>
          <S.Rating
            src="/image/ratingBad.svg"
            style={{ width: 22, height: 22 }}
          ></S.Rating>
        </S.RatingWrapper>
        <S.Head>카테고리</S.Head>
        <Category />
        <S.Head>내용</S.Head>
        <props.ReactQuill style={{ height: 200 }} />
      </S.StepWrapper>
      <S.StepWrapper>
        <S.StepHead>Step2</S.StepHead>
        <S.StepExplain>가게 위치를 알려주세요</S.StepExplain>
        <S.Map src="/image/mapEx.png"></S.Map>
        <S.Input placeholder="가게 이름"></S.Input>
        <S.Input placeholder="가게 주소"></S.Input>
      </S.StepWrapper>
      <S.StepWrapper>
        <S.StepHead>Step3</S.StepHead>
        <S.StepExplain>사진을 등록해주세요</S.StepExplain>
        <S.ImageWrapper>
          <S.Image></S.Image>
          <S.Image></S.Image>
          <S.Image></S.Image>
          <S.Image></S.Image>
        </S.ImageWrapper>
        <S.WrapperBottom>
          <S.Button>취소</S.Button>
          <S.Button>등록</S.Button>
        </S.WrapperBottom>
      </S.StepWrapper>
    </S.WrapperOut>
  );
}

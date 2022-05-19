// 해리 작업 5/12
import "react-quill/dist/quill.snow.css";
import Category from "../../../../commons/category";
import * as S from "./write.styles";

export default function WritePresenter(props) {
  return (
    <S.WrapperOut>
      <S.StepWrapper>
        <S.StepHeadWrapper>
          <S.StepImg src="/image/writeSlipper.png" />
          <S.StepHead>Step1</S.StepHead>
        </S.StepHeadWrapper>
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
        <S.HeadCategory>카테고리</S.HeadCategory>
        <Category />
        <S.HeadContents>내용</S.HeadContents>
        <props.ReactQuill style={{ height: 200 }} />
      </S.StepWrapper>
      <S.StepWrapper>
        <S.StepHeadWrapper>
          <S.StepImg src="/image/writeSlipper.png" />
          <S.StepHead>Step2</S.StepHead>
        </S.StepHeadWrapper>
        <S.StepExplain>가게는 어디에 있나요?</S.StepExplain>
        <S.Head>가게 위치</S.Head>
        <S.Map src="/image/mapEx.png"></S.Map>
        <S.Head>가게 이름</S.Head>
        <S.Input placeholder="가게 이름을 작성해주세요."></S.Input>
        <S.Head>가게 주소</S.Head>
        <S.Input placeholder="가게 주소를 작성해주세요."></S.Input>
      </S.StepWrapper>
      <S.StepWrapper>
        <S.StepHeadWrapper>
          <S.StepImg src="/image/writeSlipper.png" />
          <S.StepHead>Step3</S.StepHead>
        </S.StepHeadWrapper>
        <S.StepExplain>사진을 공유해주세요</S.StepExplain>
        <S.ImageWrapper>
          <S.ImageRow>
            <S.Image></S.Image>
            <S.Image></S.Image>
          </S.ImageRow>
          <S.ImageRow>
            <S.Image></S.Image>
            <S.Image></S.Image>
          </S.ImageRow>
        </S.ImageWrapper>
        <S.ButtonWrapper>
          <S.Button>취소</S.Button>
          <S.Button>등록</S.Button>
        </S.ButtonWrapper>
      </S.StepWrapper>
    </S.WrapperOut>
  );
}

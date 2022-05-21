// 해리 작업 5/12
import * as S from "./write.styles";
import Category from "../../../../commons/category";
import "react-quill/dist/quill.snow.css";
import ImageBoardUpload from "../../../../commons/imageBoard";
import { v4 as uuidv4 } from "uuid";
// import { useEffect } from "react";

export default function WritePresenter(props) {
  // useEffect(() => {
  //   props.reset({ contents: props.data?.fetchUseditem.contents });
  // }, [props.data]);

  return (
    <form onSubmit={props.handleSubmit(props.onClickWriteBoard)}>
      <S.WrapperOut>
        <S.TopWrapper>
          <S.TopColumn>
            <S.TopRow>
              <S.TopImg src="/image/writeSlipper.png" />
              <S.Top>STEP 1</S.Top>
            </S.TopRow>
            <S.TopDetail> 거주 기간, 만족도, 내용을 작성해주세요</S.TopDetail>
          </S.TopColumn>
          <S.TopColumn>
            <S.TopRow>
              <S.TopImg src="/image/writeSlipper.png" />
              <S.Top>STEP 2</S.Top>
            </S.TopRow>
            <S.TopDetail>가게가 어디에 있나요?</S.TopDetail>
          </S.TopColumn>
          <S.TopColumn>
            <S.TopRow>
              <S.TopImg src="/image/writeSlipper.png" />
              <S.Top>STEP 3</S.Top>
            </S.TopRow>
            <S.TopDetail>사진을 공유해주세요</S.TopDetail>
          </S.TopColumn>
        </S.TopWrapper>
        {/* 📌STEP 1 */}
        {props.activeStep === "first" && (
          <S.StepWrapper>
            <S.Head>거주 기간</S.Head>
            <S.DateWrapper>
              <S.Date type="date" id="startDate" />
              <S.DateButton type="button" onClick={props.onClickStartDate}>
                선택
              </S.DateButton>
              <S.DateBetween>~</S.DateBetween>
              <S.Date type="date" id="endDate" />
              <S.DateButton type="button" onClick={props.onClickEndDate}>
                선택
              </S.DateButton>
            </S.DateWrapper>
            <S.Head>제목</S.Head>
            <S.Input
              placeholder="제목을 입력해주세요."
              {...props.register("title")}
            ></S.Input>
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
            <props.ReactQuill
              style={{ height: 100 }}
              onChange={props.onChangeContents}
              value={props.getValues("contents") || ""}
            />
            <S.StepButton type="button" onClick={props.onClickFirstNext}>
              다음
            </S.StepButton>
          </S.StepWrapper>
        )}
        {/* 📌STEP 2 */}
        {props.activeStep === "second" && (
          <S.StepWrapper>
            <S.Head>가게 위치</S.Head>
            <S.Map src="/image/mapEx.png"></S.Map>
            <S.Head>가게 이름</S.Head>
            <S.Input placeholder="가게 이름을 작성해주세요."></S.Input>
            <S.Head>가게 주소</S.Head>
            <S.Input placeholder="가게 주소를 작성해주세요."></S.Input>
            <S.StepButton type="button" onClick={props.onClickSecondPrev}>
              이전
            </S.StepButton>
            <S.StepButton type="button" onClick={props.onClickSecondNext}>
              다음
            </S.StepButton>
          </S.StepWrapper>
        )}
        {/* 📌STEP 3 */}
        {props.activeStep === "third" && (
          <S.StepWrapper>
            <S.ImageRow>
              {props.fileUrls.map((el, index) => (
                <ImageBoardUpload
                  key={uuidv4()}
                  index={index}
                  fileUrl={el}
                  onChangeFileUrls={props.onChangeFileUrls}
                />
              ))}
            </S.ImageRow>
            <S.ButtonWrapper>
              <S.Button>취소</S.Button>
              <S.Button>등록</S.Button>
            </S.ButtonWrapper>
            <S.StepButton type="button" onClick={props.onClickThirdPrev}>
              이전
            </S.StepButton>
          </S.StepWrapper>
        )}
      </S.WrapperOut>
    </form>
  );
}

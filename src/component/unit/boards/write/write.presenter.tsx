// 해리 작업 5/12
import * as S from "./write.styles";
import "react-quill/dist/quill.snow.css";
import ImageBoardUpload from "../../../../commons/imageBoard";
import { v4 as uuidv4 } from "uuid";
// import { useEffect } from "react";
import { DatePicker, Space } from "antd";
import KeyWord from "../../../../commons/map/keyword";

const { RangePicker } = DatePicker;

export default function WritePresenter(props) {
  // useEffect(() => {
  //   props.reset({ contents: props.data?.fetchUseditem.contents });
  // }, [props.data]);

  return (
    <form onSubmit={props.handleSubmit(props.onClickWriteBoard)}>
      <S.WrapperOut>
        <S.TopWrapper>
          {props.activeStep === "first" && (
            <S.TopColumnOn>
              <S.TopRow>
                <S.TopImg src="/image/writeSlipper.png" />
                <S.Top>STEP 1</S.Top>
              </S.TopRow>
              <S.TopDetail> 거주 기간, 만족도, 내용을 작성해주세요</S.TopDetail>
            </S.TopColumnOn>
          )}
          {props.activeStep !== "first" && (
            <S.TopColumnOff>
              <S.TopRow>
                <S.TopImg src="/image/writeSlipper.png" />
                <S.Top>STEP 1</S.Top>
              </S.TopRow>
              <S.TopDetail> 거주 기간, 만족도, 내용을 작성해주세요</S.TopDetail>
            </S.TopColumnOff>
          )}
          {props.activeStep === "second" && (
            <S.TopColumnOn>
              <S.TopRow>
                <S.TopImg src="/image/writeSlipper.png" />
                <S.Top>STEP 2</S.Top>
              </S.TopRow>
              <S.TopDetail>가게가 어디에 있나요?</S.TopDetail>
            </S.TopColumnOn>
          )}
          {props.activeStep !== "second" && (
            <S.TopColumnOff>
              <S.TopRow>
                <S.TopImg src="/image/writeSlipper.png" />
                <S.Top>STEP 2</S.Top>
              </S.TopRow>
              <S.TopDetail>가게가 어디에 있나요?</S.TopDetail>
            </S.TopColumnOff>
          )}
          {props.activeStep === "third" && (
            <S.TopColumnOn>
              <S.TopRow>
                <S.TopImg src="/image/writeSlipper.png" />
                <S.Top>STEP 3</S.Top>
              </S.TopRow>
              <S.TopDetail>사진을 공유해주세요</S.TopDetail>
            </S.TopColumnOn>
          )}
          {props.activeStep !== "third" && (
            <S.TopColumnOff>
              <S.TopRow>
                <S.TopImg src="/image/writeSlipper.png" />
                <S.Top>STEP 3</S.Top>
              </S.TopRow>
              <S.TopDetail>사진을 공유해주세요</S.TopDetail>
            </S.TopColumnOff>
          )}
        </S.TopWrapper>
        {/* 📌STEP 1 */}
        {props.activeStep === "first" && (
          <S.StepWrapper>
            <S.StepBody>
              <S.Head>이 동네 거주 기간</S.Head>
              <Space direction="vertical" size={12}>
                {/* <RangePicker onChange={props.onChangeRange} bordered={false} /> */}
                <S.StyledRangePicker
                  onChange={props.onChangeRange}
                  bordered={false}
                />
              </Space>
              <S.Head>글 제목</S.Head>
              <S.Input
                placeholder="제목을 입력해주세요."
                {...props.register("title")}
              ></S.Input>
              <S.Head>인프라 사용 만족도</S.Head>
              <S.RatingWrapper>
                <S.Rating src="/image/ratingGood.png"></S.Rating>
                <S.Rating src="/image/ratingSoso.png"></S.Rating>
                <S.Rating
                  src="/image/ratingBad.svg"
                  style={{ width: 22, height: 22 }}
                ></S.Rating>
              </S.RatingWrapper>
              <S.HeadContents>내용</S.HeadContents>
              <props.ReactQuill
                style={{ height: 270 }}
                onChange={props.onChangeContents}
                value={props.getValues("contents") || ""}
              />
            </S.StepBody>
            <S.StepBottom>
              <S.StepButton type="button">취소</S.StepButton>
              <S.StepButton type="button" onClick={props.onClickFirstNext}>
                다음
              </S.StepButton>
            </S.StepBottom>
          </S.StepWrapper>
        )}
        {/* 📌STEP 2 */}
        {props.activeStep === "second" && (
          <S.StepWrapper>
            <S.StepBody>
              <S.Head>위치</S.Head>
              <S.Map src="/image/mapEx.png"></S.Map>
              {/* <S.Map>
                <KeyWord />
              </S.Map> */}
              <S.Head>카테고리</S.Head>
              <S.Input placeholder="카테고리를 입력해주세요."></S.Input>
              <S.Head>상호명</S.Head>
              <S.Input placeholder="가게 이름을 입력해주세요."></S.Input>
              <S.Head>주소</S.Head>
              <S.Input placeholder="가게 주소를 입력해주세요."></S.Input>
            </S.StepBody>
            <S.StepBottom>
              <S.StepButton type="button" onClick={props.onClickSecondPrev}>
                이전
              </S.StepButton>
              <S.StepButton type="button" onClick={props.onClickSecondNext}>
                다음
              </S.StepButton>
            </S.StepBottom>
          </S.StepWrapper>
        )}
        {/* 📌STEP 3 */}
        {props.activeStep === "third" && (
          <S.StepWrapper>
            <S.StepBody>
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
            </S.StepBody>
            <S.StepBottom>
              <S.StepButton type="button" onClick={props.onClickThirdPrev}>
                이전
              </S.StepButton>
              <S.StepButton type="button" onClick={props.onClickWriteBoard}>
                등록
              </S.StepButton>
            </S.StepBottom>
          </S.StepWrapper>
        )}
      </S.WrapperOut>
    </form>
  );
}

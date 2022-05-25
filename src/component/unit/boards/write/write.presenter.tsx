// 해리 작업 5/12
import * as S from "./write.styles";
import "react-quill/dist/quill.snow.css";
import ImageBoardUpload from "../../../../commons/imageBoard";
import { v4 as uuidv4 } from "uuid";
// import { useEffect } from "react";
import { DatePicker, Space } from "antd";
import KeyWord from "../../../../commons/kakao/keyword/kakaomap.container";
import { IWritePresenter } from "./write.types";
import { formats, modules } from "../../../../commons/quill";
const { RangePicker } = DatePicker;

export default function WritePresenter(props: IWritePresenter) {
  // useEffect(() => {
  //   props.reset({ contents: props.data?.fetchUseditem.contents });
  // }, [props.data]);

  return (
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
              <S.StyledRangePicker
                onChange={props.onChangeRange}
                // bordered={false}
              />
            </Space>
            <S.Head>글 제목</S.Head>
            <S.Input
              type="text"
              placeholder="제목을 입력해주세요."
              onChange={props.onChangeTitle}
              defaultValue={props.data?.fetchBoard.title || ""}
            />
            <S.Head>인프라 사용 만족도</S.Head>
            <S.RatingWrapper>
              <S.RatingColumn>
                <S.Rating>😄</S.Rating>
                <S.Checkbox
                  checked={props.chkFirst}
                  type="checkbox"
                  // name="satisfaction"
                  // value="1"
                  // id="good"
                  onClick={props.onClickFirst}
                />
              </S.RatingColumn>
              <S.RatingColumn>
                <S.Rating>😐</S.Rating>
                <S.Checkbox
                  checked={props.chkSecond}
                  type="checkbox"
                  // name="satisfaction"
                  // value="2"
                  // id="soso"
                  onClick={props.onClickSecond}
                />
              </S.RatingColumn>
              <S.RatingColumn>
                <S.Rating>😩</S.Rating>
                <S.Checkbox
                  checked={props.chkThird}
                  type="checkbox"
                  // name="satisfaction"
                  // value="3"
                  // id="bad"
                  onClick={props.onClickThird}
                />
              </S.RatingColumn>
            </S.RatingWrapper>
            <S.HeadContents>내용</S.HeadContents>
            <props.ReactQuill
              style={{ height: 270 }}
              onChange={props.onChangeContents}
              formats={formats}
              modules={modules}
            />
          </S.StepBody>
          <S.StepBottom>
            <S.StepButton type="button">뒤로</S.StepButton>
            <S.StepButton type="button" onClick={props.onClickFirstNext}>
              &gt;
            </S.StepButton>
          </S.StepBottom>
        </S.StepWrapper>
      )}
      {/* 📌STEP 2 */}
      {props.activeStep === "second" && (
        <S.StepWrapper>
          <S.StepBody>
            <S.Head>위치</S.Head>
            <S.Map>
              <KeyWord map={props.map} setMap={props.setMap} />
            </S.Map>
            <S.Head>카테고리</S.Head>
            <S.Input
              placeholder="카테고리를 입력해주세요."
              defaultValue={props.data?.fetchBoard.category || ""}
            />
            <S.Head>상호명</S.Head>
            <S.Input
              placeholder="가게 이름을 입력해주세요."
              defaultValue={props.data?.fetchBoard.place || ""}
            />
            <S.Head>주소</S.Head>
            <S.Input
              placeholder="가게 주소를 입력해주세요."
              defaultValue={props.data?.fetchBoard.address || ""}
            />
          </S.StepBody>
          <S.StepBottom>
            <S.StepButton type="button" onClick={props.onClickSecondPrev}>
              &lt;
            </S.StepButton>
            <S.StepButton type="button" onClick={props.onClickSecondNext}>
              &gt;
            </S.StepButton>
          </S.StepBottom>
        </S.StepWrapper>
      )}
      {/* 📌STEP 3 */}
      {props.activeStep === "third" && (
        <S.ImageStepWrapper>
          <S.StepBody>
            <S.ImageRow>
              {props.fileUrls.map((el, index) => (
                <ImageBoardUpload
                  key={uuidv4()}
                  index={index}
                  fileUrl={el}
                  onChangeFileUrls={props.onChangeFileUrls}
                  defaultValue={props.data?.fetchBoard.images.imageUrl || ""}
                />
              ))}
            </S.ImageRow>
          </S.StepBody>
          <S.ImageBottom>
            <S.StepButton type="button" onClick={props.onClickThirdPrev}>
              &lt;
            </S.StepButton>
            <S.StepButton
              type="button"
              // onClick={props.onClickWriteBoard}
              onClick={
                props.isEdit ? props.onClickEditBoard : props.onClickWriteBoard
              }
            >
              {props.isEdit ? "수정" : "완료"}
            </S.StepButton>
          </S.ImageBottom>
        </S.ImageStepWrapper>
      )}
    </S.WrapperOut>
  );
}

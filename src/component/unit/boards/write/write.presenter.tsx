// haeri 작업시작 22.05.12
import * as S from "./write.styles";
import { IWritePresenter } from "./write.types";
import { Space } from "antd";
import { formats, modules } from "../../../../commons/quill";
import KeyWord from "../../../../commons/kakao/keyword/kakaomap.container";
import Script from "next/script";
import ImageBoardUpload from "../../../../commons/imageBoard";
import { v4 as uuidv4 } from "uuid";

export default function WritePresenter(props: IWritePresenter) {
  return (
    <S.WrapperOut>
      <Script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=10933d05118bfc99d732e83a2814b76a&libraries=services&autoload=false"
        strategy="beforeInteractive"
      />
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
            {/* <S.TopRow> */}
            {/* <S.TopImg src="/image/writeSlipper.png" /> */}
            <S.Top>STEP 1</S.Top>
            {/* </S.TopRow> */}
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
            {/* <S.TopRow> */}
            {/* <S.TopImg src="/image/writeSlipper.png" /> */}
            <S.Top>STEP 2</S.Top>
            {/* </S.TopRow> */}
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
            {/* <S.TopRow> */}
            {/* <S.TopImg src="/image/writeSlipper.png" /> */}
            <S.Top>STEP 3</S.Top>
            {/* </S.TopRow> */}
            <S.TopDetail>사진을 공유해주세요</S.TopDetail>
          </S.TopColumnOff>
        )}
      </S.TopWrapper>
      {/* STEP 1 */}
      {props.activeStep === "first" && (
        <S.StepWrapper>
          <S.StepBody>
            <S.Head>이 동네 거주 기간</S.Head>
            <Space direction="vertical" size={12}>
              <S.StyledRangePicker onChange={props.onChangeRange} />
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
              {props.happy ? (
                <S.RatingImg
                  src="/image/happypick.png"
                  onClick={props.onClickHappy}
                />
              ) : (
                <S.RatingImg
                  src="/image/happy.png"
                  onClick={props.onClickHappy}
                />
              )}
              {props.uhm ? (
                <S.RatingImg
                  src="/image/uhmpick.png"
                  onClick={props.onClickUhm}
                />
              ) : (
                <S.RatingImg src="/image/uhm.png" onClick={props.onClickUhm} />
              )}
              {props.sad ? (
                <S.RatingImg
                  src="/image/sadpick.png"
                  onClick={props.onClickSad}
                />
              ) : (
                <S.RatingImg src="/image/sad.png" onClick={props.onClickSad} />
              )}
            </S.RatingWrapper>
            <S.HeadContents>내용</S.HeadContents>
            <S.StyledQuill
              onChange={props.onChangeContents}
              formats={formats}
              modules={modules}
            />
          </S.StepBody>
          <S.StepBottom>
            <S.StepButton type="button">취소</S.StepButton>
            <S.StepButton type="button" onClick={props.onClickFirstNext}>
              &gt;
            </S.StepButton>
          </S.StepBottom>
        </S.StepWrapper>
      )}
      {/* STEP 2 */}
      {props.activeStep === "second" && (
        <S.StepWrapper>
          <S.StepBody>
            <S.Head>위치</S.Head>
            <KeyWord mapStatus={props.mapStatus} />
            {props.address.group_name !== "" && (
              <>
                <S.Head>카테고리</S.Head>
                <S.Input
                  placeholder="카테고리를 입력해주세요."
                  defaultValue={props.data?.fetchBoard.category || ""}
                  value={props.address.group_name}
                />
              </>
            )}
            <S.Head>상호명</S.Head>
            <S.Input
              defaultValue={props.data?.fetchBoard.place || ""}
              value={props.address.content}
            />
            <S.Head>주소</S.Head>
            <S.Input
              defaultValue={props.data?.fetchBoard.address || ""}
              value={props.address.address_name}
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
      {/* STEP 3 */}
      {props.activeStep === "third" && (
        <S.ImageStepWrapper>
          <S.StepBody>
            <S.ImageMap>
              {props.fileUrls.map((el, index) => (
                <ImageBoardUpload
                  key={uuidv4()}
                  index={index}
                  fileUrl={el}
                  onChangeFileUrls={props.onChangeFileUrls}
                  // defaultValue={props.data?.fetchBoard.images?.imageUrl || ""}
                />
              ))}
            </S.ImageMap>
          </S.StepBody>
          <S.ImageBottom>
            <S.StepButton type="button" onClick={props.onClickThirdPrev}>
              &lt;
            </S.StepButton>
            <S.StepButton
              type="button"
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

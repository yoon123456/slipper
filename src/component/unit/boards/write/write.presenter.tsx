import * as S from "./write.styles";
import { IWritePresenter } from "./write.types";
import Script from "next/script";
import First from "./write.firstpresenter";
import Second from "./write.secondpresenter";
import Third from "./write.thirdpresenter";
import "moment/locale/zh-cn";

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
          <S.TopOn>
            <S.TopRow>
              <S.TopImg src="/image/writeSlipper.png" />
              <S.StepName>STEP 1</S.StepName>
            </S.TopRow>
            <S.StepDetail> 거주 기간, 만족도, 내용을 작성해주세요</S.StepDetail>
          </S.TopOn>
        )}
        {props.activeStep !== "first" && (
          <S.TopOff>
            <S.StepName onClick={props.onClickSecondPrev}>STEP 1</S.StepName>
            <S.StepDetail> 거주 기간, 만족도, 내용을 작성해주세요</S.StepDetail>
          </S.TopOff>
        )}
        {props.activeStep === "second" && (
          <S.TopOn>
            <S.TopRow>
              <S.TopImg src="/image/writeSlipper.png" />
              <S.StepName>STEP 2</S.StepName>
            </S.TopRow>
            <S.StepDetail>가게가 어디에 있나요?</S.StepDetail>
          </S.TopOn>
        )}
        {props.activeStep !== "second" && (
          <S.TopOff>
            <S.StepName onClick={props.onClickFirstNext}>STEP 2</S.StepName>
            <S.StepDetail>가게가 어디에 있나요?</S.StepDetail>
          </S.TopOff>
        )}
        {props.activeStep === "third" && (
          <S.TopOn>
            <S.TopRow>
              <S.TopImg src="/image/writeSlipper.png" />
              <S.StepName>STEP 3</S.StepName>
            </S.TopRow>
            <S.StepDetail>사진을 공유해주세요</S.StepDetail>
          </S.TopOn>
        )}
        {props.activeStep !== "third" && (
          <S.TopOff>
            <S.StepName onClick={props.onClickSecondNext}>STEP 3</S.StepName>
            <S.StepDetail>사진을 공유해주세요</S.StepDetail>
          </S.TopOff>
        )}
      </S.TopWrapper>
      <First
        activeStep={props.activeStep}
        isEdit={props.isEdit}
        data={props.data}
        onChangeRange={props.onChangeRange}
        startDate={props.startDate}
        endDate={props.endDate}
        dateError={props.dateError}
        onChangeTitle={props.onChangeTitle}
        title={props.title}
        titleError={props.titleError}
        resetScore={props.resetScore}
        score={props.score}
        onClickHappy={props.onClickHappy}
        onClickUhm={props.onClickUhm}
        onClickSad={props.onClickSad}
        onClickResetScore={props.onClickResetScore}
        scoreError={props.scoreError}
        onChangeContents={props.onChangeContents}
        contents={props.contents}
        contentsError={props.contentsError}
        isButtonActive={props.isButtonActive}
        onClickFirstNext={props.onClickFirstNext}
      />
      <Second
        activeStep={props.activeStep}
        mapError={props.mapError}
        mapStatus={props.mapStatus}
        isEdit={props.isEdit}
        data={props.data}
        address={props.address}
        isButtonActive={props.isButtonActive}
        onClickSecondPrev={props.onClickSecondPrev}
        onClickSecondNext={props.onClickSecondNext}
      />

      <Third
        activeStep={props.activeStep}
        onChangeFileUrls={props.onChangeFileUrls}
        fileUrls={props.fileUrls}
        isButtonActive={props.isButtonActive}
        onClickThirdPrev={props.onClickThirdPrev}
        isEdit={props.isEdit}
        onClickEditBoard={props.onClickEditBoard}
        onClickWriteBoard={props.onClickWriteBoard}
        data={props.data}
      />
    </S.WrapperOut>
  );
}

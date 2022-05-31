// haeri 작업시작 22.05.12
import * as S from "./write.styles";
import { IWritePresenter } from "./write.types";
import { Modal, Space } from "antd";
import { formats, modules } from "../../../../commons/quill";
import KeyWord from "../../../../commons/kakao/keyword/kakaomap.container";
import Script from "next/script";
import ImageBoardUpload from "../../../../commons/imageBoard";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import "moment/locale/zh-cn";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";

export default function WritePresenter(props: IWritePresenter) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  if (!accessToken) {
    Modal.error({ content: "로그인이 필요한 서비스 입니다" });
    router.push("/login");
  }

  return (
    <S.WrapperOut>
      <Script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=10933d05118bfc99d732e83a2814b76a&libraries=services&autoload=false"
        strategy="beforeInteractive"
      />

      <S.TopWrapper>
        {/* STEP1 */}
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
            <S.StepName>STEP 1</S.StepName>
            <S.StepDetail> 거주 기간, 만족도, 내용을 작성해주세요</S.StepDetail>
          </S.TopOff>
        )}

        {/* STEP2 */}
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
            <S.StepName>STEP 2</S.StepName>
            <S.StepDetail>가게가 어디에 있나요?</S.StepDetail>
          </S.TopOff>
        )}

        {/* STEP3 */}
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
            <S.StepName>STEP 3</S.StepName>
            <S.StepDetail>사진을 공유해주세요</S.StepDetail>
          </S.TopOff>
        )}
      </S.TopWrapper>

      {/* STEP1 입력부분 */}
      {props.activeStep === "first" && (
        <S.BodyWrapper>
          <S.Body>
            <S.InputWrapper>
              <S.Head>이 동네 거주 기간</S.Head>
              <Space direction="vertical" size={12}>
                {props.isEdit &&
                  props.data?.fetchBoard.startDate &&
                  props.data?.fetchBoard.endDate && (
                    <S.StyledRangePicker
                      onChange={props.onChangeRange}
                      defaultValue={[
                        moment(props.data?.fetchBoard.startDate, "YYYY-MM-DD"),
                        moment(props.data?.fetchBoard.endDate, "YYYY-MM-DD"),
                      ]}
                    />
                  )}
                {!props.isEdit &&
                  props.startDate !== "" &&
                  props.endDate !== "" && (
                    <S.StyledRangePicker
                      onChange={props.onChangeRange}
                      defaultValue={[
                        moment(props.startDate, "YYYY-MM-DD"),
                        moment(props.endDate, "YYYY-MM-DD"),
                      ]}
                    />
                  )}
                {!props.isEdit &&
                  props.startDate === "" &&
                  props.endDate === "" && (
                    <S.StyledRangePicker onChange={props.onChangeRange} />
                  )}
              </Space>
              <S.Error>{props.dateError}</S.Error>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Head>글 제목</S.Head>
              {props.isEdit ? (
                <S.Input
                  type="text"
                  placeholder="제목을 입력해주세요."
                  onChange={props.onChangeTitle}
                  defaultValue={props.data?.fetchBoard.title || ""}
                />
              ) : (
                <S.Input
                  type="text"
                  placeholder="제목을 입력해주세요."
                  onChange={props.onChangeTitle}
                  defaultValue={props.title || ""}
                />
              )}
              <S.Error>{props.titleError}</S.Error>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Head>인프라 사용 만족도</S.Head>
              {props.resetScore ? (
                <S.RatingWrapper>
                  {props.score === 1 ? (
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
                  {props.score === 2 ? (
                    <S.RatingImg
                      src="/image/uhmpick.png"
                      onClick={props.onClickUhm}
                    />
                  ) : (
                    <S.RatingImg
                      src="/image/uhm.png"
                      onClick={props.onClickUhm}
                    />
                  )}
                  {props.score === 3 ? (
                    <S.RatingImg
                      src="/image/sadpick.png"
                      onClick={props.onClickSad}
                    />
                  ) : (
                    <S.RatingImg
                      src="/image/sad.png"
                      onClick={props.onClickSad}
                    />
                  )}
                </S.RatingWrapper>
              ) : (
                <S.RatingWrapper>
                  {props.score === 1 || props.data?.fetchBoard.score === 1 ? (
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
                  {props.score === 2 || props.data?.fetchBoard.score === 2 ? (
                    <S.RatingImg
                      src="/image/uhmpick.png"
                      onClick={props.onClickUhm}
                    />
                  ) : (
                    <S.RatingImg
                      src="/image/uhm.png"
                      onClick={props.onClickUhm}
                    />
                  )}
                  {props.score === 3 || props.data?.fetchBoard.score === 3 ? (
                    <S.RatingImg
                      src="/image/sadpick.png"
                      onClick={props.onClickSad}
                    />
                  ) : (
                    <S.RatingImg
                      src="/image/sad.png"
                      onClick={props.onClickSad}
                    />
                  )}
                </S.RatingWrapper>
              )}
              {props.isEdit && (
                <S.ResetScore onClick={props.onClickResetScore}>
                  초기화
                </S.ResetScore>
              )}
              <S.Error>{props.scoreError}</S.Error>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.HeadContents>내용</S.HeadContents>
              {props.isEdit && props.data?.fetchBoard.contents && (
                <S.StyledQuill
                  onChange={props.onChangeContents}
                  formats={formats}
                  modules={modules}
                  defaultValue={props.data?.fetchBoard.contents}
                />
              )}
              {!props.isEdit && (
                <S.StyledQuill
                  onChange={props.onChangeContents}
                  formats={formats}
                  modules={modules}
                  defaultValue={props.contents || ""}
                />
              )}
              <S.Error>{props.contentsError}</S.Error>
            </S.InputWrapper>
          </S.Body>
          <S.ButtonWrapper>
            <S.Button>취소</S.Button>
            <S.Button
              isButtonActive={props.isButtonActive}
              onClick={props.onClickFirstNext}
            >
              &gt;
            </S.Button>
          </S.ButtonWrapper>
        </S.BodyWrapper>
      )}

      {/* STEP2 입력부분*/}
      {props.activeStep === "second" && (
        <S.BodyWrapper>
          <S.Body>
            <S.MapWrapper>
              <S.Head>위치</S.Head>
              <S.Error>{props.mapError}</S.Error>
              <KeyWord mapStatus={props.mapStatus} />
            </S.MapWrapper>
            {props.address.group_name !== "" && (
              <>
                <S.Head>카테고리</S.Head>
                {props.isEdit ? (
                  <S.MapDetail>
                    {props.data?.fetchBoard.category || ""}
                  </S.MapDetail>
                ) : (
                  <S.MapDetail>{props.address.group_name}</S.MapDetail>
                )}
              </>
            )}
            <S.Head>상호명</S.Head>
            {props.isEdit ? (
              <S.MapDetail>{props.data?.fetchBoard.place || ""}</S.MapDetail>
            ) : (
              <S.MapDetail>{props.address.content}</S.MapDetail>
            )}
            <S.Head>주소</S.Head>
            {props.isEdit ? (
              <S.MapDetail>{props.data?.fetchBoard.address || ""}</S.MapDetail>
            ) : (
              <S.MapDetail>{props.address.address_name}</S.MapDetail>
            )}
          </S.Body>
          <S.ButtonWrapper>
            <S.Button onClick={props.onClickSecondPrev}>&lt;</S.Button>
            {props.address.address_name !== "" ? (
              <S.MapButtonOn onClick={props.onClickSecondNext}>
                &gt;
              </S.MapButtonOn>
            ) : (
              <S.MapButtonOff onClick={props.onClickSecondNext}>
                &gt;
              </S.MapButtonOff>
            )}
          </S.ButtonWrapper>
        </S.BodyWrapper>
      )}

      {/* STEP3 입력부분*/}
      {props.activeStep === "third" && (
        <S.ImageBodyWrapper>
          <S.Body>
            <S.ImageBody>
              {props.fileUrls.map((el, index) => (
                <ImageBoardUpload
                  key={uuidv4()}
                  index={index}
                  fileUrl={el}
                  onChangeFileUrls={props.onChangeFileUrls}
                  // defaultValue={props.data?.fetchBoard.images?.imageUrl || ""}
                />
              ))}
            </S.ImageBody>
          </S.Body>
          <S.ImageButtonWrapper>
            <S.Button onClick={props.onClickThirdPrev}>&lt;</S.Button>
            <S.FinishButton
              onClick={
                props.isEdit ? props.onClickEditBoard : props.onClickWriteBoard
              }
            >
              {props.isEdit ? "수정" : "등록"}
            </S.FinishButton>
          </S.ImageButtonWrapper>
        </S.ImageBodyWrapper>
      )}
    </S.WrapperOut>
  );
}

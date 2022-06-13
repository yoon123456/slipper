import * as S from "./write.styles";
import moment from "moment";
import { Space } from "antd";
import { formats, modules } from "../../../../commons/quill";
import { IPropsWriteContent } from "./write.types";
export default function First(props: IPropsWriteContent) {
  return (
    <>
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
              <S.Head>만족도</S.Head>
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
            <S.Button isButtonActive={props.isButtonActive}>취소</S.Button>
            <S.Button
              isButtonActive={props.isButtonActive}
              onClick={props.onClickFirstNext}
            >
              &gt;
            </S.Button>
          </S.ButtonWrapper>
        </S.BodyWrapper>
      )}
    </>
  );
}

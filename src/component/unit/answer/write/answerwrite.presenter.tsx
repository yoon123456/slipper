import { ChangeEvent, useState } from "react";
import * as S from "./answerwrite.styles";
import { IAnswerWritePresenter } from "./answerwrite.types";

// 승현-22.05.26-댓글의댓글 작성칸
export default function AnswerWritePresenter(props: IAnswerWritePresenter) {
  return (
    <>
      {props.isActive && (
        <S.QuestionBox>
          <S.PersonBox>
            <S.Person src={"/image/person.png"} />
          </S.PersonBox>
          <S.CommentBox>
            <S.QuestionInput
              type="text"
              onChange={props.onChangeQuestionInput}
              placeholder="답글 추가..."
              defaultValue={props?.el?.contents}
              value={props?.question}
            />
            <S.Box>
              <S.ButtonBox>
                <S.Write
                  isActiveButton={props.isActiveButton}
                  onClick={
                    props.isEdit
                      ? props.onClickSubQuestionUpdate
                      : props.onClickSubQuestion
                  }
                >
                  {props.isEdit ? "수정" : "답글"}
                </S.Write>
              </S.ButtonBox>
            </S.Box>
          </S.CommentBox>
        </S.QuestionBox>
      )}
    </>
  );
}

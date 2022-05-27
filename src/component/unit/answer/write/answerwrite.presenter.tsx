import { ChangeEvent, useState } from "react";
import * as S from "./answerwrite.styles";
import { IAnswerWritePresenter } from "./answerwrite.types";

// 승현-22.05.26-댓글의댓글 작성칸
export default function AnswerWritePresenter(props: IAnswerWritePresenter) {
  const [isActiveButton, setIsActiveButton] = useState(false);

  const [, setQuestion] = useState("");

  const onChangeQuestionInput = (event: ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
    setIsActiveButton(true);
  };
  const onClickClose = () => {
    props.setIsActive(false);
  };
  return (
    <>
      <S.QuestionBox>
        <S.PersonBox>
          <S.Person src="/image/person.png"></S.Person>
        </S.PersonBox>
        <S.CommentBox>
          <S.Top>
            <S.Name>attosisss_</S.Name>
            <S.Time>17시간전</S.Time>
          </S.Top>
          <S.QuestionInput
            type="text"
            onChange={onChangeQuestionInput}
            placeholder="답글 추가..."
          />
          <S.Box>
            <S.ButtonBox>
              <S.Cancel onClick={onClickClose}>취소</S.Cancel>
              <S.Write isActive={isActiveButton}>답글</S.Write>
            </S.ButtonBox>
          </S.Box>
        </S.CommentBox>
      </S.QuestionBox>
    </>
  );
}

import { ChangeEvent, useState } from "react";
import * as S from "./answerwrite.styles";
import { IAnswerWritePresenter } from "./answerwrite.types";

export default function AnswerWritePresenter(props: IAnswerWritePresenter) {
  const [isActive, setIsActive] = useState(false);
  const [isActiveButton, setIsActiveButton] = useState(false);

  const [, setQuestion] = useState("");

  // const onCLickQuestionAnswer = (event: any) => {
  //   setQuestion(event.target.value);
  //   setIsActive(true);
  // };

  const onChangeQuestionInput = (event: ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
    setIsActiveButton(true);
  };

  return (
    <>
      <S.QuestionBox>
        <S.PersonBox>
          <S.Person src="/image/person.png"></S.Person>
        </S.PersonBox>
        <S.CommentBox>
          <S.QuestionInput
            type="text"
            onChange={onChangeQuestionInput}
            placeholder="답글 추가..."
          />
          <S.Box>
            <S.ButtonBox>
              <S.Cancel>취소</S.Cancel>
              <S.Write isActive={isActiveButton}>답글</S.Write>
            </S.ButtonBox>
          </S.Box>
        </S.CommentBox>
      </S.QuestionBox>
    </>
  );
}

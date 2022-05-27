import { ChangeEvent, useState } from "react";
import AnswerWriteContainer from "../../answer/write/answerwrite.container";
import * as S from "./questionlist.styles";

// 승현-22.05.26-댓글
export default function QuestionListUIItem() {
  const [isActive, setIsActive] = useState(false);
  // const [isCircle, setIsCircle] = useState(false);
  const [question, setQuestion] = useState("");

  const onChangeQuestionAnswer = (event: ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  };

  const onCLickQuestionAnswer = () => {
    setIsActive((isActive) => !isActive);
  };

  // const onClickCircle = () => {
  //   setIsCircle((isCircle) => !isCircle);
  // };
  return (
    <>
      <S.WrapperOut>
        <S.RowBox>
          <S.Profile>
            <S.ProfileImage src="/image/person.png"></S.ProfileImage>
          </S.Profile>
          <S.RightBox>
            <S.Top>
              <S.Name>attosisss_</S.Name>
              <S.Time>17시간전</S.Time>
            </S.Top>
            <S.Question onChange={onChangeQuestionAnswer}>
              이것은 댓글이 달린 모습
            </S.Question>
            <S.QuestionAnswer onClick={onCLickQuestionAnswer}>
              답글
            </S.QuestionAnswer>
          </S.RightBox>
          {/* <S.DropDown>
            <S.Circle src="/image/circlemenu.png" onClick={onClickCircle} />
            {isCircle ? (
              <S.Submenu>
                <S.Edit>수정하기</S.Edit>
                <S.Delete>삭제하기</S.Delete>
              </S.Submenu>
            ) : (
              <div></div>
            )}
          </S.DropDown> */}
        </S.RowBox>
        {/* 답글 */}
        {isActive ? (
          <AnswerWriteContainer
            question={question}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        ) : (
          <div></div>
        )}
      </S.WrapperOut>
    </>
  );
}

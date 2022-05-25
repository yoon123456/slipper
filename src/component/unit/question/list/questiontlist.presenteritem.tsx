import { ChangeEvent, useState } from "react";
import AnswerWriteContainer from "../../answer/write/answerwrite.container";
import * as S from "./questionlist.styles";

export default function QuestionListUIItem() {
  const [isActive, setIsActive] = useState(false);
  // const [isActiveButton, setIsActiveButton] = useState(false);
  const [question, setQuestion] = useState("");

  const onChangeQuestionAnswer = (event: ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  };

  const onCLickQuestionAnswer = (event: any) => {
    setIsActive(true);
  };
  // const onChangeQuestionInput = (event: ChangeEvent<HTMLInputElement>) => {
  //   setQuestion(event.target.value);
  //   setIsActiveButton(true);
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
            <S.Question
              onChange={onChangeQuestionAnswer}
              placeholder="이것은 댓글입니다. 악플은 관리자에 의해 삭제될 수 있습니다.
              예쁜말로 댓글 달아주세요."
            />

            <S.QuestionAnswer onClick={onCLickQuestionAnswer}>
              답글
            </S.QuestionAnswer>
          </S.RightBox>
        </S.RowBox>
        {/* 답글 */}
        {isActive ? (
          // <S.QuestionBox>
          //   <S.PersonBox>
          //     <S.Person src="/image/person.png"></S.Person>
          //   </S.PersonBox>
          //   <S.CommentBox>
          //     <S.QuestionInput
          //       type="text"
          //       onChange={onChangeQuestionInput}
          //       placeholder="답글 추가..."
          //     />
          //     <S.Box>
          //       <S.ButtonBox>
          //         <S.Cancel>취소</S.Cancel>
          //         <S.Write isActive={isActiveButton}>답글</S.Write>
          //       </S.ButtonBox>
          //     </S.Box>
          //   </S.CommentBox>
          // </S.QuestionBox>
          <AnswerWriteContainer question={question} />
        ) : (
          <div></div>
        )}
      </S.WrapperOut>
    </>
  );
}

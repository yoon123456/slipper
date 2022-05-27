import AnswerWritePresenter from "./answerwrite.presenter";
import { IAnswerWriteContainer } from "./answerwrite.types";

export default function AnswerWriteContainer(props: IAnswerWriteContainer) {
  return (
    // 승현-22.05.26-댓글의 댓글
    <AnswerWritePresenter
      question={props.question}
      isActive={props.isActive}
      setIsActive={props.setIsActive}
    />
  );
}

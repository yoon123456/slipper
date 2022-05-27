import { ChangeEvent, MouseEventHandler, useState } from "react";
import QuestionWritePresenter from "./questionwrite.presenter";

// 승현-22.05.25-댓글작성함수
export default function QuestionWriteContainer() {
  const [isActive, setIsActive] = useState(false);
  const [question, setQuestion] = useState("");

  const [isCancle, setIsCancle] = useState(false);

  const onChangeQuestion = (event: ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
    setIsActive(true);
  };

  const onClickCancle = () => {
    setIsActive(false);
  };

  return (
    <QuestionWritePresenter
      onChangeQuestion={onChangeQuestion}
      isActive={isActive}
      isCancle={isCancle}
      onClickCancle={onClickCancle}
    />
  );
}

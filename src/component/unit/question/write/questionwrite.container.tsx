import { ChangeEvent, useState } from "react";
import QuestionWritePresenter from "./questionwrite.presenter";

export default function QuestionWriteContainer() {
  const [isActive, setIsActive] = useState(false);
  const [question, setQuestion] = useState("");

  const onChangeQuestion = (event: ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
    setIsActive(true);
  };

  return (
    <QuestionWritePresenter
      onChangeQuestion={onChangeQuestion}
      isActive={isActive}
    />
  );
}

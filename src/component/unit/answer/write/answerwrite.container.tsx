import { useState } from "react";
import AnswerWritePresenter from "./answerwrite.presenter";
import { IAnswerWriteContainer } from "./answerwrite.types";

export default function AnswerWriteContainer(props: IAnswerWriteContainer) {
  return (
    <AnswerWritePresenter
      question={props.question}
      isActive={props.isActive}
      setIsActive={props.setIsActive}
    />
  );
}

import { ChangeEvent, MouseEventHandler } from "react";

export interface IQuestionWritePresenter {
  onChangeQuestion: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickCancle: () => void;
  isActive: boolean;
  isCancle: boolean;
}

export interface IWriteButtonProps {
  isActive: boolean;
}

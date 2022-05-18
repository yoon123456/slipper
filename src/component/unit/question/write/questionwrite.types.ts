import { ChangeEvent } from "react";

export interface IQuestionWritePresenter {
  onChangeQuestion: (event: ChangeEvent<HTMLInputElement>) => void;
  isActive: boolean;
}

export interface IWriteButtonProps {
  isActive: boolean;
}

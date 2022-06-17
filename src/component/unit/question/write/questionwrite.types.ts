import { IQuery } from "./../../../../commons/types/generated/types";
import { ChangeEvent } from "react";

export interface IQuestionWritePresenter {
  onChangeQuestion: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickCancle: () => void;
  onClickQuestion: () => void;
  onClickQuestionUpdate: () => void;
  isActive: boolean;
  isCancle: boolean;
  isEdit?: boolean;
  question: string;
  el?: any;
}
export interface IQuestionWriteContainer {
  isEdit?: boolean;
  el?: any;
  data?: any;
}
export interface IWriteButtonProps {
  isActive: boolean;
}

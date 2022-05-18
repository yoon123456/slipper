import { ChangeEvent } from "react";

export interface IQuestionListUIItem {
  onChangeQuestion: (event: ChangeEvent<HTMLInputElement>) => void;
  isActive: boolean;
}

export interface IWriteButtonProps {
  isActive: boolean;
}

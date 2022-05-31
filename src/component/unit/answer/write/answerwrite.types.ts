import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IAnswerWriteContainer {
  subCommentEl: any;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  isActive?: boolean;
  setIsActive?: (active: boolean) => void;
  el?: any;
  isEdit?: boolean;
  data?: any;
  onClickDelete?: () => void;
}
export interface IAnswerWritePresenter {
  isActive: boolean | undefined;
  setIsActive: (active: boolean) => void;
  el?: any;
  onClickSubQuestionUpdate: () => void;
  onClickSubQuestion: () => void;
  onChangeQuestionInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickClose: () => void;
  isActiveButton: boolean;
  isEdit: boolean | undefined;
  // isCancle: boolean;
  question: string;
  data?: any;
  onClickDelete: (() => void) | undefined;
  subCommentEl: any;
}

export interface IWriteButtonProps {
  isActiveButton: boolean;
}

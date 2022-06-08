import { Pick } from "./../../boards/list/list.styles";
import { IQuery } from "./../../../../commons/types/generated/types";
export interface IWriteButtonProps {
  isActive: boolean;
}

export interface IQuestionListUIItem {
  el: any;
  data?: any;
}
export interface IQuestionListContainer {
  data: any;
}
export interface IQuestionListPresenter {
  listData: any;
  data: any;
}

import { MouseEvent } from "react";

export interface IDetailPresenter {
  onClickDeleteBoard: (event: MouseEvent<HTMLImageElement>) => void;
  onClickMoveToList: () => void;
  data: any;
}

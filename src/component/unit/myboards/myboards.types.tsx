import { MouseEvent } from "react";

export interface IMyBoardsPresenter {
  onLoadMore: () => void;
  onClickDetail: (event: MouseEvent<HTMLDivElement>) => void;
  handleScroll: () => void;
  data: any;
}

import { MouseEvent } from "react";

export interface IMypicksPresenter {
  onLoadMore: () => void;
  onClickDetail: (event: MouseEvent<HTMLDivElement>) => void;
  handleScroll: () => void;
  data: any;
}

import { MouseEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface IMyBoardsPresenter {
  onLoadMore: () => void;
  onClickDetail: (event: MouseEvent<HTMLDivElement>) => void;
  handleScroll: () => void;
  data: Pick<IQuery, "fetchUserBoards"> | undefined;
}

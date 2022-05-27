import { MouseEvent } from "react";
import { IBoard, IQuery } from "../../../../commons/types/generated/types";

export interface IDetailPresenter {
  onClickDeleteBoard: (event: MouseEvent<HTMLImageElement>) => void;
  onClickLike: (event: MouseEvent<HTMLImageElement>) => void;
  onClickMoveToList: () => void;
  onClickMoveToBoardEdit: () => void;
  data: Pick<IQuery, "fetchBoard"> | undefined;
  isActive: boolean;
}

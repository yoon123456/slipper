import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export interface IDetailPresenter {
  onClickDeleteBoard: (event: MouseEvent<HTMLImageElement>) => void;
  onClickLike: (event: MouseEvent<HTMLImageElement>) => void;
  onClickMoveToList: () => void;
  onClickMoveToBoardEdit: () => void;
  data: Pick<IQuery, "fetchBoard"> | undefined;
  isActive: number;
  refetch: (
    variables: Partial<IQueryFetchBoardArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoard">>>;
  userData: Pick<IQuery, "fetchUser"> | undefined;
  likeData: Pick<IQuery, "fetchUserLike"> | undefined;
}

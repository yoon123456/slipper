import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IListPresenter {
  onClickDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onChangeKeyword: (value: string) => void; //chan 검색 기능 추가 22.05.19
  keyword: string; //chan 검색 keyword 추가 22.05.19
  data?: Pick<IQuery, "fetchBoardsPage">;
  refetch: any; //예원
  onLoadMore: () => void; //예원
  btnRef: any;
  handleScroll: () => void;
}

export interface Iprops {
  isActive: boolean;
}

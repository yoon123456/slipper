import { ApolloQueryResult } from "@apollo/client";
import { LegacyRef, MouseEvent } from "react";
import {
  IQuery,
  IQueryTestFetchBoardsPageArgs,
} from "../../../../commons/types/generated/types";

export interface IListPresenter {
  onClickDetail: (event: MouseEvent<HTMLDivElement>) => void; // 예원 클릭 디테일 이벤트
  onChangeKeyword: (value: string) => void; //chan 검색 기능 추가 22.05.19
  keyword: string; //chan 검색 keyword 추가 22.05.19
  data?: Pick<IQuery, "fetchBoardsPage">; //chan 검색 keyword 추가 22.05.19

  refetch: (
    variables:
      | Partial<{ page: number; category: string; search: string }>
      | undefined
  ) => Promise<ApolloQueryResult<any>>; // chan 검색 keyword 추가 22.05.21

  onLoadMore: () => void; //예원
  btnRef: LegacyRef<HTMLButtonElement>; //chan 타입 변경
  handleScroll: () => void;
}

export interface Iprops {
  isActive: boolean;
}

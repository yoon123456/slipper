import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsPageArgs,
} from "../../../../commons/types/generated/types";

export interface IListPresenter {
  onClickDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onChangeKeyword: (value: string) => void; //chan 검색 기능 추가 22.05.19
  keyword: string; //chan 검색 keyword 추가 22.05.19
  data: any; //예원
  refetch: (
    variables:
      | Partial<{ page: number; category: string; search: string }>
      | undefined
  ) => Promise<ApolloQueryResult<any>>;

  onLoadMore: () => void; //예원
}

export interface Iprops {
  isActive: boolean;
}

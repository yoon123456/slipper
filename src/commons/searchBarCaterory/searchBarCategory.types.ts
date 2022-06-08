import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent, MouseEvent } from "react";
import { RecoilState } from "recoil";
import { IQuery, IQueryFetchBoardsPageArgs } from "../types/generated/types";

export interface ISearchBarCategoryPresenter {
  isActive: boolean;
  category: string;
  search: string;
  onMouseDown: () => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickCategory: (event: any) => void;
  onClickButton: () => void;
  onEnterButton: (event: any) => void;
}

export interface ISearchKeyWord {
  refetch: (
    variables:
      | Partial<{ page: number; category: string; search: string }>
      | undefined
  ) => Promise<ApolloQueryResult<any>>;

  onChangeKeyword: (value: string) => void;
  data?: any;
}

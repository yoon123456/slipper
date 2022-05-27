import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent, MouseEvent } from "react";
import { RecoilState } from "recoil";
import {
  IQuery,
  IQueryTestFetchBoardsPageArgs,
} from "../types/generated/types";

export interface ISearchBarCategoryPresenter {
  isActive: boolean;
  category: RecoilState<string>;
  search: string;
  onMouseDown: () => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickCategory: (event: any) => void;
  onClickButton: () => void;
}

export interface ISearchKeyWord {
  refetch: (
    variables: Partial<IQueryTestFetchBoardsPageArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsPage">>>;

  onChangeKeyword: (value: string) => void;
}

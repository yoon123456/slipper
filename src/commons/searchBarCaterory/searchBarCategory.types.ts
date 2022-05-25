import { ChangeEvent, MouseEvent } from "react";
import { RecoilState } from "recoil";

export interface ISearchBarCategoryPresenter {
  isActive: boolean;
  category: RecoilState<string>;
  search: string;
  onMouseDown: () => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickCategory: (event: any) => void;
  onClickButton: () => void;
}

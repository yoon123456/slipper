import { ChangeEvent, MouseEvent } from "react";

export interface ISearchBarCategoryPresenter {
  isActive: boolean;
  category: string;
  onMouseDown: () => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickCategory: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickButton: () => void;
}

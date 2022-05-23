import { ChangeEvent, MouseEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { CategoryState, SearchBarIsActiveState, SearchState } from "../store";
import SearchBarCategoryPresenter from "./searchBarCategory.presenter";
export default function SearchBarCategoryContainer() {
  const [isActive, setIsActive] = useRecoilState(SearchBarIsActiveState);
  const [search, setSearch] = useRecoilState(SearchState);
  const [category, setCategory] = useState(CategoryState);

  // 검색창을 누르면 숨겨진 카테고리가 나오는 기능
  const onMouseDown = () => {
    setIsActive((isActive) => !isActive);
  };

  // 검색어를 입력하면 그 값을 받아오는 기능
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  // 카테고리를 선택하는 기능
  const onClickCategory = (event: any) => {
    setCategory(event.currentTarget.value);
    // setIsClicked((isClicked) => !isClicked);
  };

  // 검색 버튼 기능
  const onClickButton = () => {
    search;
    category;
    console.log(search, category);
    setIsActive(false);
  };

  return (
    <SearchBarCategoryPresenter
      isActive={isActive}
      category={category}
      onMouseDown={onMouseDown}
      onChangeSearch={onChangeSearch}
      onClickCategory={onClickCategory}
      onClickButton={onClickButton}
    />
  );
}

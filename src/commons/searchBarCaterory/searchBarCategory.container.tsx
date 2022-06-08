import { ChangeEvent, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import {
  categoryBar,
  CategoryState,
  SearchBarIsActiveState,
  SearchState,
  serchBar,
} from "../store";
import SearchBarCategoryPresenter from "./searchBarCategory.presenter";
import { ISearchKeyWord } from "./searchBarCategory.types";

export default function SearchBarCategoryContainer(props: ISearchKeyWord) {
  const [isActive, setIsActive] = useRecoilState(SearchBarIsActiveState);
  const [search, setSearch] = useRecoilState(SearchState);
  const [category, setCategory] = useRecoilState(CategoryState);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [, setSearchBar] = useRecoilState(serchBar);
  const [, setCategoryBar] = useRecoilState(categoryBar);
  // 검색창을 누르면 숨겨진 카테고리가 나오는 기능
  const onMouseDown = () => {
    setIsActive((isActive) => !isActive);
  };

  // 검색어를 입력하면 그 값을 받아오는 기능
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    btnRef.current?.blur;
    setSearch(event.target.value);
  };

  // 카테고리를 선택하는 기능
  const onClickCategory = (event: any) => {
    const totalSearch = search;
    const searchSplit = totalSearch.split(" ")[0];
    const tag = event.currentTarget.value;
    const searchTag = `${searchSplit} ${tag}`;
    console.log(tag);
    setSearchBar(searchSplit);
    setCategoryBar(tag);
    if (category === tag) {
      setSearch("");
    } else {
      setSearch((prev) => prev + " " + event.currentTarget.value);
      setCategory(event.currentTarget.value);
    }
    setSearch(searchTag);
  };

  // 검색 버튼 기능
  const onClickButton = () => {
    search;
    category;
    setIsActive(false);
    props.refetch({ search, page: 1 });
  };

  const onEnterButton = (event: any) => {
    if (
      event.keyCode === 13 &&
      (event.target as HTMLInputElement).value !== " "
    ) {
      search;
      category;
      setIsActive(false);
      props.refetch({ search, page: 1 });
    }
  };

  return (
    <SearchBarCategoryPresenter
      isActive={isActive}
      category={category}
      onMouseDown={onMouseDown}
      onChangeSearch={onChangeSearch}
      onClickCategory={onClickCategory}
      onClickButton={onClickButton}
      search={search}
      onEnterButton={onEnterButton}
    />
  );
}

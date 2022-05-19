import { ChangeEvent } from "react";
import SearchBar from "./index";
import { ISearchbars01Props } from "./Searchbars01.types";
import _ from "lodash";

export default function Searchbars01(props: ISearchbars01Props) {
  const getDebounce = _.debounce((data: string) => {
    props.onChangeKeyword(data);
  }, 200);

  function onChangeSearchbar(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
  }

  return <SearchBar onChangeSearchbar={onChangeSearchbar} />;
}

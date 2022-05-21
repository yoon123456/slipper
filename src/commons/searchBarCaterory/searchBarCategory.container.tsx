import { useState } from "react";
import SearchBarCategoryPresenter from "./searchBarCategory.presenter";

export default function SearchBarCategoryContainer() {
  const [isActive, setIsActive] = useState(false);

  const onMouseDown = () => {
    setIsActive((isActive) => !isActive);
  };

  return (
    <SearchBarCategoryPresenter isActive={isActive} onMouseDown={onMouseDown} />
  );
}

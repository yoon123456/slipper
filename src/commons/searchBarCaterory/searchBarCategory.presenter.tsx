import * as S from "./searchBarCategory.styles";
import { v4 as uuidv4 } from "uuid";
import { ISearchBarCategoryPresenter } from "./searchBarCategory.types";

export default function SearchBarCategoryPresenter(
  props: ISearchBarCategoryPresenter
) {
  const CATEGORYS = [
    "대형마트",
    "편의점",
    "유치원",
    "학교",
    "학원",
    "주차장",
    "주유소",
    "지하철역",
    "은행",
    "문화시설",
    "중개업소",
    "공공기관",
    "관광명소",
    "숙박",
    "음식점",
    "카페",
    "병원",
    "약국",
    "기타",
  ];
  return (
    <S.WrapperOut>
      <S.SearchWrap>
        <S.Search
          type="text"
          placeholder="원하는 동네로 이동해보세요"
          // onChange={props.onChangeSearchbar}
          onMouseDown={props.onMouseDown}
          onChange={props.onChangeSearch}
          value={props.search}
          onKeyUp={props.onEnterButton}
        />

        <S.SearchButton
          key={uuidv4()}
          type="submit"
          onClick={props.onClickButton}
        >
          검색
        </S.SearchButton>
      </S.SearchWrap>
      {props.isActive && (
        <S.CategoryWrapperOut>
          {CATEGORYS.map((el, i) => (
            <S.BoxWrap key={uuidv4()}>
              {el !== undefined ? (
                <S.Box value={el} onClick={props.onClickCategory}>
                  {el}
                </S.Box>
              ) : (
                <div></div>
              )}
            </S.BoxWrap>
          ))}
        </S.CategoryWrapperOut>
      )}
      {!props.isActive && <div></div>}
    </S.WrapperOut>
  );
}

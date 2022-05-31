import * as S from "./searchBarCategory.styles";
import { v4 as uuidv4 } from "uuid";
import { ISearchBarCategoryPresenter } from "./searchBarCategory.types";

export const CATEGORYS = [
  { value: "대형마트" },
  { value: "편의점" },
  { value: "유치원" },
  { value: "학교" },
  { value: "학원" },
  { value: "주차장" },
  { value: "주유소" },
  { value: "지하철역" },
  { value: "은행" },
  { value: "문화시설" },
  { value: "중개업소" },
  { value: "공공기관" },
  { value: "관광명소" },
  { value: "숙박" },
  { value: "음식점" },
  { value: "카페" },
  { value: "병원" },
  { value: "약국" },
  { value: "기타" },
];

export default function SearchBarCategoryPresenter(
  props: ISearchBarCategoryPresenter
) {
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
              <S.Box value={el.value} onClick={props.onClickCategory}>
                {el.value}
              </S.Box>
            </S.BoxWrap>
          ))}
        </S.CategoryWrapperOut>
      )}
      {!props.isActive && <div></div>}
    </S.WrapperOut>
  );
}

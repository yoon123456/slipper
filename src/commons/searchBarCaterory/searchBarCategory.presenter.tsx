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
// export const CATEGORYS = [
//   { name: "대형마트", value: "MT1" },
//   { name: "편의점", value: "CS2" },
//   { name: "유치원", value: "PS3" },
//   { name: "학교", value: "SC4" },
//   { name: "학원", value: "AC5" },
//   { name: "주차장", value: "PK6" },
//   { name: "주유소", value: "OL7" },
//   { name: "지하철역", value: "SW8" },
//   { name: "은행", value: "BK9" },
//   { name: "문화시설", value: "CT1" },
//   { name: "중개업소", value: "AG2" },
//   { name: "공공기관", value: "PO3" },
//   { name: "관광명소", value: "AT4" },
//   { name: "숙박", value: "AD5" },
//   { name: "음식점", value: "FD6" },
//   { name: "카페", value: "CF7" },
//   { name: "병원", value: "HP8" },
//   { name: "약국", value: "PM9" },
//   { name: "기타", value: "" },
// ];

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

import * as S from "./searchBarCategory.styles";
import { ISearchBarCategoryPresenter } from "./searchBarCategory.types";

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
        />
        <S.SearchButton type="submit">검색</S.SearchButton>
      </S.SearchWrap>
      {props.isActive && (
        <S.CategoryWrapperOut>
          <S.Box>대형마트</S.Box>
          <S.Box>편의점</S.Box>
          <S.Box>유치원</S.Box>
          <S.Box>학교</S.Box>
          <S.Box>학원</S.Box>
          <S.Box>주차장</S.Box>
          <S.Box>주유소</S.Box>
          <S.Box>지하철역</S.Box>
          <S.Box>은행</S.Box>
          <S.Box>문화시설</S.Box>
          <S.Box>중개업소</S.Box>
          <S.Box>공공기관</S.Box>
          <S.Box>관광명소</S.Box>
          <S.Box>숙박</S.Box>
          <S.Box>음식점</S.Box>
          <S.Box>카페</S.Box>
          <S.Box>병원</S.Box>
          <S.Box>약국</S.Box>
          <S.Box>기타</S.Box>
        </S.CategoryWrapperOut>
      )}
      {!props.isActive && <div></div>}
    </S.WrapperOut>
  );
}

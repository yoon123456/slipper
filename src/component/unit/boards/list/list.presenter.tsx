// 예원작업 5/16

import Category from "../../../../commons/category";
import * as S from "./list.styles";
import { useMovetoPage } from "../../../../commons/hooks/movePage";
import KakaoMapPage from "../../../../commons/kakao/map.container";
import KeyWord from "../../../../commons/kakao/keyword/kakaomap.container";
import { IListPresenter } from "./list.types";
import Searchbars01 from "../../../../commons/searchBar/Searchbars01.container";
import SearchBarCategoryContainer from "../../../../commons/searchBarCaterory/searchBarCategory.container";
import { useRecoilState } from "recoil";
import { SearchBarIsActiveState } from "../../../../commons/store";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";
import Banner from "../../../../commons/banner/banner.presenter";

export default function ListPresenter(props: IListPresenter) {
  const { onClickMoveToPage } = useMovetoPage();
  const [isActive] = useRecoilState(SearchBarIsActiveState);

  return (
    <>
      <Banner />
      <S.WrapperOut isActive={isActive}>
        <S.WrapperTop>
          {/* chan 검색 기능 추가 22.05.19 */}
          {/* 예원 검색,카테고리,검색버튼 컴포넌트추가 22.05.21 */}
          {/* <Searchbars01 onChangeKeyword={props.onChangeKeyword} />
        <S.CategoryWrap>
          <Category />
        </S.CategoryWrap>
        <S.SearchButton type="submit">검색</S.SearchButton> */}
          <SearchBarCategoryContainer />
        </S.WrapperTop>
        <S.WrapperContents isActive={isActive}>
          <S.WrapperMiddle>
            <S.WrapperArray>
              <S.Array>최신순</S.Array>
              <S.Array>찜한순</S.Array>
            </S.WrapperArray>
            <S.WrapperWrite>
              <S.Button onClick={onClickMoveToPage("/boards/new")}>
                글쓰기
              </S.Button>
              <S.Pen src="/image/listpen.png" />
            </S.WrapperWrite>
          </S.WrapperMiddle>
          <S.WrapperBody>
            <S.WrapperLeft>
              {/* 에원 무한스크롤 기능 추가 5.22 */}
              <S.Infinite style={{ height: "100%", overflow: "auto" }}>
                <InfiniteScroll
                  pageStart={0}
                  loadMore={props.onLoadMore}
                  hasMore={true}
                  useWindow={false}
                >
                  {props.data?.fetchBoardsPage?.map((el: any) => (
                    <S.Wrapper key={uuidv4()}>
                      <S.UserContents
                        id={el._source.id}
                        onClick={props.onClickDetail}
                      >
                        <S.ImageWrap>
                          <S.Image src={el._source.thumbnail} />
                          <S.Heart src="/image/pickheart.png" />
                        </S.ImageWrap>
                        <S.UserWrap>
                          <S.ListTitle>{el._source.title}</S.ListTitle>
                          <S.ListHometown>{el._source.address}</S.ListHometown>
                          <S.ListShopName>{el._source.place}</S.ListShopName>
                        </S.UserWrap>
                      </S.UserContents>
                    </S.Wrapper>
                  ))}
                </InfiniteScroll>
              </S.Infinite>
            </S.WrapperLeft>
            <S.WrapperRight>
              {/* chan 지도 기능 추가 22.05.19 */}
              <KeyWord />
            </S.WrapperRight>
          </S.WrapperBody>
        </S.WrapperContents>
      </S.WrapperOut>
    </>
  );
}

{
  /* 
<S.Gallery onClick={onClickMoveToPage("/boards/detail")}>
  <S.A>
    <S.Img src="/image/listimage.png" />
    <S.Figcaption>
      <S.Icon>만족도</S.Icon>
      <S.Categoty>카테고리</S.Categoty>
      <S.Title>제목</S.Title>
    </S.Figcaption>
  </S.A>
</S.Gallery>; */
}

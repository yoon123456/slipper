// 예원작업 5/16

import * as S from "./list.styles";
import { useMovetoPage } from "../../../../commons/hooks/movePage";
import KeyWord from "../../../../commons/kakao/keyword/kakaomap.container";
import { IListPresenter } from "./list.types";
import SearchBarCategoryContainer from "../../../../commons/searchBarCaterory/searchBarCategory.container";
import { useRecoilState } from "recoil";
import { SearchBarIsActiveState } from "../../../../commons/store";
import InfiniteScroll from "react-infinite-scroller";
import Banner from "../../../../commons/banner/banner.presenter";
import ListPresenterItem from "./list.presenterItem";
import { v4 as uuidv4 } from "uuid";

export default function ListPresenter(props: IListPresenter) {
  const { onClickMoveToPage } = useMovetoPage();
  const [isActive] = useRecoilState(SearchBarIsActiveState);
  console.log(props.data, "dddd");
  return (
    <>
      <Banner />
      <S.WrapperOut isActive={isActive}>
        <S.WrapperTop>
          <SearchBarCategoryContainer
            refetch={props.refetch}
            onChangeKeyword={props.onChangeKeyword}
          />
        </S.WrapperTop>
        <S.WrapperContents isActive={isActive}>
          <S.WrapperMiddle>
            <S.WrapperArray>
              <S.Array id="recent" onClick={props.onClickArray}>
                최신순
              </S.Array>
              <S.Pick id="like" onClick={props.onClickArray}>
                찜한순
              </S.Pick>
            </S.WrapperArray>
            <S.WrapperWrite>
              <S.Button onClick={onClickMoveToPage("/boards/new")}>
                글쓰기{/* <S.Pen src="/image/plus.png" /> */}
                {/* <S.Pen>+</S.Pen> */}
              </S.Button>
            </S.WrapperWrite>
          </S.WrapperMiddle>
          <S.WrapperBody>
            {props.data?.fetchBoardsPage.length !== 0 ? (
              <S.WrapperLeft>
                {/* 에원 무한스크롤 기능 추가 5.22 */}
                <S.Infinite style={{ height: "100%", overflow: "auto" }}>
                  <InfiniteScroll
                    pageStart={0}
                    loadMore={props.onLoadMore}
                    hasMore={true}
                    useWindow={false}
                    onScroll={props.handleScroll}
                  >
                    {props.data?.fetchBoardsPage?.map((el: any) => (
                      <ListPresenterItem
                        key={uuidv4()}
                        el={el}
                        onClickDetail={props.onClickDetail}
                        refetch={props.refetch}
                      />
                    )) || <div></div>}
                  </InfiniteScroll>
                </S.Infinite>
              </S.WrapperLeft>
            ) : (
              <S.EmphyLeft>
                <S.EmphyText>검색 결과가 없습니다</S.EmphyText>
              </S.EmphyLeft>
            )}
            <S.WrapperRight>
              {/* chan 지도 기능 추가 22.05.19 */}
              <KeyWord data={props.data} />
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

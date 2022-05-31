// 예원작업 5/16
import * as S from "./list.styles";
import { useMovetoPage } from "../../../../commons/hooks/movePage";
import KeyWord from "../../../../commons/kakao/keyword/kakaomap.container";
import { IListPresenter } from "./list.types";
import SearchBarCategoryContainer from "../../../../commons/searchBarCaterory/searchBarCategory.container";
import { useRecoilState } from "recoil";
import { SearchBarIsActiveState } from "../../../../commons/store";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";
import Banner from "../../../../commons/banner/banner.presenter";
import { timeForToday } from "../../../../commons/timefortoday/timeForToday";
import Script from "next/script";

export default function ListPresenter(props: IListPresenter) {
  const { onClickMoveToPage } = useMovetoPage();
  const [isActive] = useRecoilState(SearchBarIsActiveState);
  return (
    <>
      <Banner />
      <S.WrapperOut isActive={isActive}>
        <Script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=10933d05118bfc99d732e83a2814b76a&libraries=services&autoload=false"
          strategy="beforeInteractive"
        />
        <S.WrapperTop>
          {/* chan 검색 기능 추가 22.05.19 */}
          {/* 예원 검색,카테고리,검색버튼 컴포넌트추가 22.05.21 */}
          {/* <Searchbars01 onChangeKeyword={props.onChangeKeyword} />
        <S.CategoryWrap>
          <Category />
        </S.CategoryWrap>
        <S.SearchButton type="submit">검색</S.SearchButton> */}
          <SearchBarCategoryContainer
            refetch={props.refetch}
            onChangeKeyword={props.onChangeKeyword}
          />
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
              <S.Pen src="/image/plus.png" />
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
                  onScroll={props.handleScroll}
                >
                  {props.data?.fetchBoardsPage?.map((el: any) => (
                    <S.Wrapper key={uuidv4()}>
                      <S.UserContents
                        id={el._source.id}
                        onClick={props.onClickDetail}
                      >
                        {el._source.thumbnail !== null && (
                          <S.ImageWrap>
                            <S.Image src={el._source.thumbnail} />
                            <S.Heart src="/image/pickheart.png" />
                          </S.ImageWrap>
                        )}
                        {el._source.thumbnail === null && (
                          <S.ImageWrap>
                            <S.ImageLogo src={"/image/logo.png"} />
                            <S.Heart src="/image/pickheart.png" />
                          </S.ImageWrap>
                        )}
                        <S.UserWrap>
                          <S.ListTitle>{el._source.title}</S.ListTitle>
                          <S.ListHometown>{el._source.address}</S.ListHometown>
                          <S.ListShopName>{el._source.place}</S.ListShopName>
                        </S.UserWrap>
                        <S.UserDate>
                          {timeForToday(el._source.createdat)}
                        </S.UserDate>
                      </S.UserContents>
                    </S.Wrapper>
                  )) || <div></div>}
                </InfiniteScroll>
              </S.Infinite>
            </S.WrapperLeft>
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

// 예원작업 5/16
import * as S from "./list.styles copy";
import { useMovetoPage } from "../../../../commons/hooks/movePage";
import KeyWord from "../../../../commons/kakao/keyword/kakaomap.container";
import { IListPresenter } from "./list.types_copy";
import SearchBarCategoryContainer from "../../../../commons/searchBarCaterory/searchBarCategory.container";
import { useRecoilState } from "recoil";
import {
  accessTokenState,
  SearchBarIsActiveState,
} from "../../../../commons/store";
import InfiniteScroll from "react-infinite-scroller";
import Banner from "../../../../commons/banner/banner.presenter";
import Script from "next/script";
import { v4 as uuidv4 } from "uuid";
import Logo from "../../../../commons/logo";
import ListPresenterItem from "./list.presenterItem";

export default function ListPresenter2(props: IListPresenter) {
  const { onClickMoveToPage } = useMovetoPage();
  const [isActive] = useRecoilState(SearchBarIsActiveState);
  const [accessToken] = useRecoilState(accessTokenState);
  return (
    <>
      <S.WrapperOutH>
        <S.WrapperBox>
          <S.WrapperInLogo onClick={props.onClickMoveToPage("/boards")}>
            <Logo />
          </S.WrapperInLogo>
          <S.WrapperIn>
            {/* 해리 - 햄버거 없애보기 */}
            <S.TestWrapper>
              <S.Test onClick={props.onClickMoveToPage("/boards/new")}>
                글쓰기
              </S.Test>
              <S.Test onClick={props.onClickMoveToPage("/payment")}>
                구독서비스
              </S.Test>
              <S.Test onClick={props.onClickMoveToPage("/mypage")}>
                내 신발장
              </S.Test>
            </S.TestWrapper>
          </S.WrapperIn>
          {accessToken ? (
            <S.WrapUser>
              <S.LogOut onClick={props.out}>로그아웃</S.LogOut>
            </S.WrapUser>
          ) : (
            <S.LogIn onClick={props.onClickMoveToPage("/login")}>
              로그인
            </S.LogIn>
          )}
        </S.WrapperBox>
      </S.WrapperOutH>

      {/* <Banner /> */}
      <S.WrapperOut isActive={isActive}>
        <Script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=10933d05118bfc99d732e83a2814b76a&libraries=services&autoload=false"
          strategy="beforeInteractive"
        />
        <S.WrapperTop>
          <SearchBarCategoryContainer
            refetch={props.refetch}
            onChangeKeyword={props.onChangeKeyword}
            data={props.data}
          />
        </S.WrapperTop>
        <S.WrapperContents isActive={isActive}>
          <S.WrapperMiddle>
            <S.WrapperArray>
              <S.Array
                array={props.array}
                id="recent"
                onClick={props.onClickArray}
              >
                최신순
              </S.Array>
              <S.Pick
                array={props.array}
                id="like"
                onClick={props.onClickArray}
              >
                찜한순
              </S.Pick>
            </S.WrapperArray>
            <S.WrapperWrite>
              <S.Button onClick={onClickMoveToPage("/boards/new")}>
                글쓰기
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

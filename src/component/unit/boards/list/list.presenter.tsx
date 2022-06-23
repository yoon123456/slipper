// 예원작업 5/16
import * as S from "./list.styles";
import { useMovetoPage } from "../../../../commons/hooks/movePage";
import KeyWord from "../../../../commons/kakao/keyword/kakaomap.container";
import { IListPresenter } from "./list.types";
import SearchBarCategoryContainer from "../../../../commons/searchBarCaterory/searchBarCategory.container";
import { useRecoilState } from "recoil";
import {
  accessTokenState,
  SearchBarIsActiveState,
} from "../../../../commons/store";
import InfiniteScroll from "react-infinite-scroller";
import Script from "next/script";
import { v4 as uuidv4 } from "uuid";
import Logo from "../../../../commons/logo";
import ListPresenterItem from "./list.presenterItem";

export default function ListPresenter(props: IListPresenter) {
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
            <SearchBarCategoryContainer
              refetch={props.refetch}
              onChangeKeyword={props.onChangeKeyword}
              data={props.data}
            />
          </S.WrapperIn>
          <S.WrapperUser>
            {accessToken ? (
              <S.WrapUser>
                <S.LogIn onClick={props.out}>
                  로그아웃
                  <S.LogoutIcon src="image/logouticon.png" />
                </S.LogIn>
              </S.WrapUser>
            ) : (
              <S.WrapperUserLogin>
                <S.LogIn onClick={props.onClickMoveToPage("/login")}>
                  로그인
                  <S.LogoutIcon src="image/logouticon.png" />
                </S.LogIn>
              </S.WrapperUserLogin>
            )}
            {accessToken ? (
              <S.UserImage
                onMouseOver={props.onMouseOver}
                onMouseOut={props.onMouseOut}
              >
                <S.UserImgWrap>
                  <S.UserImg
                    src={
                      props.userData?.fetchUser.imageUrl
                        ? props.userData?.fetchUser.imageUrl
                        : "image/profileDefault.png"
                    }
                  />
                  <S.Drop src="image/down.png" />
                </S.UserImgWrap>
                <S.DropdownList over={props.over}>
                  <S.List onClick={props.onClickMoveToPage("/payment")}>
                    구독하기
                  </S.List>
                  <S.List onClick={props.onClickMoveToPage("/mypage")}>
                    내신발장
                  </S.List>
                </S.DropdownList>
              </S.UserImage>
            ) : (
              <></>
              //  <S.UserImage>
              //   <S.UserImg src="image/profileDefault.png" />}
              //  </S.UserImage>
            )}
          </S.WrapperUser>
        </S.WrapperBox>
      </S.WrapperOutH>
      <S.WrapperOut isActive={isActive}>
        <Script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=10933d05118bfc99d732e83a2814b76a&libraries=services&autoload=false"
          strategy="beforeInteractive"
        />
        <S.WrapperContents isActive={isActive}>
          <S.WrapperBody>
            {props.data?.fetchBoardsPage.length !== 0 ? (
              <S.WrapperLeft>
                <S.WrapperMiddle>
                  <S.WrapperArray>
                    <S.ArrayBox>
                      <S.Array
                        array={props.array}
                        id="recent"
                        onClick={props.onClickArray}
                      >
                        최신순
                      </S.Array>
                      <S.ListArray src="/image/listarrow.png" />
                    </S.ArrayBox>
                    <S.ArrayBox>
                      <S.Pick
                        array={props.array}
                        id="like"
                        onClick={props.onClickArray}
                      >
                        찜한순
                      </S.Pick>
                      <S.ListArray src="/image/listarrow.png" />
                    </S.ArrayBox>
                  </S.WrapperArray>

                  <S.WrapperWrite>
                    <S.Button onClick={onClickMoveToPage("/boards/new")}>
                      글쓰기
                    </S.Button>
                  </S.WrapperWrite>
                </S.WrapperMiddle>
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

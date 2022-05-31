// 예원 작업 5/16

import * as S from "./myboards.styles";
import { IMyBoardsPresenter } from "./myboards.types";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";

export default function MyBoardsPresenter(props: IMyBoardsPresenter) {
  return (
    <>
      <S.Head>내가 쓴 글</S.Head>
      <S.Infinite style={{ height: "600px", overflow: "auto" }}>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
          onScroll={props.handleScroll}
        >
          <S.WrapperOut>
            {props.data?.fetchUserBoards?.map((el: any) => (
              <S.UserContents
                key={uuidv4()}
                id={el.id}
                onClick={props.onClickDetail}
              >
                {el.thumbnail !== "" && (
                  <S.ImageWrap onClick={props.onClickDetail} id={el.id}>
                    <S.Image src={el.thumbnail} />
                  </S.ImageWrap>
                )}
                {el.thumbnail === "" && (
                  <S.ImageWrap onClick={props.onClickDetail} id={el.id}>
                    <S.ImageLogo src={"/image/logo.png"} />
                  </S.ImageWrap>
                )}
                <S.UserWrap>
                  <S.ListTitle>{el.title}</S.ListTitle>
                  <S.ListHometown>{el.address}</S.ListHometown>
                  <S.ListShopName>{el.place}</S.ListShopName>
                </S.UserWrap>
              </S.UserContents>
            )) || <div></div>}
          </S.WrapperOut>
        </InfiniteScroll>
      </S.Infinite>
    </>
  );
}

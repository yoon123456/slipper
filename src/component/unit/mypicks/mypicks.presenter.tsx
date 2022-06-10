// 예원 작업 5/16

import * as S from "./mypicks.styles";
import { IMypicksPresenter } from "./mypicks.types";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";

export default function MypicksPresenter(props: IMypicksPresenter) {
  return (
    <>
      <S.Head>찜한 글</S.Head>
      <S.Infinite style={{ height: "600px", overflow: "auto" }}>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
          onScroll={props.handleScroll}
        >
          <S.WrapperOut>
            {props.data?.fetchLikeBoards?.map((el: any) => (
              <S.UserContents
                key={uuidv4()}
                id={el.board.id}
                onClick={props.onClickDetail}
              >
                {el.board.thumbnail !== "" && (
                  <S.ImageWrap onClick={props.onClickDetail} id={el.board.id}>
                    <S.Image src={el.board.thumbnail} />
                  </S.ImageWrap>
                )}
                {el.board.thumbnail === "" && (
                  <S.ImageWrap onClick={props.onClickDetail} id={el.board.id}>
                    <S.ImageLogo src={"/image/logo.png"} />
                  </S.ImageWrap>
                )}
                <S.UserWrap>
                  <S.ListTitle>{el.board.title}</S.ListTitle>
                  <S.ListHometown>{el.board.address}</S.ListHometown>
                  <S.ListShopName>{el.board.place}</S.ListShopName>
                </S.UserWrap>
              </S.UserContents>
            )) || <div></div>}
          </S.WrapperOut>
        </InfiniteScroll>
      </S.Infinite>
    </>
  );
}

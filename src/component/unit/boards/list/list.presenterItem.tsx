import * as S from "./list.styles";
import { timeForToday } from "../../../../commons/timefortoday/timeForToday";
import { IListPresenterItem } from "./list.types";
import { MouseEvent, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationClickLikeArgs,
} from "../../../../commons/types/generated/types";
import { CLICK_LIKE, FETCH_USER_LIKE, FETCH_BOARDS_PAGE } from "./list.query";
import { Modal } from "antd";
import { useRouter } from "next/router";

export default function ListPresenterItem(props: IListPresenterItem) {
  const router = useRouter();
  // 예원 게시글 좋아요 Mutation
  const [clickLike] = useMutation(CLICK_LIKE);

  const { data } = useQuery(FETCH_USER_LIKE, {
    variables: {
      boardId: String(props.el._source.id),
    },
  });

  // 좋아요 기능
  const onClickLike = async (event: MouseEvent<HTMLImageElement>) => {
    try {
      await clickLike({
        variables: {
          boardId: String((event.target as HTMLImageElement).id),
        },
        refetchQueries: [
          {
            query: FETCH_USER_LIKE,
            variables: {
              boardId: String(props.el._source.id),
            },
          },
        ],
      });
    } catch (error) {
      Modal.error({ content: "로그인이 필요한 서비스입니다" });
      router.push("/login");
    }
  };

  return (
    <S.Wrapper>
      <S.UserContents>
        {props.el._source.thumbnail !== "" && (
          <S.ImageWrap onClick={props.onClickDetail} id={props.el._source.id}>
            <S.Image src={props.el._source.thumbnail} />
          </S.ImageWrap>
        )}
        {props.el._source.thumbnail === "" && (
          <S.ImageWrap onClick={props.onClickDetail} id={props.el._source.id}>
            <S.ImageLogo src={"/image/logo.png"} />
          </S.ImageWrap>
        )}
        <S.UserWrap onClick={props.onClickDetail} id={props.el._source.id}>
          <S.ListTitle>{props.el._source.title}</S.ListTitle>
          <S.ListHometown>{props.el._source.address}</S.ListHometown>
          <S.ListShopName>{props.el._source.place}</S.ListShopName>
        </S.UserWrap>
        <S.UserDate>
          <S.LikeWrap>
            {data?.fetchUserLike.isLike ? (
              <>
                <S.Marker
                  id={props.el._source.id}
                  src="image/bookmarkpick.png"
                  onClick={onClickLike}
                />
                <S.Count>{data?.fetchUserLike.board.likeCount}</S.Count>
              </>
            ) : (
              <>
                <S.Marker
                  id={props.el._source.id}
                  src="image/bookmark.png"
                  onClick={onClickLike}
                />
                <S.Count>{data?.fetchUserLike.board.likeCount}</S.Count>
              </>
            )}
          </S.LikeWrap>
          {timeForToday(props.el._source.createdat)}
        </S.UserDate>
      </S.UserContents>
    </S.Wrapper>
  );
}

import * as S from "./list.styles copy";
import { timeForToday } from "../../../../commons/timefortoday/timeForToday";
import { IListPresenterItem } from "./list.types";
import { MouseEvent } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationClickLikeArgs,
  IQuery,
  IQueryFetchUserLikeArgs,
} from "../../../../commons/types/generated/types";
import { CLICK_LIKE, FETCH_USER_LIKE } from "./list.query";
import { Modal } from "antd";
import { useRouter } from "next/router";
import Detail from "../../../../../pages/boards/[boardId]/index";

export default function ListPresenterItem(props: IListPresenterItem) {
  const router = useRouter();
  // 예원 게시글 좋아요 Mutation
  const [clickLike] = useMutation<
    Pick<IMutation, "clickLike">,
    IMutationClickLikeArgs
  >(CLICK_LIKE);

  // 예원 게시글 좋아요 갯수를 가져오는 query
  const { data } = useQuery<
    Pick<IQuery, "fetchUserLike">,
    IQueryFetchUserLikeArgs
  >(FETCH_USER_LIKE, {
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
        <S.ImageWrap onClick={props.onClickDetail} id={props.el._source.id}>
          <S.Image
            src={
              props.el._source.thumbnail !== ""
                ? props.el._source.thumbnail
                : "/image/logo.png"
            }
          />
        </S.ImageWrap>
        <S.UserWrap onClick={props.onClickDetail} id={props.el._source.id}>
          <S.ListTitle>{props.el._source.title}</S.ListTitle>
          <S.ListHometown>{props.el._source.address}</S.ListHometown>
          <S.ListShopName>{props.el._source.place}</S.ListShopName>
        </S.UserWrap>
        <S.UserDate>
          <S.LikeWrap>
            <S.Marker
              id={props.el._source.id}
              src={
                data?.fetchUserLike.isLike
                  ? "image/bookmarkpick.png"
                  : "image/bookmark.png"
              }
              onClick={onClickLike}
            />
            <S.Count>{data?.fetchUserLike.board.likeCount}</S.Count>
          </S.LikeWrap>
          {timeForToday(props.el._source.createdat)}
        </S.UserDate>
      </S.UserContents>
    </S.Wrapper>
  );
}

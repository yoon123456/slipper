// 예원작업 5/16

import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import {
  IMutation,
  IMutationClickLikeArgs,
  IMutationDeleteBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import DetailPresenter from "./detail.presenter";
import { CLICK_LIKE, DELETE_BOARD, FETCH_BOARD } from "./detail.query";

export default function DetailContainer() {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  // 게시글 상세 내용 가져오기 Query
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) },
    }
  );
  console.log(data, "ddd");
  // 게시글 삭제 Mutation
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  // 게시글 좋아요 Mutation
  const [clickLike] = useMutation<
    Pick<IMutation, "clickLike">,
    IMutationClickLikeArgs
  >(CLICK_LIKE);

  // 게시글 삭제 함수
  const onClickDeleteBoard = async (event: MouseEvent<HTMLImageElement>) => {
    await deleteBoard({
      variables: {
        boardId: String((event.target as HTMLImageElement).id),
      },
      update(cache, { data }) {
        const deleteBoard = data?.deleteBoard;
        cache.modify({
          fields: {
            deleteBoard: (prev, { readField }) => {
              const filteredPrev = prev.filter(
                (el: any) => readField("id", el) !== deleteBoard
              );
              return [...filteredPrev];
            },
          },
        });
      },
    });
    Modal.success({ content: "게시글 삭제에 성공하였습니다" });
    router.push("/boads");
  };

  // 수정하기로 이동
  const onClickMoveToBoardEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  // 페이지 이동 함수
  const onClickMoveToList = () => {
    router.push("/boards");
  };

  // 좋아요 함수
  const onClickLike = async (event: MouseEvent<HTMLImageElement>) => {
    try {
      await clickLike({
        variables: {
          boardId: String((event.target as HTMLImageElement).id),
        },
      });
      setIsActive((isActive) => !isActive);
    } catch (error) {
      alert("실패");
    }
  };

  return (
    <DetailPresenter
      onClickDeleteBoard={onClickDeleteBoard}
      data={data}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
      onClickLike={onClickLike}
      isActive={isActive}
    />
  );
}

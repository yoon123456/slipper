// 예원작업 5/16

import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { FETCH_BOARDS_PAGE } from "../list/list.query";
import DetailPresenter from "./detail.presenter";
import { DELETE_BOARD, FETCH_BOARD } from "./detail.query";

export default function DetailContainer() {
  const router = useRouter();

  // 게시글 상세 내용 가져오기 Query
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  });

  // 게시글 삭제 Mutation
  const [deleteBoard] = useMutation(DELETE_BOARD);

  // 게시글 삭제 함수
  const onClickDeleteBoard = (event: MouseEvent<HTMLImageElement>) => {
    deleteBoard({
      variables: { boardId: String((event.target as HTMLImageElement).id) },
      refetchQueries: [{ query: FETCH_BOARDS_PAGE }],
    });
    alert("게시글 삭제에 성공하였습니다");
  };

  // 페이지 이동 함수
  const onClickMoveToList = () => {
    router.push("/boards");
  };

  return (
    <DetailPresenter
      data={data}
      onClickDeleteBoard={onClickDeleteBoard}
      onClickMoveToList={onClickMoveToList}
    />
  );
}

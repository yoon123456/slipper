// 예원작업 5/16

import { useMutation } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IMutation,
  IMutationDeleteBoardArgs,
} from "../../../../commons/types/generated/types";
import DetailPresenter from "./detail.presenter";
import { DELETE_BOARD } from "./detail.query";

export default function DetailContainer() {
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const onClickDeleteBoard = (event: MouseEvent<HTMLImageElement>) => {
    deleteBoard({
      variables: { boardId: String((event.target as HTMLImageElement).id) },
    });
    alert("게시글 삭제에 성공하였습니다");
  };
  return <DetailPresenter onClickDeleteBoard={onClickDeleteBoard} />;
}

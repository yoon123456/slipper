// 예원 작업 5.28

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchLikeBoardsArgs,
} from "../../../commons/types/generated/types";
import MypicksPresenter from "./mypicks.presenter";
import { FETCH_LIKE_BOARDS } from "./mypicks.queries";

export default function MypicksContainer() {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [throttle, setThrottle] = useState(true);

  // 내가 좋아요한 글 목록 불러오는 query
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchLikeBoards">,
    IQueryFetchLikeBoardsArgs
  >(FETCH_LIKE_BOARDS, {
    variables: {
      page: 1,
    },
  });

  const onClickDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`boards/${event.currentTarget.id}`);
  };

  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Number(Math.ceil(data.fetchLikeBoards.length / 5) + 1),
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchLikeBoards)
          return { fetchLikeBoards: [...prev.fetchLikeBoards] };
        return {
          fetchLikeBoards: [
            ...prev.fetchLikeBoards,
            ...fetchMoreResult?.fetchLikeBoards,
          ],
        };
      },
    });
  };
  const handleScroll = () => {
    if (throttle) return;
    if (!throttle) {
      setThrottle(true);
      setTimeout(async () => {
        if (page >= 50) setPage(page);
        else setPage((page) => page + 5);
        setThrottle(false);
      }, 300);
    }
  };
  return (
    <MypicksPresenter
      onLoadMore={onLoadMore}
      onClickDetail={onClickDetail}
      handleScroll={handleScroll}
      data={data}
    />
  );
}

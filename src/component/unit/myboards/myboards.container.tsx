// 내가 쓴 글 리스트 페이지
// 예원 작업 5/13 , 5/28

import MyBoardsPresenter from "./myboards.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { FETCH_USER_BOARDS } from "./myboards.query";
import {
  IQuery,
  IQueryFetchUserBoardsArgs,
} from "../../../commons/types/generated/types";

export default function MyBoardsContainer() {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [throttle, setThrottle] = useState(true);

  // 내가 쓴 글 목록을 불러오는 query
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUserBoards">,
    IQueryFetchUserBoardsArgs
  >(FETCH_USER_BOARDS, {
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
        page: Number(Math.ceil(data.fetchUserBoards.length / 5) + 1),
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUserBoards)
          return { fetchUserBoards: [...prev.fetchUserBoards] };
        return {
          fetchUserBoards: [
            ...prev.fetchUserBoards,
            ...fetchMoreResult?.fetchUserBoards,
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
    <MyBoardsPresenter
      onLoadMore={onLoadMore}
      onClickDetail={onClickDetail}
      handleScroll={handleScroll}
      data={data}
    />
  );
}

// 예원 작업 5/11 ,5/18, 5/22, 5,23 5,27

import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { useMovetoPage } from "../../../../commons/hooks/movePage";
import { detailIdState, isClickedNumState } from "../../../../commons/store";
import ListPresenter from "./list.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS_PAGE } from "./list.query";
import { FETCH_USER } from "./list.query";
import {
  IMutation,
  IMutationClickLikeArgs,
  IQuery,
  IQueryFetchBoardsPageArgs,
} from "../../../../commons/types/generated/types";

export default function ListContainer() {
  const router = useRouter();
  const { onClickMoveToPage } = useMovetoPage();
  const [isClickedNum, setIsClickedNum] = useRecoilState(isClickedNumState);
  const [keyword, setKeyword] = useState(""); // Chan 검색기능 추가
  const btnRef = useRef<HTMLButtonElement>(null);
  const [array, setArray] = useState("");
  const [detailId, setDetailId] = useRecoilState(detailIdState);
  const { data: userData } = useQuery(FETCH_USER);
  const aaa: string[] = [];
  const [page, setPage] = useState(0);
  const [throttle, setThrottle] = useState(true);

  useEffect(() => {
    btnRef.current?.click();
  }, []);

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

  // fetchBoardsPage query
  const { data, refetch, fetchMore } = useQuery(
    // <
    //   Pick<IQuery, "fetchBoardsPage">,
    //   IQueryFetchBoardsPageArgs
    // >
    FETCH_BOARDS_PAGE,
    {
      variables: {
        page: 1,
        search: "",
        category: "",
        sortType: array,
      },
    }
  );

  // 예원 무한스크롤 기능
  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Number(Math.ceil(data.fetchBoardsPage.length / 10) + 1),
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoardsPage)
          return { fetchBoardsPage: [...prev.fetchBoardsPage] };
        return {
          fetchBoardsPage: [
            ...prev.fetchBoardsPage,
            ...fetchMoreResult?.fetchBoardsPage,
          ],
        };
      },
    });
  };

  // 예원 최신순, 찜한순 정렬 기능 추가 5.28
  const onClickArray = (event: MouseEvent<HTMLDivElement>) => {
    setArray((event.target as HTMLDivElement).id);
  };

  // 예원 상세페이지로 들어가는 기능
  const onClickDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (detailId.includes(event.currentTarget.id) === false) {
      if (detailId.length >= 6 && !userData.fetchUser.subEnd) {
        router.push("/payment");
        return;
      }
      setIsClickedNum((prev) => prev + 1);
      aaa.push(event.currentTarget.id);
      localStorage.setItem("isClickedNum", String(isClickedNum));
      setDetailId((prev) => [...prev, ...aaa]);
      localStorage.setItem("detailId", JSON.stringify(detailId));
      router.push(`boards/${event.currentTarget.id}`);
    } else {
      router.push(`boards/${event.currentTarget.id}`);
    }
  };

  //chan 검색 기능 추가 22.05.19
  function onChangeKeyword(value: string) {
    setKeyword(value);
  }

  return (
    <ListPresenter
      onClickDetail={onClickDetail}
      onClickArray={onClickArray}
      onChangeKeyword={onChangeKeyword}
      keyword={keyword} // chan
      data={data} //예원
      refetch={refetch} //예원
      onLoadMore={onLoadMore} //예원
      btnRef={btnRef}
      handleScroll={handleScroll}
    />
  );
}

// 예원 작업 5/11 ,5/18, 5/22, 5,23

import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { useMovetoPage } from "../../../../commons/hooks/movePage";
import { isClickedNumState } from "../../../../commons/store";
import ListPresenter from "./list.presenter";
import { kakaoAddress } from "../../../../commons/store/kakaounit";
import { gql, useQuery } from "@apollo/client";
import { FETCH_BOARDS_PAGE } from "./list.query";
import { FETCH_USER } from "../../login/login.queries";
import {
  IQuery,
  IQueryFetchBoardsPageArgs,
} from "../../../../commons/types/generated/types";

export default function ListContainer() {
  const router = useRouter();
  const { onClickMoveToPage } = useMovetoPage();
  const [isClickedNum, setIsClickedNum] = useRecoilState(isClickedNumState);
  const [keyword, setKeyword] = useState(""); // Chan 검색기능 추가
  const { data: userData } = useQuery(FETCH_USER);
  const btnRef = useRef<HTMLButtonElement>(null);

  const [page, setPage] = useState(0);
  const [throttle, setThrottle] = useState(false);

  useEffect(() => {
    btnRef.current?.click();
  }, []);

  console.log(userData);

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
  const { data, refetch, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardsPage">,
    IQueryFetchBoardsPageArgs
  >(FETCH_BOARDS_PAGE, {
    variables: {
      page: 1,
      search: "",
      category: "",
    },
  });

  // 무한스크롤 기능
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

  const onClickDetail = (event: MouseEvent<HTMLDivElement>) => {
    setIsClickedNum((prev) => prev + 1);
    localStorage.setItem("isClickedNum", String(isClickedNum));

    // 결제권없는 사람일 경우
    // if (isClickedNum >= 5) {
    //   alert("6개 이상의 게시물을 보시려면 결제가 필요합니다");
    //   router.push("/payment");
    // }

    // 결제권이 있는 사람일 경우는 만료일과 비교하여서 만료일일 경우 결제페이지로 이동하도록 유도한다
    router.push(`boards/${event.currentTarget.id}`);
  };

  //chan 검색 기능 추가 22.05.19
  function onChangeKeyword(value: string) {
    setKeyword(value);
  }
  return (
    <ListPresenter
      onClickDetail={onClickDetail}
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

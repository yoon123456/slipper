// 예원 작업 5/11 ,5/18, 5/22, 5,23 5,27

import { useRouter } from "next/router";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import {
  categoryBar,
  detailIdState,
  isClickedNumState,
  serchBar,
} from "../../../../commons/store";
import ListPresenter from "./list.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_BOARDS_PAGE, LOGOUT, UPDATE_PAYMENT } from "./list.query";
import { FETCH_USER } from "./list.query";
import {
  IMutation,
  IMutationUpdatePaymentArgs,
  IQuery,
  IQueryFetchBoardsPageArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";
import ListPresenter2 from "./list.presenter copy";
import { useMovetoPage } from "../../../../commons/hooks/movePage";
import { getDate } from "../../../../commons/libraries/date";

export default function ListContainer2() {
  const router = useRouter();
  const [isClickedNum, setIsClickedNum] = useRecoilState(isClickedNumState);
  const [keyword, setKeyword] = useState("");
  const btnRef = useRef<HTMLButtonElement>(null);
  const [array, setArray] = useState("");
  const [detailId, setDetailId] = useRecoilState(detailIdState);
  const { data: userData } = useQuery(FETCH_USER);
  const aaa: string[] = [];
  const [page, setPage] = useState(0);
  const [throttle, setThrottle] = useState(true);
  const [serch] = useRecoilState(serchBar);
  const [category] = useRecoilState(categoryBar);

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

  const { data, refetch, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardsPage">,
    IQueryFetchBoardsPageArgs
  >(FETCH_BOARDS_PAGE, {
    variables: {
      page: 1,
      search: serch,
      category: category,
      sortType: array,
    },
  });

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
        Modal.error({
          content: "6개 이상의 게시글을 보시려면 결제가 필요합니다 ",
        });
        router.push("/payment");
        return;
      }
      setIsClickedNum((prev) => prev + 1);
      aaa.push(event.currentTarget.id);
      localStorage.setItem("isClickedNum", String(isClickedNum));
      setDetailId((prev) => [...prev, ...aaa]);
      localStorage.setItem("detailId", JSON.stringify(detailId));
      // setDetail(false);

      router.push(`boards/${event.currentTarget.id}`);
    } else {
      // setDetail(false);

      router.push(`boards/${event.currentTarget.id}`);
    }
  };

  //chan 검색 기능 추가 22.05.19
  function onChangeKeyword(value: string) {
    setKeyword(value);
  }

  // 헤더기능
  const { onClickMoveToPage } = useMovetoPage();
  const [logout] = useMutation<Pick<IMutation, "logout">>(LOGOUT);

  const [udpatePayment] = useMutation<
    Pick<IMutation, "updatePayment">,
    IMutationUpdatePaymentArgs
  >(UPDATE_PAYMENT);

  const userPayment = async () => {
    if (userData?.fetchUser.subType) {
      const current = new Date(getDate()),
        currentTime = current.getTime(); // 현재
      const sub = new Date(userData?.fetchUser.subEnd),
        subTime = sub.getTime(); // 쿠폰
      const result = subTime - 9 * 60 * 60 * 1000;
      if (currentTime >= result) {
        try {
          await udpatePayment({
            variables: {
              userId: userData.fetchUser.id,
            },
          });
          Modal.success({
            content: "결재기간이 만료되어 결제창으로 이동합니다.",
          });
          out();
          setIsClickedNum(0);
          router.push("/login");
        } catch (error: any) {
          Modal.error({ content: "오류" });
          return false;
        }
      } else {
        return false;
      }
    }
  };

  const out = async () => {
    try {
      await logout();
      Modal.success({ content: "다시 로그인 해주세요" });
      // location.reload();
      router.push("/boards");
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  useEffect(() => {
    userPayment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <ListPresenter2
      onClickDetail={onClickDetail}
      onClickArray={onClickArray}
      onChangeKeyword={onChangeKeyword}
      keyword={keyword} // chan
      data={data} //예원
      userData={userData}
      refetch={refetch} //예원
      onLoadMore={onLoadMore} //예원
      btnRef={btnRef}
      handleScroll={handleScroll}
      array={array}
      // 헤더추가
      onClickMoveToPage={onClickMoveToPage}
      out={out}
    />
  );
}

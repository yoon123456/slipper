import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryTestFetchUserArgs,
} from "../../../commons/types/generated/types";
import MypaidsPresenter from "./mypaids.presenter";
import { FETCH_PAYMENTS } from "./mypaids.queries";

export default function MypaidsContainer() {
  const { data, fetchMore } = useQuery(FETCH_PAYMENTS);
  console.log(data, "fdfd");

  // const loadMore = () => {
  //   // 1.fetchUser없으면, More로직 중단
  //   if (!data) return;
  //   // 2.더 조회하기
  //   fetchMore({
  //     // 전체갯수를 10(한page당 글 수)로 나누고, 올리고, +1(소숫점아래 포함 위해)
  //     variables: { page: Math.ceil(data.fetchPayments.length / 10) + 1 },
  //     // prev(fetchUser의 useQuery)를 수정 -> 2가지 케이스
  //     updateQuery: (prev, { fetchMoreResult }) => {
  //       // 2-(1)더조회할 내역 없으면->기존 내역 보여주기
  //       if (!fetchMoreResult?.fetchPayments)
  //         return { fetchPayments: [...prev.fetchPayments] };
  //       // 2-(2)더조회할 내역 있으면->기존 내역+더조회 결과
  //       return {
  //         fetchPayments: [
  //           ...prev.fetchPayments,
  //           ...fetchMoreResult.fetchPayments,
  //         ],
  //       };
  //     },
  //   });
  // };

  return (
    <MypaidsPresenter
      data={data}
      // loadMore={loadMore}
    />
  );
}

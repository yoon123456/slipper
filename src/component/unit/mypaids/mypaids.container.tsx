import { useQuery } from "@apollo/client";
import { IQuery } from "../../../commons/types/generated/types";
import MypaidsPresenter from "./mypaids.presenter";
import { FETCH_PAYMENTS } from "./mypaids.queries";
import { IMyPaymentHistory } from "./mypaids.types";

export default function MypaidsContainer(props: IMyPaymentHistory) {
  const { data, fetchMore } = useQuery(FETCH_PAYMENTS, {
    variables: {
      page: 1,
    },
  });

  const loadMore = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Number(Math.ceil(data.fetchPayments.length / 10) + 1),
      },

      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchPayments)
          return { fetchPayments: [...prev.fetchPayments] };
        return {
          fetchPayments: [
            ...prev.fetchPayments,
            ...fetchMoreResult?.fetchPayments,
          ],
        };
      },
    });
  };

  return <MypaidsPresenter data={data} loadMore={loadMore} />;
}

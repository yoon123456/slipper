import { useQuery } from "@apollo/client";
import MypaidsPresenter from "./mypaids.presenter";
import { FETCH_PAYMENTS } from "./mypaids.queries";

export default function MypaidsContainer() {
  const { data, fetchMore } = useQuery(FETCH_PAYMENTS);

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

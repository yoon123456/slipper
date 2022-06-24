import { useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationRefundPaymentArgs,
} from "../../../commons/types/generated/types";
import MypaidsPresenter from "./mypaids.presenter";
import { FETCH_PAYMENTS, REFUND_PAYMENT } from "./mypaids.queries";
import { IMyPaymentHistory } from "./mypaids.types";
import { MouseEvent } from "react";
import { JoinPathTuple } from "react-hook-form/dist/types/path/common";
import { modalGlobalConfig } from "antd/lib/modal/confirm";
import { Modal } from "antd";
import { Content } from "antd/lib/layout/layout";

export default function MypaidsContainer(props: IMyPaymentHistory) {
  const { data, fetchMore } = useQuery(FETCH_PAYMENTS, {
    variables: {
      page: 1,
    },
  });

  const [refundPayment] = useMutation<
    Pick<IMutation, "refundPayment">,
    IMutationRefundPaymentArgs
  >(REFUND_PAYMENT);

  const deletePayment = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      await refundPayment({
        variables: {
          impUid: (event.target as HTMLButtonElement).id,
        },
        update(cache, { data }) {
          const refundPayment = data?.refundPayment;
          cache.modify({
            fields: {
              refundPayment: (prev, { readField }) => {
                const filterPrev = prev.filter(
                  (el: any) => readField("id", el) !== refundPayment
                );
                return [...filterPrev];
              },
            },
          });
        },
      });
      Modal.success({ content: "환불처리 완료" });
    } catch (error: any) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

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

  return (
    <MypaidsPresenter
      data={data}
      loadMore={loadMore}
      deletePayment={deletePayment}
    />
  );
}

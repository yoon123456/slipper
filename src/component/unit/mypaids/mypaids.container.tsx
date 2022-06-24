import { useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationRefundPaymentArgs,
} from "../../../commons/types/generated/types";
import MypaidsPresenter from "./mypaids.presenter";
import { FETCH_PAYMENTS, REFUND_PAYMENT } from "./mypaids.queries";
import { IMyPaymentHistory } from "./mypaids.types";
import { MouseEvent, useEffect, useState } from "react";
import { Modal } from "antd";

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

  const [subStart, setSubStart] = useState([""]);
  const [subEnd, setSubEnd] = useState([""]);

  const deletePayment = async (event: MouseEvent<HTMLDivElement>) => {
    try {
      await refundPayment({
        variables: {
          impUid: (event.target as HTMLDivElement).id,
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

  // useEffect(() => {
  //   const startTime = data?.fetchPayments.map((el: any) => {
  //     const start = el.subStart;
  //     console.log(el.subStart.substring);
  //     setSubStart(start.substring(0, 10));
  //   });

  //   const endTime = data?.fetchPayments.map((el: any) => {
  //     setSubEnd(el.subEnd);
  //   });
  //   console.log(subStart);
  // });

  return (
    <MypaidsPresenter
      data={data}
      loadMore={loadMore}
      deletePayment={deletePayment}
    />
  );
}

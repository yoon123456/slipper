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
  const [afterDay, setAfterDay] = useState(0);
  const [currentDay, setCurrentDay] = useState(0);
  const [endDate, setEndDate] = useState("");
  const { data, fetchMore } = useQuery(FETCH_PAYMENTS, {
    variables: {
      page: 1,
    },
  });

  const [refundPayment] = useMutation<
    Pick<IMutation, "refundPayment">,
    IMutationRefundPaymentArgs
  >(REFUND_PAYMENT);

  const cancelPayment = async (event: MouseEvent<HTMLDivElement>) => {
    try {
      await refundPayment({
        variables: {
          impUid: (event.target as HTMLDivElement).id,
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              refundPayment: (prev) => {
                return [data?.refundPayment, ...prev];
              },
            },
          });
        },
      });
      Modal.success({ content: "환불처리 완료" });
      if (afterDay < currentDay) {
        if (!endDate) {
          Modal.error({ content: `환불요청은${afterDay}까지입니다.` });
          return;
        }
      }
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

  useEffect(() => {
    const startTime = data?.fetchPayments.map((el: any) => {
      const paymentDay = new Date(el.subStart);
      const afterThreeDay = paymentDay.getDate() + 3;
      const current = new Date();
      const currentDate = current.getDate();
      setEndDate(el.subEnd);

      if (afterDay === 0) {
        setAfterDay(afterThreeDay);
        setCurrentDay(currentDate);
      }
    });
  });

  return (
    <MypaidsPresenter
      data={data}
      loadMore={loadMore}
      cancelPayment={cancelPayment}
      afterDay={afterDay}
      currentDay={currentDay}
    />
  );
}

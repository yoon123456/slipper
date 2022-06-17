import {
  FetchMoreOptions,
  FetchMoreQueryOptions,
  OperationVariables,
} from "@apollo/client";
import { IQuery } from "../../../commons/types/generated/types";

export interface IMypaidsPresenter {
  data: Pick<IQuery, "fetchPayments"> | undefined; // 예원 수정 6/9
  // data?: Pick<IQuery, "fetchUser">;
  loadMore: () => void;
}

export interface IMyPaymentHistory {
  data?: Pick<IQuery, "fetchPayments"> | undefined;
  fecthMore: (
    fetchMoreOptions: FetchMoreQueryOptions<OperationVariables, any> &
      FetchMoreOptions<any, OperationVariables>
  ) => void;

  // loadMore: () => void;
}

import { IQuery } from "../../../commons/types/generated/types";

export interface IMypaidsPresenter {
  data: Pick<IQuery, "fetchPayments"> | undefined; // 예원 수정 6/9
  loadMore: () => void;
}

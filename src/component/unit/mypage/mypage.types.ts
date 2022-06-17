import {
  FetchMoreOptions,
  FetchMoreQueryOptions,
  OperationVariables,
} from "@apollo/client";
import { ChangeEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface IUpdateUserInput {
  nickname?: string;
  imageUrl?: string;
  introduce?: string;
}
export interface IMyPagePresenter {
  mypageRight: string;
  onClickMypicks: () => void;
  onClickMyboards: () => void;
  onClickMypaids: () => void;
  data?: Pick<IQuery, "fetchUser">;
  fileUrl: string[];
  showModal: () => void;
  modalVisible: boolean;
  modalCancel: () => void;
  onChangeNickname: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFileUrl: (fileUrl: string) => void;
  onChangeIntroduce: (event: ChangeEvent<HTMLInputElement>) => void;
  modalOk: () => void;
  nickname: string;
  payment: Pick<IQuery, "fetchPayments"> | undefined;
  payFecthMore: (
    fetchMoreOptions: FetchMoreQueryOptions<OperationVariables, any> &
      FetchMoreOptions<any, OperationVariables>
  ) => void;
}

export interface IProps {
  mypageRight: boolean;
}

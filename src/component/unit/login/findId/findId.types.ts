import { ChangeEvent, MouseEvent } from "react";

export interface IFindIdPresenter {
  flag: boolean;
  isActive: boolean;
  email: string;
  onChangePhoneNum: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeProofNum: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickGetToken: () => void;
  onClickCheckProof: () => void;
  onClickFindId: () => void;
}

export interface IProps {
  isActive: boolean;
}

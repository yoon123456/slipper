import { ChangeEvent } from "react";

export interface IFindPwPresenter {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePw: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePwCheck: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePhoneNum: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeProofNum: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickGetToken: () => void;
  onClickCheckProof: () => void;
  onClickFindPw: () => void;
  isActive: boolean;
  isEdit: boolean;
  flag: boolean;
  email: string;
}

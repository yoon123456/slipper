import { ChangeEvent } from "react";

export interface IFromValues {
  email: string;
  pw: string;
  pwCheck?: string;
  nickname: string;
  image?: string;
  introduce?: string;
}

export interface IJoinPresenterProps {
  register: any;
  handleSubmit: any;
  formState: any;
  onClickJoin: (data: IFromValues) => void;
  onChangePhoneNum: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeProofNum: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickGetToken: () => void;
  onClickCheckProof: () => void;
}

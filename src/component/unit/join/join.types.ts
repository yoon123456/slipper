import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { ChangeEvent } from "react";

export interface IFormValues {
  email: string;
  pw: string;
  pwCheck?: string;
  nickname: string;
  image?: string;
  introduce?: string;
}

export interface IJoinPresenterProps {
  register: UseFormRegister<IFormValues>;
  handleSubmit: UseFormHandleSubmit<IFormValues>;
  formState: FormState<IFormValues>;
  onClickJoin: (data: IFormValues) => void;
  onChangePhoneNum: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeProofNum: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickGetToken: () => void;
  onClickCheckProof: () => void;
  onChangeFileUrl: (fileUrl: string) => void;
  onChangeBusinessFileUrl: (fileUrl: string) => void;
  phoneNum: string;
  flag: boolean;
  isActive: boolean;
  isActived: boolean;
  isEdit: boolean;
  isShow: boolean;
  fileUrl?: string[];
  businessfileUrl?: string[];

  onClickAgreeJoin: () => void;
  onClickRadio: () => void;
  onClickRole: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickCancle: () => void;
  length: number | undefined;
}

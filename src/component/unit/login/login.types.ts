import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { IFromValues } from "../join/join.types";

export interface IFormValues {
  email: string;
  pw: string;
}

export interface IJoinPresenter {
  register: UseFormRegister<IFromValues>;
  handleSubmit: UseFormHandleSubmit<IFromValues>;
  formState: FormState<IFromValues>;
  isActive: boolean;
  onclickLogin: (data: IFormValues) => void;
}
export interface IProps {
  isActive: boolean;
}

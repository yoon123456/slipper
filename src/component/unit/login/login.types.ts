import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IFormValues {
  email: string;
  pw: string;
}

export interface IJoinPresenter {
  register: UseFormRegister<IFormValues>;
  handleSubmit: UseFormHandleSubmit<IFormValues>;
  formState: FormState<IFormValues>;
  isActive: boolean;
  onclickLogin: (data: IFormValues) => void;
}

export interface IProps {
  isActive: boolean;
}

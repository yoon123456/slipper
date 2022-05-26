import { bool, boolean } from "yup";

export interface IFormValues {
  email: string;
  pw: string;
}

export interface IJoinPresenter {
  register: any;
  handleSubmit: any;
  formState: any;
  isActive: boolean;
  onclickLogin: (data: IFormValues) => void;
  onClickGoJoin: () => void;
}
export interface IProps {
  isActive: boolean;
}

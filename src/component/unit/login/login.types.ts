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
}
export interface IProps {
  isActive: boolean;
}

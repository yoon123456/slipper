export interface IFormValues {
  email: string;
  pw: string;
}

export interface IJoinPresenter {
  register: any;
  handleSubmit: any;
  formState: any;
  onclickLogin: (data: IFormValues) => void;
}

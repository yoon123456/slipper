export interface IFormValues {
  title: string;
  contents: string;
}
export interface IWritePresenter {
  ReactQuill: any;
  activeStep: string;
  onClickFirstNext: () => void;
  onClickSecondPrev: () => void;
  onClickSecondNext: () => void;
  onClickThirdPrev: () => void;
  register: any;
  handleSubmit: any;
  // onChangeRange: (date: String, dateString: String) => void;
  onChangeRange: (
    values: RangeValue<Moment>,
    formatString: [string, string]
  ) => void;
  onChangeContents: (value: string) => void;
  getValues: any;
  reset: any;
  fileUrls: string[];
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  onClickWriteBoard: (data: IFormValues) => void;
  isEdit: boolean;
  data: any;
  onClickEditBoard: (data: IFormValues) => void;
}

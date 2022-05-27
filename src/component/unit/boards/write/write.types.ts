import { ChangeEvent } from "react";

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
  // onChangeRange: (date: String, dateString: String) => void;
  onChangeRange: (
    values: RangeValue<Moment>,
    formatString: [string, string]
  ) => void;
  // onClickFirst: () => void;
  // onClickSecond: () => void;
  // onClickThird: () => void;
  // chkFirst: boolean;
  // chkSecond: boolean;
  // chkThird: boolean;
  happy: boolean;
  uhm: boolean;
  sad: boolean;
  onClickHappy: () => void;
  onClickUhm: () => void;
  onClickSad: () => void;
  onChangeTitle: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  mapStatus?: boolean;
  fileUrls: string[];
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  onClickWriteBoard: (data: IFormValues) => void;
  isEdit: boolean;
  data: any;
  onClickEditBoard: (data: IFormValues) => void;
  address: {
    content: "";
    address_name: "";
    group_name: "";
    group_code: "";
    category_name: "";
    distance: "";
    id: "";
    phone: "";
    place_url: "";
    road_name: "";
    position: {
      lat: "";
      lng: "";
    };
  };
}

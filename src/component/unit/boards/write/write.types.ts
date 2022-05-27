import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IWriteContainer {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
}
export interface IWritePresenter {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  activeStep: string;
  onClickFirstNext: () => void;
  onClickSecondPrev: () => void;
  onClickSecondNext: () => void;
  onClickThirdPrev: () => void;
  onChangeRange: (date: any, dateString: any) => void;
  happy: boolean;
  uhm: boolean;
  sad: boolean;
  onClickHappy: () => void;
  onClickUhm: () => void;
  onClickSad: () => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (value: string) => void;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  fileUrls: string[];
  mapStatus?: boolean;
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
  onClickWriteBoard: () => void;
  onClickEditBoard: () => void;
}

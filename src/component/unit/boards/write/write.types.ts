import { ChangeEvent, MouseEvent } from "react";
import internal from "stream";
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
  startDate: string;
  endDate: string;
  dateError: string;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  title: string;
  titleError: string;
  onClickHappy: () => void;
  onClickUhm: () => void;
  onClickSad: () => void;
  score: number;
  scoreError: string;
  scoreClear?: number;
  onChangeContents: (value: string) => void;
  contents: string;
  contentsError: string;
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
  mapError: string;
  onClickWriteBoard: () => void;
  onClickEditBoard: () => void;
  isButtonActive: boolean;
}
export interface IProps {
  isButtonActive: boolean;
}

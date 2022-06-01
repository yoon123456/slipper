import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IWriteContainer {
  isEdit?: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}
export interface IUpdateBoardInput {
  startDate?: string;
  endDate?: string;
  score?: number;
  title?: string;
  contents?: string;
}
export interface IWritePresenter {
  isEdit?: boolean;
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
  resetScore: boolean;
  onClickResetScore: () => void;
  address: {
    address_name: string;
    category_name: string;
    content: string;
    group_code: string;
    group_name: string;
    phone: string;
    place_url: string;
    road_name: string;
    position: {
      lat: string;
      lng: string;
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

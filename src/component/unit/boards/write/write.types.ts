import { ChangeEvent, MouseEvent } from "react";
import { IQuery, IBoardImage } from "../../../../commons/types/generated/types";

export interface IWriteContainer {
  isEdit?: boolean;
  data?: any;
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

export interface IPropsWriteContent {
  activeStep?: string;
  data?: Pick<IQuery, "fetchBoard">;
  isEdit?: boolean;
  onChangeRange: (date: any, dateString: any) => void;
  startDate: string;
  endDate: string;
  dateError: string;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  title?: string;
  titleError?: string;
  resetScore?: boolean;
  score?: number;
  onClickHappy: () => void;
  onClickUhm: () => void;
  onClickSad: () => void;
  onClickResetScore: () => void;
  scoreError?: string;
  onChangeContents: (value: string) => void;
  contents?: string;
  contentsError?: string;
  isButtonActive: boolean;
  onClickFirstNext: () => void;
}

export interface IPropsWriteSecond {
  activeStep?: string;
  mapError?: string;
  mapStatus?: boolean;
  isEdit?: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  address?: {
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
  isButtonActive: boolean;
  onClickSecondPrev: () => void;
  onClickSecondNext: () => void;
}

export interface IPropsWriteThird {
  activeStep?: string;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  fileUrls: any;
  isButtonActive: boolean;
  onClickThirdPrev: () => void;
  isEdit?: boolean;
  onClickEditBoard: () => void;
  onClickWriteBoard: () => void;
  data?: Pick<IQuery, "fetchBoard">;
}

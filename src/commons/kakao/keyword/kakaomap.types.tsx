import { ChangeEvent } from "react";

export interface KaoKaoMap {
  lat: any;
  lng: any;
  setMap: any;
  markers: [];
  setInfo: any;
  info: any;
  keyword: string;
  onChangeKeyword: (event: any) => void;
  onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
  // isActive: boolean;
  // isRoadview: boolean;
  // onClickTrrapic: () => void;
  // onClickRoadView: () => void;
  // onErrorGetNearestPanoId?: (target: kakao.maps.Roadview) => void;
  // onPositionChanged?: (target: kakao.maps.Roadview) => void;
}

export interface KaoKeyWord {
  onChangeKeyword: (event: any) => void;
}

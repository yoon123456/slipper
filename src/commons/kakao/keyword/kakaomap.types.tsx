import { ChangeEvent, MouseEvent, VoidFunctionComponent } from "react";
import { Roadview } from "react-kakao-maps-sdk";
import { StringLocale } from "yup/lib/locale";
import { IQuery } from "../../types/generated/types";

export interface KaoKaoMap {
  // onErrorGetNearestPanoId: (target: kakao.maps.Roadview) => void;
  // onChangeKeyword: (event: any) => void;
  onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
  // handleFocus: () => void;
  markerClick: (info: any) => (address: any) => void;
  onclickGeoLocation: () => void;
  onClickTrrapic: () => void;
  onClickRoadView: () => void;
  onClickContent: () => void;
  // onClickCategory: (event: MouseEvent<HTMLImageElement>) => void;
  onCancel: () => void;
  onClickButton: () => void;
  mapStatus?: boolean;
  isOpen: boolean;
  trrapicFlag: boolean;
  lat: any;
  lng: any;
  setMap: any;
  markers: never[];
  setInfo: any;
  info: any;
  geoLat: number;
  geoLng: number;
  btnRef: any;
  isActive: boolean;
  roadViewFlag: boolean;
  address: {
    content: string;
    address_name: string;
    group_name: string;
    group_code: string;
    category_name: string;
    distance: string;
    id: string;
    phone: string;
    place_url: string;
    road_name: string;
    position: {
      lat: string;
      lng: string;
    };
  };
  contentFlag: boolean;
  search: string;
}

export interface KaoKeyWord {
  onChangeKeyword?: (event: any) => void;
  keyword?: string;
  mapStatus?: boolean;
  // data?: Pick<IQuery, "fetchBoardsPage">;
}

export interface ContentProps {
  marker: {
    content: string;
    address_name: string;
    place_url: string;
    phone: string;
    road_name: string;
    group_name: string;
  };
}

export interface MarkerProps {
  markers: never[];
  markerClick: (info: any) => (address: any) => void;
  info: any;
  contentFlag: boolean;
}

export interface KaKaoMapStylesProps {
  mapStatus?: boolean;
}

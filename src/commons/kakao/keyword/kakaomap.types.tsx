import { ChangeEvent, MouseEvent, VoidFunctionComponent } from "react";
import { Roadview } from "react-kakao-maps-sdk";
import { StringLocale } from "yup/lib/locale";

export interface KaoKaoMap {
  onErrorGetNearestPanoId: (target: kakao.maps.Roadview) => void;
  onChangeKeyword: (event: any) => void;
  onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
  handleFocus: () => void;
  markerClick: (info: any) => (address: any) => void;
  onclickGeoLocation: () => void;
  onClickTrrapic: () => void;
  onClickRoadView: () => void;
  onClickContent: () => void;
  onClickCategory: (event: MouseEvent<HTMLImageElement>) => void;
  onCancel: () => void;
  onClickButton: () => void;
  mapStatus: boolean;
  isOpen: boolean;
  trrapicFlag: boolean;
  lat: any;
  lng: any;
  setMap: any;
  markers: [];
  setInfo: any;
  info: any;
  keyword: string;
  geoLat: number;
  geoLng: number;
  btnRef: any;
  isActive: boolean;
  roadViewFlag: boolean;
  address: {
    position: { lat: string; lng: string };
    content: string;
    address_name: string;
    group_code: kakao.maps.services.CategoryGroupCode;
    group_name: string;
    phone: string;
    place_url: string;
    road_name: string;
  };
  contentFlag: boolean;
}

export interface KaoKeyWord {
  onChangeKeyword?: (event: any) => void;
  keyword?: string;
  mapStatus: boolean;
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
  markers: [];
  markerClick: (info: any) => (address: any) => void;
  info: any;
  contentFlag: boolean;
}

export interface KaKaoMapStylesProps {
  mapStatus: boolean;
}

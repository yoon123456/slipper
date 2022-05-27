import { ChangeEvent, LegacyRef, ReactNode } from "react";
import { MapMarkerProps } from "react-kakao-maps-sdk";
import { IQuery } from "../../types/generated/types";

export interface KaoKaoMap {
  onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
  markerClick: (info: any) => (address: any) => void;
  onclickGeoLocation: () => void;
  onClickTrrapic: () => void;
  onClickRoadView: () => void;
  onClickContent: () => void;
  onCancel: () => void;
  onClickButton: () => void;
  mapStatus?: boolean;
  isOpen: boolean;
  trrapicFlag: boolean;
  lat: string;
  lng: string;
  setMap: any;
  markers: never[];
  setInfo: any;
  info: any;
  geoLat: number;
  geoLng: number;
  btnRef: LegacyRef<HTMLButtonElement>;
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
  data?: Pick<IQuery, "fetchBoardsPage">;
  markersLenght: number;
  isActive1: boolean;
  setLevel: (level: number) => void;
  level: number;
}

export interface KaoKeyWord {
  onChangeKeyword?: (event: any) => void;
  keyword?: string;
  mapStatus?: boolean;
  data?: Pick<IQuery, "fetchBoardsPage">;
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
  info: MapMarkerProps;
  contentFlag: boolean;
  data?: Pick<IQuery, "fetchBoardsPage">;
}

export interface KaKaoMapStylesProps {
  mapStatus?: boolean;
}

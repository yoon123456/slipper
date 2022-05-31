import { ChangeEvent, LegacyRef, ReactNode } from "react";
import { IQuery } from "../../types/generated/types";

export interface KaoKaoMap {
  onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
  markerClick: (marker: any) => () => void;
  onclickGeoLocation: () => void;
  onClickTrrapic: () => void;
  onClickRoadView: () => void;
  onClickContent: (marker: any) => () => void;
  onCancel: () => void;
  onClickButton: () => void;
  listRef: LegacyRef<HTMLDivElement> | undefined;
  closeList: boolean;
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
  userContentFlag: boolean;
  contentFlag: boolean;
  search: string;
  data?: Pick<IQuery, "fetchBoardsPage">;
  markersLenght: number;
  isActive1: boolean;
  setLevel: (level: number) => void;
  level: number;

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
}

export interface KaoKeyWord {
  onChangeKeyword?: (event: any) => void;
  keyword?: string;
  mapStatus?: boolean;
  data?: Pick<IQuery, "fetchBoardsPage">;
}

export interface ContentProps {
  marker?: {
    content: string;
    address_name: string;
    place_url: string;
    phone: string;
    road_name: string;
    group_name: string;
  };
  // data?: Pick<IQuery, "fetchBoardsPage">;
  el?: {
    _id: string;
    _source: {
      address: string;
      category: string;
      createdat: string;
      id: string;
      lat: string;
      likecount: number;
      lng: string;
      nickname: string;
      place: string;
      sortdate: number;
      thumbnail: string;
      title: string;
      placephone: string;
      placeurl: string;
    };
  };
}

export interface MarkerProps {
  markers: never[];
  markerClick: (marker: any) => () => void;
  onClickContent: (marker: any) => () => void;
  info: any;
  contentFlag: boolean;
  data?: Pick<IQuery, "fetchBoardsPage">;
  el?: {
    _source: {
      address: string;
      category: string;
      createdat: string;
      id: string;
      lat: string;
      likecount: number;
      lng: string;
      nickname: string;
      place: string;
      sortdate: number;
      thumbnail: string;
      title: string;
      placephone: string;
      placeurl: string;
    };
  };
  userContentFlag: boolean;
}

export interface KaKaoMapStylesProps {
  mapStatus?: boolean;
  roadViewFlag?: boolean;
}

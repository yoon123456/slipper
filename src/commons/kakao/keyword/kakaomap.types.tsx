import { ChangeEvent, Dispatch, LegacyRef, SetStateAction } from "react";
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
  setPosition: (position: undefined) => void;

  position?: {
    lat: number;
    lng: number;
  };

  listRef: LegacyRef<HTMLDivElement> | undefined;
  closeList: boolean;
  mapStatus?: boolean;
  isOpen: boolean;
  trrapicFlag: boolean;
  lat: string;
  lng: string;
  setMap: any;
  markers: never[];
  setInfo: Dispatch<SetStateAction<undefined>>;

  info?: {
    address_name: string;
    category_name: string;
    content: string;
    group_code: string;
    group_name: string;
    phone: string;
    place_url: string;
    position: {
      lat: string;
      lng: string;
    };
    road_name: string;
  };

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

  address?: {
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
  info?: {
    address_name: string;
    category_name: string;
    content: string;
    group_code: string;
    group_name: string;
    phone: string;
    place_url: string;
    position: {
      lat: string;
      lng: string;
    };
    road_name: string;
  };

  contentFlag: boolean;
  data?: Pick<IQuery, "fetchBoardsPage">;
  isActive1: boolean;

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

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
  handleFocus: () => void;
  geoLat: number;
  geoLng: number;
  markerClick: (info: any) => (address: any) => void;
}

export interface KaoKeyWord {
  onChangeKeyword: (event: any) => void;
  keyword: string;
}

export interface ContentProps {
  markers: any;
}

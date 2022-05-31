export interface KaoKaoMap {
  lat: any;
  lng: any;
  isActive: boolean;
  isRoadview: boolean;
  onClickTrrapic: () => void;
  onClickRoadView: () => void;
  onErrorGetNearestPanoId?: (target: kakao.maps.Roadview) => void;
  onPositionChanged?: (target: kakao.maps.Roadview) => void;
  onclickGeoLocation?: () => void;
  setBounds: any;
}

export interface IProsFlag {
  isActive: boolean;
}

export interface RoadViewPorps {
  position: any;
}

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

export interface WeatherProps {
  lat?: number;
  lng?: number;
}

export interface IWeatherOutput {
  clouds: number;
  dew_point: number;
  dt: any | number;
  feels_like: number;
  humidity: number;
  perssure: number;
  sunrise: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: {
    description: string;
    icon: string;
    main: string;
    map(arg0: (el: any, index: any) => JSX.Element): import("react").ReactNode;
  };
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

import { useEffect, useState } from "react";
import MapView from "./map.presenter";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  const [isActive, setIsActive] = useState(false);
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const onClickTrrapic = () => {
    setIsActive(true);
  };
  useEffect(() => {
    const handleSuccess = (pos: any) => {
      const { latitude, longitude } = pos.coords;
      setLat(latitude);
      setLng(longitude);
    };
    const { geolocation } = navigator;
    geolocation.getCurrentPosition(handleSuccess);
  }, []);

  return (
    <MapView
      lat={lat}
      lng={lng}
      isActive={isActive}
      onClickTrrapic={onClickTrrapic}
    />
  );
}

// 10933d05118bfc99d732e83a2814b76a

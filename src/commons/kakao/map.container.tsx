import { useEffect, useState } from "react";
import { RoadViewPorps } from "./map.types";
import MapView from "./map.presenter";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  const [isActive, setIsActive] = useState(false);
  const [isRoadview, setIsRoadview] = useState(false);
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [viewPanoId, setPanoId] = useState();
  const [viewPanoId2, setPanoId2] = useState(0);

  const onClickTrrapic = () => {
    setIsActive(true);
  };

  const onClickRoadView = () => {
    setIsRoadview(true);
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
      isRoadview={isRoadview}
      onClickTrrapic={onClickTrrapic}
      onClickRoadView={onClickRoadView}
    />
  );
}

// 10933d05118bfc99d732e83a2814b76a

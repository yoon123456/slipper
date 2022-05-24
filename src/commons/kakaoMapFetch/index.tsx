import { Map, MapMarker } from "react-kakao-maps-sdk";
import Script from "next/script";
import { useEffect, useState } from "react";

interface IKakaoMapFetch {
  data: any;
}
export default function KakaoMapFetch(props: IKakaoMapFetch) {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const LatLng = () => {
    setLat(Number(props.data?.fetchBoard.lat));
    setLng(Number(props.data?.fetchBoard.lng));
  };

  useEffect(() => {
    LatLng();
  });

  return (
    <>
      <Script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=10933d05118bfc99d732e83a2814b76a&libraries=services&autoload=false"
        strategy="beforeInteractive"
      />
      <Map
        center={{
          lat: lat,
          lng: lng,
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
        level={3}
        // onCreate={props.setMap}
      >
        <MapMarker
          position={{
            lat: lat,
            lng: lng,
          }}
        ></MapMarker>
      </Map>
    </>
  );
}

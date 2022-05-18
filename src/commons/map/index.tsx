import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Roadview from "../map/roadview";
import Keyword from "./keyword";
declare const window: typeof globalThis & {
  kakao: any;
};

const Button = styled.button`
  position: absolute;
  width: 3%;
  height: 3%;
  z-index: 2;
`;

const ButtonView = styled.button`
  position: absolute;
  width: 3%;
  height: 3%;
  left: 3%;
  z-index: 2;
`;

const Div = styled.div`
  display: flex;
  z-index: 2;
`;

export default function KakaoMapPage() {
  const [isActive, setIsActive] = useState(false);

  // const onClickFlag = () => {
  //   setIsActive(true);
  // };

  function locationLoadSuccess(pos: any) {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=10933d05118bfc99d732e83a2814b76a&libraries=services&autoload=false";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById("map");
        const mapOption = {
          center: new window.kakao.maps.LatLng(37.56646, 126.98121), // 지도의 중심좌표
          level: 4, // 지도의 확대 레벨
          mapTypeId: window.kakao.maps.MapTypeId.ROADMAP, // 지도종류
        };

        const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
        map.addOverlayMapTypeId(window.kakao.maps.MapTypeId.TRAFFIC);
        var currentPos = new window.kakao.maps.LatLng(
          pos.coords.latitude, // 현재 경도
          pos.coords.longitude // 경재 위도
        );
        // 지도 이동(기존 위치와 가깝다면 부드럽게 이동)
        map.panTo(currentPos);
        // 마커 생성
        var marker = new window.kakao.maps.Marker({
          position: currentPos,
        });
        // 기존에 마커가 있다면 제거
        marker.setMap(null);
        marker.setMap(map);
      });
    };
  }

  function getCurrentPosBtn() {
    navigator.geolocation.getCurrentPosition(
      locationLoadSuccess,
      locationLoadError
    );

    setIsActive(false);
  }

  function locationLoadError(pos: any) {
    alert("위치 정보를 가져오는데 실패했습니다.");
  }

  // useEffect(() => {
  //   if (!isActive) getCurrentPosBtn();
  // });

  return (
    <Div>
      {/* <Roadview isActive={isActive} setIsActive={setIsActive} /> */}
      <Button type="button" onClick={getCurrentPosBtn}>
        현재위치
      </Button>
      {isActive ? (
        <div
          id="map"
          style={{ width: "0px", height: "400px", display: "block" }}
        ></div>
      ) : (
        <div
          id="map"
          style={{ width: "950px", height: "1060px", display: "block" }}
        ></div>
      )}
    </Div>
  );
}

// 10933d05118bfc99d732e83a2814b76a

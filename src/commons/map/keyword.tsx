import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Roadview from "../map/roadview";
import Head from "next/head";
declare const window: typeof globalThis & {
  kakao: any;
};

export default function KeyWord() {
  const [isActive, setIsActive] = useState(false);
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const Content = () => (
    <div className="overlay_info">
      <a
        href="https://place.map.kakao.com/17600274"
        target="_blank"
        rel="noreferrer"
      >
        <strong>월정리 해수욕장</strong>
      </a>
      <div className="desc">
        <img
          src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/place_thumb.png"
          alt=""
        />
        <span className="address">
          제주특별자치도 제주시 구좌읍 월정리 33-3
        </span>
      </div>
    </div>
  );

  useEffect(() => {
    const handleSuccess = (pos: any) => {
      const { latitude, longitude } = pos.coords;
      setLat(latitude);
      setLng(longitude);
      setIsActive(true);
    };
    const { geolocation } = navigator;
    geolocation.getCurrentPosition(handleSuccess);
    if (isActive) getCurrentPosBtn();
  });

  function locationLoadSuccess(pos: any) {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=10933d05118bfc99d732e83a2814b76a&libraries=services&autoload=false";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById("map"), // 지도를 표시할 div
          mapCenter = new window.kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
          mapOption = {
            center: mapCenter, // 지도의 중심좌표
            level: 4, // 지도의 확대 레벨
            mapTypeId: window.kakao.maps.MapTypeId.ROADMAP, // 지도종류
          };
        console.log(lat, lng);
        const map = new window.kakao.maps.Map(mapContainer, mapOption);
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

        // let content = '<div class="overlay_info">';
        // content +=
        //   '    <a href="https://place.map.kakao.com/17600274" target="_blank"><strong>월정리 해수욕장</strong></a>';
        // content += '    <div class="desc">';
        // content +=
        //   '        <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/place_thumb.png" alt="">';
        // content +=
        //   '        <span class="address">제주특별자치도 제주시 구좌읍 월정리 33-3</span>';
        // content += "    </div>";
        // content += "</div>"; // 지도를 생성합니다

        const position = new window.kakao.maps.LatLng(lat, lng);
        console.log(lat, lng);
        const mapCustomOverlay = new window.kakao.maps.CustomOverlay({
          position: position,
          // content: content,
          xAnchor: 0.5, // 커스텀 오버레이의 x축 위치입니다. 1에 가까울수록 왼쪽에 위치합니다. 기본값은 0.5 입니다
          yAnchor: 1.1, // 커스텀 오버레이의 y축 위치입니다. 1에 가까울수록 위쪽에 위치합니다. 기본값은 0.5 입니다
        });
        mapCustomOverlay.setMap(map);

        const rvContainer = document.getElementById("roadview"); //로드뷰를 표시할 div
        const rv = new window.kakao.maps.Roadview(rvContainer); //로드뷰 객체
        const rvClient = new window.kakao.maps.RoadviewClient(); //좌표로부터 로드뷰 파노ID를 가져올 로드뷰 helper객체
        const rvPosition = new window.kakao.maps.LatLng(lat, lng);
        //지도의 중심좌표와 가까운 로드뷰의 panoId를 추출하여 로드뷰를 띄운다.
        rvClient.getNearestPanoId(mapCenter, 50, function (panoId: any) {
          if (panoId == null) {
            alert("로드뷰 정보가 없는 지역입니다.");
            return;
          } else rv.setPanoId(panoId, position); //panoId와 중심좌표를 통해 로드뷰 실행
        });

        window.kakao.maps.event.addListener(rv, "init", function () {
          // 커스텀 오버레이를 생성합니다
          // console.log(content);
          var rvCustomOverlay = new window.kakao.maps.CustomOverlay({
            position: rvPosition,
            // content: content,
            xAnchor: 0.5, // 커스텀 오버레이의 x축 위치입니다. 1에 가까울수록 왼쪽에 위치합니다. 기본값은 0.5 입니다
            yAnchor: 0.5, // 커스텀 오버레이의 y축 위치입니다. 1에 가까울수록 위쪽에 위치합니다. 기본값은 0.5 입니다
          });

          //rvCustomOverlay.setAltitude(2); //커스텀 오버레이의 고도값을 설정합니다.(로드뷰 화면 중앙이 0입니다)
          rvCustomOverlay.setMap(rv);

          var projection = rv.getProjection(); // viewpoint(화면좌표)값을 추출할 수 있는 projection 객체를 가져옵니다.

          // 커스텀오버레이의 position과 altitude값을 통해 viewpoint값(화면좌표)를 추출합니다.
          var viewpoint = projection.viewpointFromCoords(
            rvCustomOverlay.getPosition(),
            rvCustomOverlay.getAltitude()
          );

          rv.setViewpoint(viewpoint); //커스텀 오버레이를 로드뷰의 가운데에 오도록 로드뷰의 시점을 변화 시킵니다.
        });
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

  return (
    <>
      <div
        id="map"
        style={{ width: "950px", height: "1060px", display: "block" }}
      ></div>

      <div
        id="roadview"
        style={{ width: "950px", height: "1060px", display: "block" }}
      ></div>

      {/* <OverLay className="overlay_info">
      <a
        // href="https://place.map.kakao.com/17600274" // 보드Id를 넘겨줌
        target="_blank"
        rel="noreferrer"
      >
        <strong>월정리 해수욕장</strong>
      </a>
      <div className="desc">
        <span className="address">
          제주특별자치도 제주시 구좌읍 월정리 33-3
        </span>
      </div>
    </OverLay> */}
      {/* {isActive ? (
      <div
        id="map"
        style={{ width: "0px", height: "400px", display: "block" }}
      ></div>
    ) : (
      <div
        id="map"
        style={{ width: "950px", height: "1060px", display: "block" }}
      ></div>
    )} */}
    </>
  );
}

// 10933d05118bfc99d732e83a2814b76a

import styled from "@emotion/styled";
import { useEffect, useState } from "react";
// import { IProsFlag } from "./KaoKao.types";

declare const window: typeof globalThis & {
  kakao: any;
};
const ButtonView = styled.button`
  position: absolute;
  z-index: 2;
  left: 20.5%;
  width: 9%;
`;

const Warpper = styled.div`
  width: 100%;
  position: relative;
`;

const WarpperOut = styled.div`
  position: absolute;
  width: 100%;
`;

export default function Roadview(props: any) {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  useEffect(() => {
    const handleSuccess = (pos: any) => {
      const { latitude, longitude } = pos.coords;
      setLat(latitude);
      setLng(longitude);
    };
    const { geolocation } = navigator;
    geolocation.getCurrentPosition(handleSuccess);
    // document.getElementById("check")?.onclick;
  }, []);

  const viewRoadview = () => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=10933d05118bfc99d732e83a2814b76a&libraries=services&autoload=false";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        //경도 좌표 /** 로드뷰 생성 **/
        const roadviewContainer = document.getElementById("roadview");
        const roadview = new window.kakao.maps.Roadview(roadviewContainer);
        const roadviewClient = new window.kakao.maps.RoadviewClient();
        const position = new window.kakao.maps.LatLng(lat, lng);
        //좌표(position) 정보에서 가장 가까운 로드뷰 정보 출력
        roadviewClient.getNearestPanoId(position, 50, (panoId: any) => {
          if (panoId == null) {
            alert("로드뷰 정보가 없는 지역입니다.");
            return;
          } else roadview.setPanoId(panoId, position);
        });
        //로드뷰 초기화 이벤트 추가(마커 출력 이벤트를 위해 작성)
        window.kakao.maps.event.addListener(roadview, "init", function () {
          //마커 셋팅
          const rMarker = new window.kakao.maps.Marker({
            position: position,
            map: roadview,
          });
          //마커를 로드뷰에 출력
          rMarker.setMap(roadview);
          //마커가 로드뷰의 중앙에 오도록 로드뷰의 viewpoint 조정
          const projection = roadview.getProjection();
          const viewpoint = projection.viewpointFromCoords(
            rMarker.getPosition(),
            rMarker.getAltitude()
          );
          roadview.setViewpoint(viewpoint);
          props.setIsActive(true);
        });
      });
    };
  };

  return (
    <Warpper>
      <WarpperOut>
        <ButtonView id="check" type="button" onClick={viewRoadview}>
          로드뷰
        </ButtonView>

        {props.isActive ? (
          <div
            id="roadview"
            style={{ width: "950px", height: "1060px", display: "block" }}
          ></div>
        ) : (
          <div
            id="roadview"
            style={{ width: "0px", height: "0px", display: "block" }}
          ></div>
        )}
      </WarpperOut>
    </Warpper>
  );
}

// 10933d05118bfc99d732e83a2814b76a

import {
  Map,
  MapMarker,
  MapTypeId,
  MapInfoWindow,
  Roadview,
  CustomOverlayRoadview,
  CustomOverlayMap,
} from "react-kakao-maps-sdk";
import styled from "@emotion/styled";

export const KaKaoMap = styled(Map)``;
export const KakaoMapMarker = styled(MapMarker)``;
export const KakaoMapTypeId = styled(MapTypeId)``;
export const KakaoMapInfoWindow = styled(MapInfoWindow)``;
export const KakaoMapRoadview = styled(Roadview)``;
export const KakaoCustomOverlayRoadview = styled(CustomOverlayRoadview)``;
export const KaKaoWarp = styled.div`
  width: 100%;
  height: 100vh;
`;
export const KaKaoOverLay = styled(CustomOverlayMap)``;

export const MarkerDiv = styled.div`
  /* background-color: red; */
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 9px; */
`;

export const MarkerDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding-left: 9px; */
`;

export const MarkerContent = styled.div`
  width: 100%;
`;
export const MarkerAddress = styled.div`
  width: 100%;
`;

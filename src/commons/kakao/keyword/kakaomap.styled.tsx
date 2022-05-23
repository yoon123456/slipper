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

export const MarkerDiv = styled.div``;

export const MarkerDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid red;
  /* padding-left: 9px; */
`;
export const LocationButton = styled.button`
  width: 8%;
  color: gray;
  font-size: 1rem;
  text-decoration: none;
  text-shadow: 0px 0px 0px #f0f0f0;
  border: none;
  border-radius: 10px;
  background-color: white;
  background: linear-gradient(to bottom, white 5%, #ffffff 100%);
  display: inline-block;
  box-shadow: 3px 3px 7px 0 rgba(0, 0, 0, 0.25),
    -4px -4px 7px 0 rgba(255, 255, 255, 0.3);
  cursor: pointer;
  :hover {
    background: linear-gradient(to bottom, #ffffff 5%, #f0f0f0 100%);
    background-color: #ffffff;
  }
  :active {
    position: relative;
    top: 1px;
  }
`;
export const TrappickButton = styled.button`
  width: 8%;
  color: gray;
  font-size: 1rem;
  text-decoration: none;
  text-shadow: 0px 0px 0px #f0f0f0;
  border: none;
  border-radius: 10px;
  background-color: white;
  background: linear-gradient(to bottom, white 5%, #ffffff 100%);
  display: inline-block;
  box-shadow: 3px 3px 7px 0 rgba(0, 0, 0, 0.25),
    -4px -4px 7px 0 rgba(255, 255, 255, 0.3);
  cursor: pointer;
  :hover {
    background: linear-gradient(to bottom, #ffffff 5%, #f0f0f0 100%);
    background-color: #ffffff;
  }
  :active {
    position: relative;
    top: 1px;
  }
`;
export const RoadButton = styled.button`
  width: 8%;
  color: gray;
  font-size: 1rem;
  text-decoration: none;
  text-shadow: 0px 0px 0px #f0f0f0;
  border: none;
  border-radius: 10px;
  background-color: white;
  background: linear-gradient(to bottom, white 5%, #ffffff 100%);
  display: inline-block;
  box-shadow: 3px 3px 7px 0 rgba(0, 0, 0, 0.25),
    -4px -4px 7px 0 rgba(255, 255, 255, 0.3);
  cursor: pointer;
  :hover {
    background: linear-gradient(to bottom, #ffffff 5%, #f0f0f0 100%);
    background-color: #ffffff;
  }
  :active {
    position: relative;
    top: 1px;
  }
`;
export const WarrapOut = styled.div`
  z-index: 2;
`;
export const Category = styled.div`
  width: 40.5%;
  position: absolute;
  z-index: 10;
`;
export const Search = styled.input`
  z-index: 2;
  width: 25%;
  height: 30px;
  background-color: #ffffff;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 2px 4px 0px #e1e1e1;
  outline: none;
  font-size: 1.3rem;
`;
export const MarkerContent = styled.div`
  width: 100%;
`;
export const MarkerAddress = styled.div`
  width: 100%;
`;
export const MarkerUrl = styled.div`
  width: 100%;
`;
export const BtnWarrp = styled.div`
  width: 50%;
  float: right;
`;
export const KaoKaoMapTypeId = styled(MapTypeId)``;
export const CaffeBtn = styled.img`
  width: 13%;
  float: right;
`;
export const HospitalBtn = styled.img`
  width: 13%;
  float: right;
`;
export const StoreBtn = styled.img`
  width: 13%;
  float: right;
`;
export const SchoolBtn = styled.img`
  width: 13%;
  float: right;
`;
export const FoodBtn = styled.img`
  width: 13%;
  float: right;
`;
export const MartBtn = styled.img`
  width: 13%;
  float: right;
`;
export const PublicBtn = styled.img`
  width: 13%;
  float: right;
`;
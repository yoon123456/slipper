import Script from "next/script";
import { KaoKaoMap } from "../keyword/kakaomap.types";
import * as S from "./kakaomap.styled";
import Contents from "../contents/content";
import KakaomapMarks from "./kakaomapmarkers";
export default function KakaomapPresenter(props: KaoKaoMap) {
  return (
    <>
      <S.WarrapOut>
        <Script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=10933d05118bfc99d732e83a2814b76a&libraries=services&autoload=false"
          strategy="beforeInteractive"
        />

        <S.KaKaoWarp>
          <S.Category>
            <S.Search type="text" onChange={props.onChangeSearchbar} />
            <S.LocationButton
              onClick={props.onclickGeoLocation}
              ref={props.btnRef}
            >
              현재위치
            </S.LocationButton>
            <S.TrappickButton onClick={props.onClickTrrapic}>
              교통정보
            </S.TrappickButton>
            <S.RoadButton onClick={props.onClickRoadView}>로드뷰</S.RoadButton>
            <S.BtnWarrp>
              <S.CaffeBtn src="https://img.icons8.com/external-nawicon-outline-color-nawicon/64/000000/external-coffee-shop-location-nawicon-outline-color-nawicon.png" />
              <S.HospitalBtn src="https://img.icons8.com/external-nawicon-outline-color-nawicon/64/000000/external-hospital-location-nawicon-outline-color-nawicon.png" />
              <S.SchoolBtn src="https://img.icons8.com/external-nawicon-outline-color-nawicon/64/000000/external-school-location-nawicon-outline-color-nawicon.png" />
              <S.StoreBtn src="https://img.icons8.com/external-nawicon-outline-color-nawicon/64/000000/external-shop-location-nawicon-outline-color-nawicon.png" />
              <S.MartBtn src="https://img.icons8.com/external-nawicon-outline-color-nawicon/64/000000/external-supermarket-location-nawicon-outline-color-nawicon.png" />
              <S.FoodBtn src="https://img.icons8.com/external-nawicon-outline-color-nawicon/64/000000/external-restaurant-location-nawicon-outline-color-nawicon.png" />
              <S.PublicBtn src="https://img.icons8.com/external-nawicon-outline-color-nawicon/64/000000/external-park-location-nawicon-outline-color-nawicon.png" />
            </S.BtnWarrp>
          </S.Category>

          <S.KaKaoMap // 로드뷰를 표시할 Container
            center={{
              lat: props.geoLat,
              lng: props.geoLng,
            }}
            style={{
              width: "100%",
              height: "100%",
            }}
            level={3}
            onCreate={props.setMap}
          >
            <KakaomapMarks
              markers={props.markers}
              markerClick={props.markerClick}
              info={props.info}
              contentFlag={props.contentFlag}
            />

            <S.KakaoMapMarker
              position={{ lat: props.geoLat, lng: props.geoLng }}
            ></S.KakaoMapMarker>
            {props.trrapicFlag ? (
              <S.KaoKaoMapTypeId type={kakao.maps.MapTypeId.TRAFFIC} />
            ) : (
              <div></div>
            )}
            {props.roadViewFlag ? (
              <S.KakaoMapRoadview // 로드뷰를 표시할 Container
                position={{
                  // 지도의 중심좌표
                  lat: Number(props.address.position.lat),
                  lng: Number(props.address.position.lng),
                  radius: 50,
                }}
                style={{
                  width: "100%",
                  height: "50%",
                }}
                onErrorGetNearestPanoId={props.onErrorGetNearestPanoId}
              >
                <S.KakaoCustomOverlayRoadview
                  position={{
                    lat: props.lat,
                    lng: props.lng,
                  }}
                  isFocus={true}
                  xAnchor={0.5}
                  yAnchor={0.5}
                >
                  {/* <Contents /> */}
                </S.KakaoCustomOverlayRoadview>
              </S.KakaoMapRoadview>
            ) : (
              <div></div>
            )}
          </S.KaKaoMap>
        </S.KaKaoWarp>
      </S.WarrapOut>
    </>
  );
}

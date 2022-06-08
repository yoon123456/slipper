import { Modal } from "antd";
import Script from "next/script";
import { KaoKaoMap } from "../keyword/kakaomap.types";
import * as S from "./kakaomap.styled";
import KakaomapMarks from "./kakaomapmarkers";
import { v4 as uuidv4 } from "uuid";
import { ZoomControl } from "react-kakao-maps-sdk";
import Logo from "../../logo";
import WeatherAppleCation from "../weather/weather";
export default function KakaomapPresenter(props: KaoKaoMap) {
  return (
    <>
      <Script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=10933d05118bfc99d732e83a2814b76a&libraries=services&autoload=false"
        strategy="beforeInteractive"
      />
      <S.WeatherBox>
        <WeatherAppleCation lat={props.geoLat} lng={props.geoLng} />
      </S.WeatherBox>
      {props.roadViewFlag && (
        <>
          {props.address?.position.lat ? (
            <>
              <S.RoadButton type="button" onClick={props.onClickRoadView}>
                로드뷰
              </S.RoadButton>
              <S.KakaoMapRoadview // 로드뷰를 표시할 Container
                position={{
                  // 지도의 중심좌표
                  lat: Number(props.address?.position.lat),
                  lng: Number(props.address?.position.lng),
                  radius: 50,
                }}
                style={{
                  width: "100%",
                  height: "30%",
                }}
              >
                <S.KakaoCustomOverlayRoadview
                  position={{
                    lat: Number(props.lat),
                    lng: Number(props.lng),
                  }}
                  isFocus={true}
                  xAnchor={0.5}
                  yAnchor={0.5}
                ></S.KakaoCustomOverlayRoadview>
              </S.KakaoMapRoadview>{" "}
            </>
          ) : (
            <>
              <Logo />
            </>
          )}
        </>
      )}

      <S.WarrapOut className="content" ref={props.listRef}>
        <S.KaKaoWarp
          mapStatus={props.mapStatus}
          roadViewFlag={props.roadViewFlag}
        >
          {props.isActive1 && (
            <S.SerchLength>
              {props.search}으로 검색된 결과 총 {props.markersLenght} 건입니다{" "}
            </S.SerchLength>
          )}
          <S.Category>
            {props.mapStatus && (
              <S.Search
                type="text"
                onChange={props.onChangeSearchbar}
                onKeyUp={(e: any) => e.keyCode === 13}
              />
            )}
            <S.SearchBtn
              type="submit"
              onClick={props.onClickButton}
              ref={props.btnRef}
            ></S.SearchBtn>
            <S.CategorySearch>
              <S.LocationButton
                type="button"
                onClick={props.onclickGeoLocation}
                ref={props.btnRef}
              >
                현재위치
              </S.LocationButton>
              {!props.mapStatus && (
                <>
                  <S.TrappickButton
                    type="button"
                    onClick={props.onClickTrrapic}
                  >
                    교통정보
                  </S.TrappickButton>
                  <S.RoadButton type="button" onClick={props.onClickRoadView}>
                    로드뷰
                  </S.RoadButton>
                </>
              )}
            </S.CategorySearch>
          </S.Category>
          <S.KaKaoMap
            center={{
              lat: props.geoLat,
              lng: props.geoLng,
            }}
            style={{
              width: "100%",
              height: "100%",
            }}
            level={4}
            onZoomChanged={(map) => props.setLevel(map.getLevel())}
            onCreate={props.setMap}
          >
            <ZoomControl />

            <KakaomapMarks
              key={uuidv4()}
              markers={props.markers}
              markerClick={props.markerClick}
              info={props.info}
              contentFlag={props.contentFlag}
              data={props.data}
              onClickContent={props.onClickContent}
              userContentFlag={props.userContentFlag}
              isActive1={props.isActive1}
            />

            <S.KakaoMapMarker
              position={{ lat: props.geoLat, lng: props.geoLng }}
              image={{
                src: "https://media.giphy.com/media/rcSLJHmBdAMfRJ67bs/giphy.gif",
                size: { width: 50, height: 55 },
              }}
            ></S.KakaoMapMarker>
            {props.trrapicFlag ? (
              <S.KaoKaoMapTypeId type={kakao.maps.MapTypeId.TRAFFIC} />
            ) : (
              <div></div>
            )}
          </S.KaKaoMap>
        </S.KaKaoWarp>
      </S.WarrapOut>
    </>
  );
}
{
  /* <S.BtnWarrp>
              <S.CaffeBtn
                id="CE7"
                onClick={props.onClickCategory}
                src="/image/caffe.png"
              />
              <S.HospitalBtn
                id="HP8"
                onClick={props.onClickCategory}
                src="/image/hospital.png"
              />
              <S.SchoolBtn
                id="SC4"
                onClick={props.onClickCategory}
                src="/image/school.png"
              />
              <S.StoreBtn
                id="CS2"
                onClick={props.onClickCategory}
                src="/image/store.png"
              />
              <S.MartBtn
                id="MT1"
                onClick={props.onClickCategory}
                src="/image/mart.png"
              />
              <S.FoodBtn
                id="FD6"
                onClick={props.onClickCategory}
                src="/image/food.png"
              />
              <S.PublicBtn
                id="PO3"
                onClick={props.onClickCategory}
                src="/image/publicTown.png"
              />
              <S.BankBtn
                id="BK9"
                onClick={props.onClickCategory}
                src="/image/bank.png"
              />
            </S.BtnWarrp> */
}

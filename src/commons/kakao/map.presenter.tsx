import React, { useState } from "react";
import Script from "next/script";
import { KaoKaoMap } from "./map.types";
import * as S from "./map.styled";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import Contents from "./contents/content";

export default function MapView(props: KaoKaoMap) {
  return (
    <>
      <Script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=10933d05118bfc99d732e83a2814b76a&libraries=services&autoload=false"
        strategy="beforeInteractive"
      />
      <S.War>
        {/* <S.KakaoMap // 지도를 표시할 Container
          center={{
            // 지도의 중심좌표
            lat: props.lat,
            lng: props.lng,
          }}
          style={{
            // 지도의 크기
            width: "100%",
            height: "50%",
          }}
          level={3} // 지도의 확대 레벨
        >
          <S.KaoKaoMarker
            position={{ lat: props.lat, lng: props.lng }}
            image={{
              src: "/image/logo.png",
              size: { width: 50, height: 30 },
            }}
          ></S.KaoKaoMarker>
          <CustomOverlayMap
            position={{
              lat: props.lat,
              lng: props.lng,
            }}
            xAnchor={0.5}
            yAnchor={1.1}
          >
            {/* <Contents /> */}
        {/* </CustomOverlayMap>
          {props.isActive ? (
            <S.KaoKaoMapTypeId type={kakao.maps.MapTypeId.TRAFFIC} />
          ) : (
            <div></div>
          )}
          <button onClick={props.onClickTrrapic}>교통정보</button>
          <button onClick={props.onClickRoadView}>로드뷰</button>
          <button onClick={props.onclickGeoLocation}>현재위치</button>
        </S.KakaoMap> } */}

        {props.isRoadview ? (
          <S.kaoKaoRoadview // 로드뷰를 표시할 Container
            position={{
              // 지도의 중심좌표
              lat: props.lat,
              lng: props.lng,
              radius: 50,
            }}
            style={{
              width: "100%",
              height: "50%",
            }}
            onErrorGetNearestPanoId={props.onErrorGetNearestPanoId}
          >
            <S.kaoKaoCustomOverlayRoadview
              position={{
                lat: props.lat,
                lng: props.lng,
              }}
              isFocus={true}
              xAnchor={0.5}
              yAnchor={0.5}
            >
              {/* <Contents /> */}
            </S.kaoKaoCustomOverlayRoadview>
          </S.kaoKaoRoadview>
        ) : (
          <div></div>
        )}
      </S.War>
    </>
  );
}

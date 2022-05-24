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

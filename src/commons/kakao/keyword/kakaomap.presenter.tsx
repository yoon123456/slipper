import Script from "next/script";
import { KaoKaoMap } from "../keyword/kakaomap.types";
import * as S from "./kakaomap.styled";
import Contents from "../contents/content";
export default function KakaomapPresenter(props: KaoKaoMap) {
  return (
    <>
      <input type="text" onChange={props.onChangeSearchbar} />
      <Script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=10933d05118bfc99d732e83a2814b76a&libraries=services&autoload=false"
        strategy="beforeInteractive"
      />
      <S.KaKaoWarp>
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
          {props.markers.map((marker: any) => (
            <>
              <S.KakaoMapMarker
                key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
                position={marker.position}
                onClick={props.markerClick(marker)}
                infoWindowOptions={{
                  style: { backgroundColor: "red", width: "200px" },
                }}
              >
                {props.info && props.info.content === marker.content && (
                  <S.MarkerDiv>
                    <S.MarkerDiv2>
                      <S.MarkerContent style={{ color: "" }}>
                        {/* {marker.content} */}
                      </S.MarkerContent>
                      <S.MarkerAddress style={{ color: "" }}>
                        {/* {marker.address_name} */}
                      </S.MarkerAddress>
                    </S.MarkerDiv2>
                  </S.MarkerDiv>
                )}
              </S.KakaoMapMarker>
              <S.KaKaoOverLay
                position={marker.position}
                xAnchor={0.5}
                yAnchor={2.3}
              >
                <Contents markers={props.markers} />
              </S.KaKaoOverLay>
            </>
          ))}

          <S.KakaoMapMarker
            position={{ lat: props.geoLat, lng: props.geoLng }}
          ></S.KakaoMapMarker>
        </S.KaKaoMap>
      </S.KaKaoWarp>
    </>
  );
}

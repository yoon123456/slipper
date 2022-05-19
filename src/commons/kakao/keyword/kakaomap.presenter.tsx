import Search from "antd/lib/transfer/search";
import Script from "next/script";
import { KaoKaoMap } from "../keyword/kakaomap.types";
import * as S from "./kakaomap.styled";
export default function KakaomapPresenter(props: KaoKaoMap) {
  return (
    <>
      <input type="text" onChange={props.onChangeSearchbar} />
      <button type="submit">검색</button>
      <Script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=10933d05118bfc99d732e83a2814b76a&libraries=services&autoload=false"
        strategy="beforeInteractive"
      />
      <S.KaKaoWarp>
        <S.KaKaoMap // 로드뷰를 표시할 Container
          center={{
            lat: 37.566826,
            lng: 126.9786567,
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
          level={3}
          onCreate={props.setMap}
        >
          {props.markers.map((marker: any) => (
            <S.KakaoMapMarker
              key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
              position={marker.position}
              onClick={() => props.setInfo(marker)}
            >
              {props.info && props.info.content === marker.content && (
                <div style={{ color: "#000" }}>{marker.content}</div>
              )}
            </S.KakaoMapMarker>
          ))}
        </S.KaKaoMap>
      </S.KaKaoWarp>
    </>
  );
}

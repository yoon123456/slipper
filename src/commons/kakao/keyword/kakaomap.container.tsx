import _ from "lodash";
import Script from "next/script";
import { ChangeEvent, useEffect, useState } from "react";
import KakaomapPresenter from "./kakaomap.presenter";
import { KaoKeyWord } from "./kakaomap.types";

export default function KaKaoMapContainer(props: KaoKeyWord) {
  const [info, setInfo] = useState();
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();
  const [keyword, setKeyword] = useState("");
  const getDebounce = _.debounce((data: string) => {
    props.onChangeKeyword(data);
  }, 200);

  function onChangeSearchbar(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
    setKeyword(event.target.value);
  }
  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();
    const ss = keyword.replaceAll(keyword, `${keyword}`);
    ps.keywordSearch(ss, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];
        for (var i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          // @ts-ignore~
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          setLat(data[i].y);
          setLng(data[i].x);
        }
        setMarkers(markers);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    });
  }, [map]);

  return (
    <KakaomapPresenter
      lat={lat}
      lng={lng}
      setMap={setMap}
      markers={markers}
      onChangeSearchbar={onChangeSearchbar}
      info={info}
      setInfo={setInfo}
    />
  );
}

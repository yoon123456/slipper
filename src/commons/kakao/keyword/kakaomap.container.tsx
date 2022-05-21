import _ from "lodash";
import { ChangeEvent, useEffect, useState } from "react";
import KakaomapPresenter from "./kakaomap.presenter";
import { KaoKeyWord } from "./kakaomap.types";
import { useRecoilState } from "recoil";
import { addressName } from "../../store/index";
import { kakaoAddress } from "../../store/kakaounit";
import { string } from "yup";

export default function KaKaoMapContainer(props: KaoKeyWord) {
  const [info, setInfo] = useState();
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [geoLat, setgeoLat] = useState(0);
  const [geoLng, setgeoLng] = useState(0);
  const [address, setAddress] = useRecoilState(kakaoAddress);
  let aaa: string[] = [];
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();
  const [keyword, setKeyword] = useState("");
  const [isActive, setIsActive] = useState(false);

  // const inputRef = useRef<HTMLInputElement>(null);
  // const address = [];
  const getDebounce = _.debounce((data: string) => {
    props.onChangeKeyword(data);
    setIsActive((prev) => !prev);
  }, 1500);

  function onChangeSearchbar(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
    setKeyword(props.keyword);
  }

  const markerClick = (marker: any) => () => {
    setAddress(marker);
    setInfo(marker);
    console.log(marker, 12312412412412);
  };

  useEffect(() => {
    const handleSuccess = (pos: any) => {
      const { latitude, longitude } = pos.coords;
      setgeoLat(latitude);
      setgeoLng(longitude);
    };

    const { geolocation } = navigator;
    geolocation.getCurrentPosition(handleSuccess);
  }, []);

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(props.keyword, (data, status, _pagination) => {
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
            address_name: data[i].address_name,
            group_code: data[i].category_group_code,
            group_name: data[i].category_group_name,
            phone: data[i].phone,
            place_url: data[i].place_url,
            road_name: data[i].road_address_name,
          });
          // @ts-ignore~
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          setLat(data[i].y);
          setLng(data[i].x);
        }
        setMarkers(markers);
        map.setBounds(bounds);
      }
    });
  }, [map, isActive]);

  return (
    <KakaomapPresenter
      lat={lat}
      lng={lng}
      geoLat={geoLat}
      geoLng={geoLng}
      setMap={setMap}
      markers={markers}
      onChangeSearchbar={onChangeSearchbar}
      info={info}
      markerClick={markerClick}
      // markerClick={markerClick}
      // onChange={onChange}
      setInfo={setInfo}
      keyword={props.keyword}
    />
  );
}

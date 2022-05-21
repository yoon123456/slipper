import _ from "lodash";
import { ChangeEvent, useEffect, useState } from "react";
import KakaomapPresenter from "./kakaomap.presenter";
import { KaoKeyWord } from "./kakaomap.types";
import { useRecoilState } from "recoil";
import { addressName } from "../../store";
export default function KaKaoMapContainer(props: KaoKeyWord) {
  const [info, setInfo] = useState();
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [geoLat, setgeoLat] = useState(0);
  const [geoLng, setgeoLng] = useState(0);
  const [address, setAddress] = useRecoilState(addressName);
  // const [address, setAddress] = useState([]);
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
      console.log(data);
      setAddress(data);
      console.log(address);
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();
        var coffeePositions = [];
        let markers = [];
        for (var i = 0; i < data.length; i++) {
          // @ts-ignore
          coffeePositions = new kakao.maps.LatLng(data[i].y, data[i].x);
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          // address.push(data[i].place_name);
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
      // onChange={onChange}
      setInfo={setInfo}
      keyword={props.keyword}
    />
  );
}

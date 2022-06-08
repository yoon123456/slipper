import _ from "lodash";
import { ChangeEvent, useEffect, useState, useRef } from "react";
import KakaomapPresenter from "./kakaomap.presenter";
import { KaoKeyWord } from "./kakaomap.types";
import { useRecoilState } from "recoil";
import { kakaoAddress, resetAdress } from "../../store/kakaounit";
import { SearchState, SearchBarIsActiveState } from "../../store/index";
import { KaoKaoMap } from "../map.types";

export default function KaKaoMapContainer(props: KaoKeyWord) {
  const [info, setInfo] = useState();
  const [lat, setLat] = useState<string>("");
  const [lng, setLng] = useState<string>("");
  const [markers, setMarkers] = useState<[]>([]);
  const [geoLat, setgeoLat] = useState<number>(0);
  const [geoLng, setgeoLng] = useState<number>(0);
  const [level, setLevel] = useState<number>(0);
  const [map, setMap] = useState<KaoKaoMap>();
  const [, setUserAddress] = useState();
  const [position, setPosition] = useState();

  const [address, setAddress] = useRecoilState(kakaoAddress);
  const [adressReset] = useRecoilState(resetAdress);
  const [search, setSearch] = useRecoilState(SearchState);
  const [isActive1, setIsActive1] = useRecoilState(SearchBarIsActiveState);

  const [isActive, setIsActive] = useState<boolean>(false);
  const [roadViewFlag, setroadViewFlag] = useState<boolean>(false);
  const [trrapicFlag, setTrrapicFlag] = useState<boolean>(false);
  const [contentFlag, setContentFlag] = useState<boolean>(false);
  const [userContentFlag, setUserContentFlag] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [closeList, setCloseList] = useState<boolean>(false);

  const btnRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const getDebounce = _.debounce((data: string) => {
    setIsActive((prev) => !prev);
  }, 1500);

  function onChangeSearchbar(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
    setSearch(event.target.value);
  }

  const foldList = () => {
    if (!listRef || !listRef.current) {
      // useRef 변수가 비었을 때
      return; // 그냥 리턴하도록 예외처리를 해주자
    }
    const style = listRef.current.style; // 접근할 DOM 요소의 스타일 속성을 미리 선언해둔다.
    if (closeList) {
      // closeAllList 상태변수가 true 일 때
      style.maxHeight = "500px"; // maxHeight 는 0이 되고 접힌다.
    } else if (!closeList) {
      // closeAllList 상태변수가 false 면
      style.maxHeight = `${listRef.current.scrollHeight}px`; // maxHeight = scroll 길이가 되고 메뉴가 열린다.
    }
    setCloseList(!closeList); // 클릭할 때마다 상태를 반대로 바꾼다.
  };

  const onCancel = () => {
    setIsOpen(true);
  };

  const onClickButton = () => {
    setIsActive1((prev) => !prev);
  };

  const onClickTrrapic = () => {
    setTrrapicFlag((prev) => !prev);
    setroadViewFlag(false);
  };

  const onClickContent = (marker: any) => () => {
    setUserAddress(marker);
    setUserContentFlag((prev) => !prev);
    setContentFlag(false);
    setInfo(marker);
  };

  const onClickRoadView = () => {
    setroadViewFlag((prev) => !prev);
    foldList();
  };

  const markerClick = (marker: any) => () => {
    setAddress(marker);
    setInfo(marker);
    setContentFlag((prev) => !prev);
    setUserContentFlag(false);
  };

  const onclickGeoLocation = () => {
    const handleSuccess = (pos: any) => {
      const { latitude, longitude } = pos.coords;
      setgeoLat(latitude);
      setgeoLng(longitude);
    };
    const { geolocation } = navigator;
    geolocation.getCurrentPosition(handleSuccess);
    setroadViewFlag(false);
  };

  useEffect(() => {
    btnRef.current?.click();
    if (!map) return;
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(search, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [] as any;
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
            category_name: data[i].category_name,
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
    //등록페이지 상태값 확인후 초기화
    if (props.mapStatus) {
      setAddress(adressReset);
      setSearch("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, isActive1]);

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
      setInfo={setInfo}
      onclickGeoLocation={onclickGeoLocation}
      btnRef={btnRef}
      isActive={isActive}
      onClickTrrapic={onClickTrrapic}
      roadViewFlag={roadViewFlag}
      onClickRoadView={onClickRoadView}
      address={address}
      trrapicFlag={trrapicFlag}
      contentFlag={contentFlag}
      onClickContent={onClickContent}
      onCancel={onCancel}
      isOpen={isOpen}
      onClickButton={onClickButton}
      search={search}
      mapStatus={props.mapStatus}
      data={props.data}
      markersLenght={markers.length}
      isActive1={isActive1}
      setLevel={setLevel}
      level={level}
      userContentFlag={userContentFlag}
      closeList={closeList}
      listRef={listRef}
      setPosition={setPosition}
      position={position}
    />
  );
}

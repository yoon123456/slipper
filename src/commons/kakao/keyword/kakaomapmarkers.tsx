import Script from "next/script";
import { MarkerProps } from "../keyword/kakaomap.types";
import Contents from "../contents/content";
import * as S from "./kakaomap.styled";

export default function KakaomapMarks(props: MarkerProps) {
  return (
    <>
      {props.markers.map((marker: any) => (
        <>
          {marker.group_code === "FD6" &&
            props.category === "FD6" &&
            props.categoryFlag && (
              <S.KakaoMapMarker
                key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
                position={marker.position}
                onClick={props.markerClick(marker)}
                image={{
                  src: "/image/food.png",
                  size: { width: 40, height: 50 },
                }}
              >
                {props.info &&
                  props.info.content === marker.content &&
                  props.contentFlag && <Contents marker={marker} />}
              </S.KakaoMapMarker>
            )}
          {marker.group_code === "SC4" &&
            props.categoryFlag &&
            props.category === "SC4" && (
              <S.KakaoMapMarker
                key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
                position={marker.position}
                onClick={props.markerClick(marker)}
                image={{
                  src: "/image/school.png",
                  size: { width: 40, height: 50 },
                }}
              >
                {props.info &&
                  props.info.content === marker.content &&
                  props.contentFlag && <Contents marker={marker} />}
              </S.KakaoMapMarker>
            )}
          {marker.group_code === "HP8" &&
            props.categoryFlag &&
            props.category === "HP8" && (
              <S.KakaoMapMarker
                key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
                position={marker.position}
                onClick={props.markerClick(marker)}
                image={{
                  src: "/image/hospital.png",
                  size: { width: 40, height: 50 },
                }}
              >
                {props.info &&
                  props.info.content === marker.content &&
                  props.contentFlag && <Contents marker={marker} />}
              </S.KakaoMapMarker>
            )}
          {marker.group_code === "MT1" &&
            props.categoryFlag &&
            props.category === "MT1" && (
              <S.KakaoMapMarker
                key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
                position={marker.position}
                onClick={props.markerClick(marker)}
                image={{
                  src: "/image/mart.png",
                  size: { width: 40, height: 50 },
                }}
              >
                {props.info &&
                  props.info.content === marker.content &&
                  props.contentFlag && <Contents marker={marker} />}
              </S.KakaoMapMarker>
            )}
          {marker.group_code === "OL7" &&
            props.categoryFlag &&
            props.category === "OL7" && (
              <S.KakaoMapMarker
                key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
                position={marker.position}
                onClick={props.markerClick(marker)}
                image={{
                  src: "https://img.icons8.com/external-nawicon-outline-color-nawicon/64/000000/external-gas-station-location-nawicon-outline-color-nawicon.png",
                  size: { width: 40, height: 40 },
                }}
              >
                {props.info &&
                  props.info.content === marker.content &&
                  props.contentFlag && <Contents marker={marker} />}
              </S.KakaoMapMarker>
            )}
          {marker.group_code === "CE7" &&
            props.categoryFlag &&
            props.category === "CE7" && (
              <S.KakaoMapMarker
                key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
                position={marker.position}
                onClick={props.markerClick(marker)}
                image={{
                  src: "/image/caffe.png",
                  size: { width: 40, height: 50 },
                }}
              >
                {props.info &&
                  props.info.content === marker.content &&
                  props.contentFlag && <Contents marker={marker} />}
              </S.KakaoMapMarker>
            )}
          {marker.group_code === "BK9" &&
            props.categoryFlag &&
            props.category === "BK9" && (
              <S.KakaoMapMarker
                key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
                position={marker.position}
                onClick={props.markerClick(marker)}
                image={{
                  src: "/image/bank.png",
                  size: { width: 40, height: 50 },
                }}
              >
                {props.info &&
                  props.info.content === marker.content &&
                  props.contentFlag && <Contents marker={marker} />}
              </S.KakaoMapMarker>
            )}
          {marker.group_code === "SW8" &&
            props.categoryFlag &&
            props.category === "SW8" && (
              <S.KakaoMapMarker
                key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
                position={marker.position}
                onClick={props.markerClick(marker)}
                image={{
                  src: "https://img.icons8.com/external-nawicon-outline-color-nawicon/64/000000/external-train-location-nawicon-outline-color-nawicon.png",
                  size: { width: 40, height: 40 },
                }}
              >
                {props.info &&
                  props.info.content === marker.content &&
                  props.contentFlag && <Contents marker={marker} />}
              </S.KakaoMapMarker>
            )}
          {marker.group_code === "PK6" &&
            props.categoryFlag &&
            props.category === "PK6" && (
              <S.KakaoMapMarker
                key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
                position={marker.position}
                onClick={props.markerClick(marker)}
                image={{
                  src: "https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-parking-location-pins-soft-fill-soft-fill-juicy-fish.png",
                  size: { width: 40, height: 40 },
                }}
              >
                {props.info &&
                  props.info.content === marker.content &&
                  props.contentFlag && <Contents marker={marker} />}
              </S.KakaoMapMarker>
            )}
          {marker.group_code === "CS2" &&
            props.categoryFlag &&
            props.category === "CS2" && (
              <S.KakaoMapMarker
                key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
                position={marker.position}
                onClick={props.markerClick(marker)}
                image={{
                  src: "https://img.icons8.com/external-nawicon-outline-color-nawicon/64/000000/external-shop-location-nawicon-outline-color-nawicon.png",
                  size: { width: 40, height: 40 },
                }}
              >
                {props.info &&
                  props.info.content === marker.content &&
                  props.contentFlag && <Contents marker={marker} />}
              </S.KakaoMapMarker>
            )}
          {marker.group_code === "PS3" &&
            props.categoryFlag &&
            props.category === "PS3" && (
              <S.KakaoMapMarker
                key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
                position={marker.position}
                onClick={props.markerClick(marker)}
                image={{
                  src: "https://img.icons8.com/external-nawicon-outline-color-nawicon/64/000000/external-school-location-nawicon-outline-color-nawicon.png",
                  size: { width: 40, height: 40 },
                }}
              >
                {props.info &&
                  props.info.content === marker.content &&
                  props.contentFlag && <Contents marker={marker} />}
              </S.KakaoMapMarker>
            )}
          {marker.group_code === "AC5" &&
            props.categoryFlag &&
            props.category === "AC5" && (
              <S.KakaoMapMarker
                key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
                position={marker.position}
                onClick={props.markerClick(marker)}
                image={{
                  src: "https://img.icons8.com/external-nawicon-outline-color-nawicon/64/000000/external-education-location-nawicon-outline-color-nawicon.png",
                  size: { width: 40, height: 40 },
                }}
              >
                {props.info &&
                  props.info.content === marker.content &&
                  props.contentFlag && <Contents marker={marker} />}
              </S.KakaoMapMarker>
            )}
          {marker.group_code === "CT1" &&
            props.categoryFlag &&
            props.category === "CT1" && (
              <S.KakaoMapMarker
                key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
                position={marker.position}
                onClick={props.markerClick(marker)}
                image={{
                  // src: "https://img.icons8.com/external-nawicon-outline-color-nawicon/64/000000/external-camera-location-nawicon-outline-color-nawicon.png",
                  src: "/image/publicTown.png",
                  size: { width: 40, height: 40 },
                }}
              >
                {props.info &&
                  props.info.content === marker.content &&
                  props.contentFlag && <Contents marker={marker} />}
              </S.KakaoMapMarker>
            )}
          {marker.group_code === "AG2" &&
            props.categoryFlag &&
            props.category === "AG2" && (
              <S.KakaoMapMarker
                key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
                position={marker.position}
                onClick={props.markerClick(marker)}
                image={{
                  src: "https://img.icons8.com/external-nawicon-outline-color-nawicon/64/000000/external-home-location-nawicon-outline-color-nawicon.png",

                  size: { width: 40, height: 40 },
                }}
              >
                {props.info &&
                  props.info.content === marker.content &&
                  props.contentFlag && <Contents marker={marker} />}
              </S.KakaoMapMarker>
            )}
          {marker.group_code === "PO3" &&
            props.categoryFlag &&
            props.category === "PO3" && (
              <S.KakaoMapMarker
                key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
                position={marker.position}
                onClick={props.markerClick(marker)}
                image={{
                  // src: "https://img.icons8.com/external-nawicon-outline-color-nawicon/64/000000/external-park-location-nawicon-outline-color-nawicon.png",
                  src: "/image/publicTown.png",
                  size: { width: 40, height: 50 },
                }}
              >
                {props.info &&
                  props.info.content === marker.content &&
                  props.contentFlag && <Contents marker={marker} />}
              </S.KakaoMapMarker>
            )}
          {marker.group_code === "AT4" &&
            props.categoryFlag &&
            props.category === "AT4" && (
              <S.KakaoMapMarker
                key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
                position={marker.position}
                onClick={props.markerClick(marker)}
                image={{
                  src: "https://img.icons8.com/external-nawicon-outline-color-nawicon/64/000000/external-camera-location-nawicon-outline-color-nawicon.png",
                  // src: "/image/publicTown.png",
                  size: { width: 40, height: 40 },
                }}
              >
                {props.info &&
                  props.info.content === marker.content &&
                  props.contentFlag && <Contents marker={marker} />}
              </S.KakaoMapMarker>
            )}
          {marker.group_code === "AD5" &&
            props.categoryFlag &&
            props.category === "AD5" && (
              <S.KakaoMapMarker
                key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
                position={marker.position}
                onClick={props.markerClick(marker)}
                image={{
                  src: "https://img.icons8.com/external-nawicon-outline-color-nawicon/64/000000/external-love-location-nawicon-outline-color-nawicon.png",
                  size: { width: 40, height: 40 },
                }}
              >
                {props.info &&
                  props.info.content === marker.content &&
                  props.contentFlag && <Contents marker={marker} />}
              </S.KakaoMapMarker>
            )}
          {marker.group_code === "PM9" &&
            props.categoryFlag &&
            props.category === "PM9" && (
              <S.KakaoMapMarker
                key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
                position={marker.position}
                onClick={props.markerClick(marker)}
                image={{
                  src: "https://img.icons8.com/external-nawicon-outline-color-nawicon/64/000000/external-hospital-location-nawicon-outline-color-nawicon.png",

                  size: { width: 40, height: 40 },
                }}
              >
                {props.info &&
                  props.info.content === marker.content &&
                  props.contentFlag && <Contents marker={marker} />}
              </S.KakaoMapMarker>
            )}
          {marker.group_code === "" && (
            <S.KakaoMapMarker
              key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
              position={marker.position}
              onClick={props.markerClick(marker)}
              image={{
                src: "https://img.icons8.com/external-nawicon-outline-color-nawicon/64/000000/external-building-location-nawicon-outline-color-nawicon.png",
                size: { width: 40, height: 40 },
              }}
            >
              {props.info &&
                props.info.content === marker.content &&
                props.contentFlag && <Contents marker={marker} />}
            </S.KakaoMapMarker>
          )}
          {marker.category_name.includes("문화유적") && props.categoryFlag && (
            <S.KakaoMapMarker
              position={marker.position}
              onClick={props.markerClick(marker)}
              image={{
                src: "https://img.icons8.com/external-nawicon-outline-color-nawicon/64/000000/external-bank-location-nawicon-outline-color-nawicon.png",
                size: { width: 40, height: 40 },
              }}
            >
              {props.info &&
                props.info.content === marker.content &&
                props.contentFlag && <Contents marker={marker} />}
            </S.KakaoMapMarker>
          )}
        </>
      ))}
    </>
  );
}

// src="https://img.icons8.com/external-nawicon-outline-color-nawicon/64/000000/external-location-maps-and-navigation-nawicon-outline-color-nawicon-2.png"/>
//   const at4 = props.markers
//     .filter((el: any) => el.category_name.includes("미용실"))
//     .map((el: any) => el);
//   console.log(at4, 123);
// infoWindowOptions={{
//   style: { backgroundColor: "red", width: "200px" },
// }}

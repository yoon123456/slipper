import { MarkerProps } from "../keyword/kakaomap.types";
import Contents from "../contents/content";
import * as S from "./kakaomap.styled";
import { v4 as uuidv4 } from "uuid";

export default function KakaomapMarks(props: MarkerProps) {
  console.log(props.data?.fetchBoardsPage?.map((el) => el));
  return (
    <>
      {props.markers.map((marker: any) => (
        <>
          {marker.group_code === "FD6" && (
            <S.KakaoMapMarker
              // key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
              key={uuidv4()}
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
          {marker.group_code === "SC4" && (
            <S.KakaoMapMarker
              // key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
              key={uuidv4()}
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
          {marker.group_code === "HP8" && (
            <S.KakaoMapMarker
              // key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
              key={uuidv4()}
              position={marker.position}
              onClick={props.markerClick(marker)}
              image={{
                src: "/image/hospital.png",
                size: { width: 45, height: 40 },
              }}
            >
              {props.info &&
                props.info.content === marker.content &&
                props.contentFlag && <Contents marker={marker} />}
            </S.KakaoMapMarker>
          )}
          {marker.group_code === "MT1" && (
            <S.KakaoMapMarker
              // key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
              key={uuidv4()}
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
          {marker.group_code === "OL7" && (
            <S.KakaoMapMarker
              // key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
              key={uuidv4()}
              position={marker.position}
              onClick={props.markerClick(marker)}
              image={{
                src: "/image/oil.png",
                size: { width: 40, height: 40 },
              }}
            >
              {props.info &&
                props.info.content === marker.content &&
                props.contentFlag && <Contents marker={marker} />}
            </S.KakaoMapMarker>
          )}
          {marker.group_code === "CE7" && (
            <S.KakaoMapMarker
              // key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
              key={uuidv4()}
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
          {marker.group_code === "BK9" && (
            <S.KakaoMapMarker
              // key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
              key={uuidv4()}
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
          {marker.group_code === "SW8" && (
            <S.KakaoMapMarker
              // key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
              key={uuidv4()}
              position={marker.position}
              onClick={props.markerClick(marker)}
              image={{
                src: "/image/subway.png",
                size: { width: 40, height: 40 },
              }}
            >
              {props.info &&
                props.info.content === marker.content &&
                props.contentFlag && <Contents marker={marker} />}
            </S.KakaoMapMarker>
          )}
          {marker.group_code === "PK6" && (
            <S.KakaoMapMarker
              // key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
              key={uuidv4()}
              position={marker.position}
              onClick={props.markerClick(marker)}
              image={{
                src: "/image/parking.png",
                size: { width: 40, height: 40 },
              }}
            >
              {props.info &&
                props.info.content === marker.content &&
                props.contentFlag && <Contents marker={marker} />}
            </S.KakaoMapMarker>
          )}
          {marker.group_code === "CS2" && (
            <S.KakaoMapMarker
              // key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
              key={uuidv4()}
              position={marker.position}
              onClick={props.markerClick(marker)}
              image={{
                src: "/image/store.png",
                size: { width: 40, height: 40 },
              }}
            >
              {props.info &&
                props.info.content === marker.content &&
                props.contentFlag && <Contents marker={marker} />}
            </S.KakaoMapMarker>
          )}
          {marker.group_code === "PS3" && (
            <S.KakaoMapMarker
              // key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
              key={uuidv4()}
              position={marker.position}
              onClick={props.markerClick(marker)}
              image={{
                src: "/image/child.png",
                size: { width: 40, height: 40 },
              }}
            >
              {props.info &&
                props.info.content === marker.content &&
                props.contentFlag && <Contents marker={marker} />}
            </S.KakaoMapMarker>
          )}
          {marker.group_code === "AC5" && (
            <S.KakaoMapMarker
              // key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
              key={uuidv4()}
              position={marker.position}
              onClick={props.markerClick(marker)}
              image={{
                src: "/image/academy.png",
                size: { width: 40, height: 40 },
              }}
            >
              {props.info &&
                props.info.content === marker.content &&
                props.contentFlag && <Contents marker={marker} />}
            </S.KakaoMapMarker>
          )}
          {marker.group_code === "CT1" && (
            <S.KakaoMapMarker
              // key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
              key={uuidv4()}
              position={marker.position}
              onClick={props.markerClick(marker)}
              image={{
                src: "/image/publicTown.png",
                size: { width: 40, height: 40 },
              }}
            >
              {props.info &&
                props.info.content === marker.content &&
                props.contentFlag && <Contents marker={marker} />}
            </S.KakaoMapMarker>
          )}
          {marker.group_code === "AG2" && (
            <S.KakaoMapMarker
              // key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
              key={uuidv4()}
              position={marker.position}
              onClick={props.markerClick(marker)}
              image={{
                src: "/image/real.png",
                size: { width: 40, height: 40 },
              }}
            >
              {props.info &&
                props.info.content === marker.content &&
                props.contentFlag && <Contents marker={marker} />}
            </S.KakaoMapMarker>
          )}
          {marker.group_code === "PO3" && (
            <S.KakaoMapMarker
              // key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
              key={uuidv4()}
              position={marker.position}
              onClick={props.markerClick(marker)}
              image={{
                src: "/image/publicTown.png",
                size: { width: 40, height: 50 },
              }}
            >
              {props.info &&
                props.info.content === marker.content &&
                props.contentFlag && <Contents marker={marker} />}
            </S.KakaoMapMarker>
          )}
          {marker.group_code === "AT4" && (
            <S.KakaoMapMarker
              // key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
              key={uuidv4()}
              position={marker.position}
              onClick={props.markerClick(marker)}
              image={{
                src: "/image/culture.png",
                size: { width: 40, height: 40 },
              }}
            >
              {props.info &&
                props.info.content === marker.content &&
                props.contentFlag && <Contents marker={marker} />}
            </S.KakaoMapMarker>
          )}
          {marker.group_code === "AD5" && (
            <S.KakaoMapMarker
              // key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
              key={uuidv4()}
              position={marker.position}
              onClick={props.markerClick(marker)}
              image={{
                src: "/image/g.png",
                size: { width: 40, height: 40 },
              }}
            >
              {props.info &&
                props.info.content === marker.content &&
                props.contentFlag && <Contents marker={marker} />}
            </S.KakaoMapMarker>
          )}
          {marker.group_code === "PM9" && (
            <S.KakaoMapMarker
              // key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
              key={uuidv4()}
              position={marker.position}
              onClick={props.markerClick(marker)}
              image={{
                src: "/p.png",
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
              // key={`marker-${marker.content}-${marker.position.lng},${marker.position.lng}`}
              key={uuidv4()}
              position={marker.position}
              onClick={props.markerClick(marker)}
              image={{
                src: "/image/g.png",
                size: { width: 40, height: 40 },
              }}
            >
              {props.info &&
                props.info.content === marker.content &&
                props.contentFlag && <Contents marker={marker} />}
            </S.KakaoMapMarker>
          )}
          {/* {marker.category_name.includes("문화유적") && (
            <S.KakaoMapMarker
              position={marker.position}
              onClick={props.markerClick(marker)}
              image={{
                src: "/image/culutre.png",
                size: { width: 40, height: 40 },
              }}
            >
              {props.info &&
                props.info.content === marker.content &&
                props.contentFlag && <Contents marker={marker} />}
            </S.KakaoMapMarker>
          )} */}
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

import { Modal } from "antd";
import Script from "next/script";
import { KaoKaoMap } from "../keyword/kakaomap.types";
import * as S from "./kakaomap.styled";
import KakaomapMarks from "./kakaomapmarkers";
export default function KakaomapPresenter(props: KaoKaoMap) {
  return (
    <>
      <Script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=10933d05118bfc99d732e83a2814b76a&libraries=services&autoload=false"
        strategy="beforeInteractive"
      />
      {props.isOpen && (
        <Modal visible={true}>
          <Script
            type="text/javascript"
            src="//dapi.kakao.com/v2/maps/sdk.js?appkey=10933d05118bfc99d732e83a2814b76a&libraries=services&autoload=false"
            strategy="beforeInteractive"
          />
          <S.KakaoMapRoadview // 로드뷰를 표시할 Container
            position={{
              // 지도의 중심좌표
              lat: Number(props.address.position.lat),
              lng: Number(props.address.position.lng),
              radius: 50,
            }}
            style={{
              width: "100%",
              height: "50%",
            }}
            onErrorGetNearestPanoId={props.onErrorGetNearestPanoId}
          >
            <S.KakaoCustomOverlayRoadview
              position={{
                lat: props.lat,
                lng: props.lng,
              }}
              isFocus={true}
              xAnchor={0.5}
              yAnchor={0.5}
            ></S.KakaoCustomOverlayRoadview>
          </S.KakaoMapRoadview>
        </Modal>
      )}
      <S.WarrapOut>
        <S.KaKaoWarp>
          <S.Category>
            <S.Search type="text" />
            <S.SearchBtn
              type="submit"
              onClick={props.onClickButton}
              ref={props.btnRef}
            >
              검색
            </S.SearchBtn>
            <S.CategorySearch>
              <S.LocationButton
                type="button"
                onClick={props.onclickGeoLocation}
                ref={props.btnRef}
              >
                현재위치
              </S.LocationButton>
              <S.TrappickButton type="button" onClick={props.onClickTrrapic}>
                교통정보
              </S.TrappickButton>
              <S.RoadButton type="button" onClick={props.onClickRoadView}>
                로드뷰
              </S.RoadButton>
            </S.CategorySearch>
          </S.Category>
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
            <KakaomapMarks
              markers={props.markers}
              markerClick={props.markerClick}
              info={props.info}
              contentFlag={props.contentFlag}
            />

            <S.KakaoMapMarker
              position={{ lat: props.geoLat, lng: props.geoLng }}
            ></S.KakaoMapMarker>
            {/* {props.trrapicFlag ? (
              <S.KaoKaoMapTypeId type={kakao.maps.MapTypeId.TRAFFIC} />
            ) : (
              <div></div>
            )}

            {props.roadViewFlag ? (
              <S.KakaoMapRoadview // 로드뷰를 표시할 Container
                position={{
                  // 지도의 중심좌표
                  lat: Number(props.address.position.lat),
                  lng: Number(props.address.position.lng),
                  radius: 50,
                }}
                style={{
                  width: "100%",
                  height: "50%",
                }}
                onErrorGetNearestPanoId={props.onErrorGetNearestPanoId}
              >
                <S.KakaoCustomOverlayRoadview
                  position={{
                    lat: props.lat,
                    lng: props.lng,
                  }}
                  isFocus={true}
                  xAnchor={0.5}
                  yAnchor={0.5}
                ></S.KakaoCustomOverlayRoadview>
              </S.KakaoMapRoadview>
            ) : (
              <div></div>
            )} */}
          </S.KaKaoMap>
        </S.KaKaoWarp>
      </S.WarrapOut>
    </>
  );
}
{
  /* <S.BtnWarrp>
              <S.CaffeBtn
                id="CE7"
                onClick={props.onClickCategory}
                src="/image/caffe.png"
              />
              <S.HospitalBtn
                id="HP8"
                onClick={props.onClickCategory}
                src="/image/hospital.png"
              />
              <S.SchoolBtn
                id="SC4"
                onClick={props.onClickCategory}
                src="/image/school.png"
              />
              <S.StoreBtn
                id="CS2"
                onClick={props.onClickCategory}
                src="/image/store.png"
              />
              <S.MartBtn
                id="MT1"
                onClick={props.onClickCategory}
                src="/image/mart.png"
              />
              <S.FoodBtn
                id="FD6"
                onClick={props.onClickCategory}
                src="/image/food.png"
              />
              <S.PublicBtn
                id="PO3"
                onClick={props.onClickCategory}
                src="/image/publicTown.png"
              />
              <S.BankBtn
                id="BK9"
                onClick={props.onClickCategory}
                src="/image/bank.png"
              />
            </S.BtnWarrp> */
}

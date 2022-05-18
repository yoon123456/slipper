/* eslint-disable @next/next/no-img-element */
export default function Contents() {
  return (
    <div className="overlay_info">
      <a
        href="https://place.map.kakao.com/17600274" // boardId 값 넘겨주면됨
        target="_blank"
        rel="noreferrer"
      >
        <strong // 타이틀
        >
          월정리 해수욕장
        </strong>
      </a>
      <div className="desc">
        <img
          src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/place_thumb.png" // boardId Img
          alt=""
        />
        <span
          className="address" // boardAddress
        >
          제주특별자치도 제주시 구좌읍 월정리 33-3
        </span>
      </div>
    </div>
  );
}

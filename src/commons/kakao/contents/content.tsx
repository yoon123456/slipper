/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
import { ContentProps } from "../keyword/kakaomap.types";

const Box = styled.div`
  background-color: white;
`;

export default function Contents(props: ContentProps) {
  return (
    <Box className="overlay_info">
      <a
        href="https://place.map.kakao.com/17600274" // boardId 값 넘겨주면됨
        target="_blank"
        rel="noreferrer"
      >
        {props.markers.map((marker: any) => {
          <strong // 타이틀
          >
            {`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
          </strong>;
        })}
      </a>
      <div className="desc">
        {/* <img
          src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/place_thumb.png" // boardId Img
          alt=""
        /> */}
        <span
          className="address" // boardAddress
        ></span>
      </div>
    </Box>
  );
}

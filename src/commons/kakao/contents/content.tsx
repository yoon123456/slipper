/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
import { ContentProps } from "../keyword/kakaomap.types";

const Box = styled.div`
  background-color: white;
`;
const BoxInner = styled.div``;
const BoxContent = styled.div``;
const BoxFirst = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 85px;
  border-radius: 10px;
  border: 1px solid #ccc;
  border-bottom: 2px solid #ddd;
  float: left;
`;
const BoxText = styled.div``;
const BoxAddressName = styled.div``;
const BoxPhone = styled.div``;
const BoxPlaceUrl = styled.a``;
export default function Contents(props: ContentProps) {
  return (
    <Box>
      <BoxInner>
        <>
          <BoxFirst className="customoverlay">
            <BoxContent>{props.marker.content}</BoxContent>
            <BoxText>{props.marker.group_name}</BoxText>
            <BoxAddressName>{props.marker.road_name}</BoxAddressName>
            <BoxPhone>{props.marker.phone}</BoxPhone>
            <BoxPlaceUrl className="title" href={`${props.marker.place_url}`}>
              {props.marker.place_url}
            </BoxPlaceUrl>
          </BoxFirst>
        </>
      </BoxInner>
    </Box>
  );
}

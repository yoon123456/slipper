/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { useMovetoPage } from "../../hooks/movePage";
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
  cursor: pointer;
  :hover {
    color: #008af6;
  }
`;
const BoxText = styled.div``;
const BoxAddressName = styled.div``;
const BoxPhone = styled.div``;
const BoxPlaceUrl = styled.a``;
export default function Contents(props: ContentProps) {
  const { onClickMoveToPage } = useMovetoPage();

  return (
    <Box>
      <BoxInner>
        <>
          <BoxFirst
            className="customoverlay"
            onClick={
              props.el?._id
                ? onClickMoveToPage(`/boards/${props.el?._id}`)
                : onClickMoveToPage(`${props.marker?.place_url}`)
            }
          >
            <BoxContent>
              {props.el?._source.place
                ? props.el?._source.place
                : props.marker?.content}
            </BoxContent>
            <BoxText>
              {props.el?._source.category
                ? props.el?._source.category
                : props.marker?.group_name}
            </BoxText>
            <BoxAddressName>
              {props.el?._source.address
                ? props.el?._source.address
                : props.marker?.road_name}
            </BoxAddressName>
            <BoxPhone>
              {props.el?._source.placephone
                ? props.el?._source.placephone
                : props.marker?.phone}
            </BoxPhone>
            <BoxPlaceUrl
              className="title"
              href={`${
                props.el?._source.placeurl
                  ? props.el?._source.placeurl
                  : props.marker?.place_url
              }`}
            >
              {props.el?._source.placeurl
                ? props.el?._source.placeurl
                : props.marker?.place_url}
            </BoxPlaceUrl>
            ㅕ768
          </BoxFirst>
        </>
      </BoxInner>
    </Box>
  );
}

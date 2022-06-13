import { IPropsWriteSecond } from "./write.types";
import * as S from "./write.styles";
import KeyWord from "../../../../commons/kakao/keyword/kakaomap.container";
export default function Second(props: IPropsWriteSecond) {
  return (
    <>
      {props.activeStep === "second" && (
        <>
          <S.BodyWrapper>
            <S.Body>
              <S.MapWrapper>
                {/* <S.MapHead>위치</S.MapHead> */}
                <S.Error>{props.mapError}</S.Error>
                <KeyWord mapStatus={props.mapStatus} />
              </S.MapWrapper>
              {!props.address?.group_name && (
                <>
                  <S.MapHead>카테고리</S.MapHead>
                  {props.isEdit ? (
                    <S.MapDetail>
                      {props.data?.fetchBoard.category || ""}
                    </S.MapDetail>
                  ) : (
                    <S.MapDetail>{props.address?.group_name}</S.MapDetail>
                  )}
                </>
              )}
              <S.MapHead>상호명</S.MapHead>
              {props.isEdit ? (
                <S.MapDetail>{props.data?.fetchBoard.place || ""}</S.MapDetail>
              ) : (
                <S.MapDetail>{props.address?.content}</S.MapDetail>
              )}
              <S.MapHead>주소</S.MapHead>
              {props.isEdit ? (
                <S.MapDetail>
                  {props.data?.fetchBoard.address || ""}
                </S.MapDetail>
              ) : (
                <S.MapDetail>{props.address?.address_name}</S.MapDetail>
              )}
            </S.Body>
            <S.ButtonWrapper>
              <S.Button
                isButtonActive={props.isButtonActive}
                onClick={props.onClickSecondPrev}
              >
                &lt;
              </S.Button>
              {props.address?.address_name !== "" ? (
                <S.MapButtonOn onClick={props.onClickSecondNext}>
                  &gt;
                </S.MapButtonOn>
              ) : (
                <S.MapButtonOff onClick={props.onClickSecondNext}>
                  &gt;
                </S.MapButtonOff>
              )}
            </S.ButtonWrapper>
          </S.BodyWrapper>
        </>
      )}
    </>
  );
}

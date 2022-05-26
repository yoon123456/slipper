import styled from "@emotion/styled";
import * as S from "./footer.styles";

export default function Footer() {
  return (
    <>
      <S.WarpperOut>
        <S.WarpperIn>
          {/* <WarpperTop></WarpperTop> */}
          <S.WrapperOuterBottom>
            <S.WrapperBottom>
              <S.WrapperBottomIn>
                <S.WrapperBottomCategory>이용약관</S.WrapperBottomCategory>
                <S.WrapperBottomArrow>⌄</S.WrapperBottomArrow>
              </S.WrapperBottomIn>
              <S.WrapperBottomIn>
                <S.WrapperBottomCategory>
                  위치기반서비스이용약관
                </S.WrapperBottomCategory>
                <S.WrapperBottomArrow>⌄</S.WrapperBottomArrow>
              </S.WrapperBottomIn>
              <S.WrapperBottomIn>
                <S.WrapperBottomCategory>
                  개인정보처리방침
                </S.WrapperBottomCategory>
                <S.WrapperBottomArrow>⌄</S.WrapperBottomArrow>
              </S.WrapperBottomIn>
              <S.WrapperBottomIn>
                <S.WrapperBottomCategory>이용약관</S.WrapperBottomCategory>
                <S.WrapperBottomArrow>⌄</S.WrapperBottomArrow>
              </S.WrapperBottomIn>
              <S.WrapperBottomIn>
                <S.WrapperBottomCategory>
                  권리침해신고안내
                </S.WrapperBottomCategory>
                <S.WrapperBottomArrow>⌄</S.WrapperBottomArrow>
              </S.WrapperBottomIn>
              <S.WrapperBottomIn>
                <S.WrapperBottomCategory>Contact Us</S.WrapperBottomCategory>
                <S.WrapperBottomArrow>⌄</S.WrapperBottomArrow>
              </S.WrapperBottomIn>
            </S.WrapperBottom>
            <S.Info>
              <S.InfoText>주소 :서울특별시 구로구 디지털로 300 </S.InfoText>
              <S.InfoTextNumber>
                사업자등록번호 : 000-00-00000{" "}
              </S.InfoTextNumber>
            </S.Info>
            <S.Info>
              <S.InfoText>(주)슬리퍼 | 대표자: team_slipper</S.InfoText>
            </S.Info>
          </S.WrapperOuterBottom>
          <S.FlexBox>
            <S.BottomLogo src="/image/logo.png" />
            <S.WarpperMiddle>
              이사가는 곳 인프라를 한눈에 보고싶은 당신을 위한 서비스
            </S.WarpperMiddle>
            <S.WrapperReserverd>
              @Slipper Corp. All rights reserved.
            </S.WrapperReserverd>
          </S.FlexBox>
        </S.WarpperIn>
      </S.WarpperOut>
    </>
  );
}

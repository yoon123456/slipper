import * as S from "./landing.styles";
import * as React from "react";
import Logo from "../../../commons/logo";
import { yellow } from "@mui/material/colors";

const images = [
  {
    src: "/image/writebutton.png",
    title: "Breakfast",
    width: "33.3%",
  },
  {
    src: "/image/searchbutton.png",
    title: "Burgers",
    width: "33.3%",
  },
  {
    src: "/image/mypagebutton.png",
    title: "Camera",
    width: "33.3%",
  },
];

export default function LandingPresenter() {
  return (
    <S.WrapperOut>
      <S.WrapperTop>
        <S.LogoBox>
          <Logo />
        </S.LogoBox>
        <S.Ham src="/image/hamWhite.png"></S.Ham>
        <S.H1>
          <span>s</span>
          <span>l</span>
          <span>i</span>
          <span>p</span>
          <span>p</span>
          <span>e</span>
          <span>r</span>
        </S.H1>
        <S.MainFlex>
          <S.Main>
            <S.MainImg src="/image/night.webp"></S.MainImg>
          </S.Main>
          <S.MainBlue>
            <S.TextBox>
              슬리퍼가
              {/* <S.MainText>"슬리퍼가 대신 다녀올게."</S.MainText>
              <S.SubText>
                이사가는 곳 동네 인프라를 이제는 슬리퍼로 알아보세요!
              </S.SubText> */}
              <S.TextIn>
                <S.TextO>
                  <S.TextFirst style={{ backgroundColor: "#42c58a" }}>
                    work
                  </S.TextFirst>
                </S.TextO>
                <S.TextOut>
                  <S.TextSecond style={{ backgroundColor: "#4ec7f3" }}>
                    lifestyle
                  </S.TextSecond>
                </S.TextOut>
                <S.TextOut>
                  <S.TextLast style={{ backgroundColor: "#DC143C" }}>
                    everything
                  </S.TextLast>
                </S.TextOut>
              </S.TextIn>
              대신 다녀올게!
            </S.TextBox>
          </S.MainBlue>
        </S.MainFlex>
      </S.WrapperTop>
    </S.WrapperOut>
  );
}

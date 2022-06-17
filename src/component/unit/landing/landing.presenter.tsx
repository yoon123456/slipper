import * as S from "./landing.styles";
import * as React from "react";
import Script from "next/script";
import { ILandingPresenter } from "./landing.types";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function LandingPresenter(props: ILandingPresenter) {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });

  return (
    <>
      <Script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=10933d05118bfc99d732e83a2814b76a&libraries=services&autoload=false"
        strategy="beforeInteractive"
      />
      <S.WrapperOut>
        <S.WrapperTop>
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
          <S.ScrollArrow src="/image/ArrowDown.png" />
        </S.WrapperTop>
        <S.Box>
          <S.Pbox2>
            <S.TBox>
              <S.Txt>한 눈에 알아볼 수 있는 slipper 처음이세요? </S.Txt>
              <S.Img2>슬리퍼만 있으면 어디든 갈 수 있어요!</S.Img2>
            </S.TBox>
            <S.ImgBox2 data-aos="fade-up">
              <S.Img src="/image/banner2.png" />
              <S.Middle>
                <S.MiddleText onClick={props.onClickMoveToList}>
                  구경가기
                </S.MiddleText>
              </S.Middle>
            </S.ImgBox2>
          </S.Pbox2>
        </S.Box>
        <S.Box>
          <S.Pbox1>
            <S.ImgBox1 data-aos="fade-up-right">
              <S.Img src="/image/banner1.png" />
              <S.Middle>
                <S.MiddleText onClick={props.onClickMoveBoardNew}>
                  함께 공유해요!
                </S.MiddleText>
              </S.Middle>
            </S.ImgBox1>
            <S.TBox data-aos="fade-up-left">
              <S.ImageCafe src="/image/landingcafe.jpeg" />
              <S.Txt>슬리퍼가 여러분과 함께합니다.</S.Txt>
              <S.Img1>야 , 너도 슬리퍼 신어볼래?</S.Img1>
            </S.TBox>
          </S.Pbox1>
        </S.Box>
        <S.Box>
          <S.Pbox3>
            <S.TBox data-aos="fade-right">
              <S.Txt>사장님을 위한 슬리퍼 트렌드 </S.Txt>
              <S.Img3>전국의 모든 사장님들 슬리퍼를 신어보세요. </S.Img3>
            </S.TBox>
            <S.ImgBox3 data-aos="fade-left">
              <S.LastImage src="/image/banner3.png" />
              <S.Middle>
                <S.MiddleText>사장님 가게 알리기</S.MiddleText>
              </S.Middle>
            </S.ImgBox3>
          </S.Pbox3>
        </S.Box>
      </S.WrapperOut>
    </>
  );
}

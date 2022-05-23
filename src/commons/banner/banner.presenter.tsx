import * as S from "./banner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {
  const settings = {
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <S.DivOut>
      <S.Wrapper>
        <S.Div>
          <Slider {...settings}>
            <S.Pbox1>
              <S.TBox>
                <S.Txt>슬리퍼가 여러분과 함께합니다.</S.Txt>
                <S.Img1>야 , 너도 슬리퍼 신어볼래?</S.Img1>
              </S.TBox>
              <S.ImgBox>
                <S.Img src="/image/banner1.png" />
              </S.ImgBox>
            </S.Pbox1>
            <S.Pbox2>
              <S.TBox>
                <S.Txt>한 눈에 알아볼 수 있는 slipper 처음이세요? </S.Txt>
                <S.Img2>슬리퍼만 있으면 어디든 갈 수 있어요!</S.Img2>
              </S.TBox>
              <S.ImgBox>
                <S.Img src="/image/banner2.png" />
              </S.ImgBox>
            </S.Pbox2>
            <S.Pbox3>
              <S.TBox>
                <S.Txt>사장님을 위한 슬리퍼 트렌드 </S.Txt>
                <S.Img3>전국의 모든 사장님들 슬리퍼를 신어보세요. </S.Img3>
              </S.TBox>
              <S.ImgBox>
                <S.Img src="/image/banner3.png" />
              </S.ImgBox>
            </S.Pbox3>
          </Slider>
        </S.Div>
      </S.Wrapper>
    </S.DivOut>
  );
}

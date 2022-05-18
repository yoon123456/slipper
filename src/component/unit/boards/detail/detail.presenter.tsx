// 예원작업 5/16

import Category from "../../../../commons/category";
import * as S from "./detail.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function DetailPresenter() {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: true,
  };
  return (
    <S.WrapperOut>
      <S.WrapperTop>
        <S.TopLeft>
          <S.Map src={"/image/mapEx.png"} />
          <S.SliderWrap>
            <S.ImageWrap>
              <S.SliderStyle {...settings}>
                <S.ImgWrapper>
                  <S.Img src={"/image/kakao.png"} />
                </S.ImgWrapper>
                <S.ImgWrapper>
                  <S.Img src={"/image/test2.png"} />
                </S.ImgWrapper>
                <S.ImgWrapper>
                  <S.Img src={"/image/naver.png"} />
                </S.ImgWrapper>
                <S.ImgWrapper>
                  <S.Img src={"/image/mypicks.png"} />
                </S.ImgWrapper>
              </S.SliderStyle>
            </S.ImageWrap>
          </S.SliderWrap>
        </S.TopLeft>
        <S.TopRight>
          <S.UserInfoWrap>
            <S.UserImg src={"/image/usericon.png"} />
            <S.UserWrap>
              <S.UserName>작성자</S.UserName>
              <S.UserWriteDate>작성날짜</S.UserWriteDate>
            </S.UserWrap>
          </S.UserInfoWrap>
          <S.UserTitle>사장님이 친절해요</S.UserTitle>
          <S.UserLiving>2022.05.07~2222.05.07</S.UserLiving>
          <S.CategoryWrap>
            <Category />
          </S.CategoryWrap>
          <S.UserMiddle>
            <S.ShopName>코딩맛집</S.ShopName>
            <S.ShopRatingWrap>
              <S.ShopRating>만족도</S.ShopRating>
              <S.RatingWrap>
                <S.Good src={"/image/ratingGood.png"} />
                <S.Soso src={"/image/ratingSoso.png"} />
                <S.Bad src={"/image/ratingBad.png"} />
              </S.RatingWrap>
            </S.ShopRatingWrap>
          </S.UserMiddle>
          <S.UserContents>
            안녕하세요 슬리퍼 신으러
            왔어요오오옹오오오오오오오옹오오오오오오오오옹오오오오오오옹오오오오오오오
            안녕하세요 슬리퍼 신으러
            왔어요오오옹오오오오오오오옹오오오오오오오오옹오오오오오오옹오오오오오오오
            안녕하세요 슬리퍼 신으러
            왔어요오오옹오오오오오오오옹오오오오오오오오옹오오오오오오옹오오오오오오오
            안녕하세요 슬리퍼 신으러
            왔어요오오옹오오오오오오오옹오오오오오오오오옹오오오오오오옹오오오오오오오
            안녕하세요 슬리퍼 신으러
            왔어요오오옹오오오오오오오옹오오오오오오오오옹오오오오오오옹오오오오오오오
            안녕하세요 슬리퍼 신으러
          </S.UserContents>
        </S.TopRight>
      </S.WrapperTop>
      <S.WrapperBottom>
        <S.Button>목록</S.Button>
        <S.Button>수정</S.Button>
        <S.Button>삭제</S.Button>
      </S.WrapperBottom>
    </S.WrapperOut>
  );
}

// // 예원작업 5/16~5/25

import * as S from "./detail.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IDetailPresenter } from "./detail.types";
import { getDate } from "../../../../commons/libraries/date";
import KakaoMapFetch from "../../../../commons/kakaoMapFetch";
import QuestionWriteContainer from "../../question/write/questionwrite.container";
import Dompurify from "dompurify";

export default function DetailPresenter(props: IDetailPresenter) {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  return (
    <>
      <S.WrapperOut>
        <S.WrapperTop>
          <S.TopLeft>
            <S.Map>
              <KakaoMapFetch data={props.data} />
            </S.Map>
            <S.SliderWrap>
              <S.ImageWrap>
                <S.SliderStyle {...settings}>
                  {props.data?.fetchBoard.images
                    // ?.filter((el: string) => el)
                    .map((el: any, idx: number) => (
                      <S.ImgWrapper key={idx}>
                        <S.Img src={el.imageUrl} />
                      </S.ImgWrapper>
                    ))}
                </S.SliderStyle>
              </S.ImageWrap>
            </S.SliderWrap>
          </S.TopLeft>
          <S.EditDeleteWrap>
            <S.UserWriteDate>
              {getDate(props.data?.fetchBoard.createdAt)}
            </S.UserWriteDate>
            <S.Icon
              id={props.data?.fetchBoard.id}
              src={"/image/listpen.png"}
              onClick={props.onClickMoveToBoardEdit}
            />
            <S.Icon
              id={props.data?.fetchBoard.id}
              src={"/image/delete.png"}
              onClick={props.onClickDeleteBoard}
            />
          </S.EditDeleteWrap>
          <S.TopRight>
            <S.UserTitle>{props.data?.fetchBoard.title}</S.UserTitle>
            <S.UserMiddle>
              <S.ShopName>{props.data?.fetchBoard.place}</S.ShopName>
              <S.CategoryWrap>
                <S.Category>{props.data?.fetchBoard.category}</S.Category>
              </S.CategoryWrap>

              <S.ShopRatingWrap>
                <S.RatingWrap>
                  <S.Good src={"/image/ratingGood.png"} />
                  <S.Soso src={"/image/ratingSoso.png"} />
                  <S.Bad src={"/image/ratingBad.png"} />
                </S.RatingWrap>
              </S.ShopRatingWrap>
            </S.UserMiddle>
            <S.UserInfoWrap>
              <S.User>
                <S.UserImg src={props.data?.fetchBoard.user.imageUrl} />
                <S.UserName>{props.data?.fetchBoard.user.nickname}</S.UserName>
              </S.User>
              <S.UserLivingWrap>
                <S.UserLiving>거주기간:</S.UserLiving>
                <S.UserLivingPeriod>
                  {props.data?.fetchBoard.startDate}~
                  {props.data?.fetchBoard.endDate}
                </S.UserLivingPeriod>
              </S.UserLivingWrap>
            </S.UserInfoWrap>
            {typeof window !== "undefined" && (
              <S.UserContents
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(props.data?.fetchBoard.contents),
                }}
              ></S.UserContents>
            )}
            <S.WrapperBottom>
              <S.Button onClick={props.onClickMoveToList}>목록</S.Button>
            </S.WrapperBottom>
          </S.TopRight>
        </S.WrapperTop>
      </S.WrapperOut>
      <S.WraperQuestion>
        <QuestionWriteContainer />
      </S.WraperQuestion>
    </>
  );
}

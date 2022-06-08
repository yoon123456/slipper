// // 예원작업 5/16~5/25

import * as S from "./detail.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IDetailPresenter } from "./detail.types";
import { getDate } from "../../../../commons/libraries/date";
import KakaoMapFetch from "../../../../commons/kakaoMapFetch";
import QuestionWriteContainer from "../../question/write/questionwrite.container";
import Dompurify from "dompurify";
import { IBoardImage } from "../../../../commons/types/generated/types";
import QuestionListContainer from "../../question/list/questionlist.container";

export default function DetailPresenter(props: IDetailPresenter) {
  const settings = {
    dots: false,
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
            <S.SliderWrap>
              <S.ImageWrap>
                <S.SliderStyle {...settings}>
                  {props.data?.fetchBoard.images?.map(
                    (el: IBoardImage, idx: number) => (
                      <S.ImgWrapper key={idx}>
                        {el.imageUrl === "" ? (
                          <S.Img src="/image/logo.png" />
                        ) : (
                          <S.Img src={el.imageUrl} />
                        )}
                      </S.ImgWrapper>
                    )
                  )}
                </S.SliderStyle>
              </S.ImageWrap>
            </S.SliderWrap>
            <S.Map>
              <KakaoMapFetch data={props.data} />
            </S.Map>
          </S.TopLeft>
          <S.EditDeleteWrap>
            <S.UserWriteDate>
              {getDate(props.data?.fetchBoard.createdAt)}
            </S.UserWriteDate>
            {props.data?.fetchBoard.nickname ===
            props.userData?.fetchUser.nickname ? (
              <S.IconWrap>
                <S.Icon
                  id={props.data?.fetchBoard.id}
                  src={"/image/edit.png"}
                  onClick={props.onClickMoveToBoardEdit}
                />
                <S.Icon
                  id={props.data?.fetchBoard.id}
                  src={"/image/delete3.png"}
                  onClick={props.onClickDeleteBoard}
                />
              </S.IconWrap>
            ) : (
              <></>
            )}
          </S.EditDeleteWrap>
          <S.TopRight>
            <S.UserWrap>
              <S.UserTitle>{props.data?.fetchBoard.title}</S.UserTitle>
              {props.likeData?.fetchUserLike.isLike ? (
                <S.BookMark
                  id={props.data?.fetchBoard.id}
                  src="/image/bookmarkpick.png"
                  onClick={props.onClickLike}
                />
              ) : (
                <S.BookMark
                  id={props.data?.fetchBoard.id}
                  src="/image/bookmark.png"
                  onClick={props.onClickLike}
                />
              )}
            </S.UserWrap>
            <S.Wrap>가게정보를 알려드릴게요</S.Wrap>
            <S.UserMiddle>
              <S.ShopName>{props.data?.fetchBoard.place}</S.ShopName>
              <S.CategoryWrap>
                {props.data?.fetchBoard.category === "" ? (
                  <S.Category>기타</S.Category>
                ) : (
                  <S.Category>{props.data?.fetchBoard.category}</S.Category>
                )}
              </S.CategoryWrap>
              <S.ShopRatingWrap>
                {props.data?.fetchBoard.score === 1 && (
                  <S.RatingWrap>
                    <S.Good src={"/image/happypick.png"} />
                    <S.Soso src={"/image/uhm.png"} />
                    <S.Bad src={"/image/sad.png"} />
                  </S.RatingWrap>
                )}
                {props.data?.fetchBoard.score === 2 && (
                  <S.RatingWrap>
                    <S.Good src={"/image/happy.png"} />
                    <S.Soso src={"/image/uhmpick.png"} />
                    <S.Bad src={"/image/sad.png"} />
                  </S.RatingWrap>
                )}
                {props.data?.fetchBoard.score === 3 && (
                  <S.RatingWrap>
                    <S.Good src={"/image/happy.png"} />
                    <S.Soso src={"/image/uhm.png"} />
                    <S.Bad src={"/image/sadpick.png"} />
                  </S.RatingWrap>
                )}
              </S.ShopRatingWrap>
            </S.UserMiddle>
            <S.UserInfoWrap>
              <S.User>
                {props.data?.fetchBoard.user.imageUrl === "" ? (
                  <S.UserImg src={"/image/usericon.png"} />
                ) : (
                  <S.UserImg
                    src={
                      props.data?.fetchBoard.user.imageUrl
                        ? props.data?.fetchBoard.user.imageUrl
                        : "/image/profileDefault.png"
                    }
                  />
                )}
                <S.UserName>{props.data?.fetchBoard.nickname}</S.UserName>
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
                  __html: Dompurify.sanitize(
                    props.data?.fetchBoard.contents
                      ? props.data?.fetchBoard.contents
                      : ""
                  ),
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
        <QuestionWriteContainer data={props.data} />
        <QuestionListContainer data={props.data} />
      </S.WraperQuestion>
    </>
  );
}

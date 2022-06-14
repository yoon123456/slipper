// // 예원 6/12

import * as S from "./detail.styles copy";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IDetailPresenter } from "./detail.types";
import { getDate } from "../../../../commons/libraries/date";
import KakaoMapFetch from "../../../../commons/kakaoMapFetch";
import QuestionWriteContainer from "../../question/write/questionwrite.container";
import Dompurify from "dompurify";
import { IBoardImage } from "../../../../commons/types/generated/types";
import QuestionListContainer from "../../question/list/questionlist.container";

export default function DetailPresenter2(props: IDetailPresenter) {
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
          <S.Top>
            <S.Map>
              <KakaoMapFetch data={props.data} />
            </S.Map>
            <S.ImageWrap>
              {props.data?.fetchBoard.images?.map(
                (el: IBoardImage, idx: number) => (
                  <S.ImgWrapper key={idx}>
                    <S.Img
                      src={!el.imageUrl ? "/image/logo.png" : el.imageUrl}
                    />
                  </S.ImgWrapper>
                )
              )}
            </S.ImageWrap>
          </S.Top>
          <S.Middle>
            <S.Left>
              <S.LeftTop>
                <S.Label>가게정보를 알려드릴게요</S.Label>
                <S.BookMark
                  id={props.data?.fetchBoard.id}
                  src={
                    props.likeData?.fetchUserLike.isLike
                      ? "/image/bookmarkpick.png"
                      : "/image/bookmark.png"
                  }
                  onClick={props.onClickLike}
                />
              </S.LeftTop>
              <S.Tr>
                <S.Th>추천가게</S.Th>
                <S.Info>{props.data?.fetchBoard.place}</S.Info>
              </S.Tr>
              <S.Tr>
                <S.Th>카테고리</S.Th>
                <S.Info>
                  {props.data?.fetchBoard.category === ""
                    ? "기타"
                    : props.data?.fetchBoard.category}
                </S.Info>
              </S.Tr>
              <S.Tr>
                <S.Th>만족도</S.Th>
                <S.Info>
                  <S.RatingWrap>
                    {props.data?.fetchBoard.score === 1 && (
                      <>
                        <S.Good src={"/image/happypick.png"} />
                        <S.Soso src={"/image/uhm.png"} />
                        <S.Bad src={"/image/sad.png"} />
                      </>
                    )}
                    {props.data?.fetchBoard.score === 2 && (
                      <>
                        <S.Good src={"/image/happy.png"} />
                        <S.Soso src={"/image/uhmpick.png"} />
                        <S.Bad src={"/image/sad.png"} />
                      </>
                    )}
                    {props.data?.fetchBoard.score === 3 && (
                      <>
                        <S.Good src={"/image/happy.png"} />
                        <S.Soso src={"/image/uhm.png"} />
                        <S.Bad src={"/image/sadpick.png"} />
                      </>
                    )}
                  </S.RatingWrap>
                </S.Info>
              </S.Tr>
              <S.Tr>
                <S.Th>가게주소</S.Th>
                <S.Info>{props.data?.fetchBoard.address}</S.Info>
              </S.Tr>
              <S.Tr>
                <S.Th>가게번호</S.Th>
                <S.Info>{props.data?.fetchBoard.placePhone}</S.Info>
              </S.Tr>
              <S.Tr>
                <S.Th>URL</S.Th>
                <S.InfoA href={`${props.data?.fetchBoard.placeUrl}`}>
                  {props.data?.fetchBoard.placeUrl}
                </S.InfoA>
              </S.Tr>
            </S.Left>
            <S.Right>
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
              <S.UserInfoWrap>
                <S.User>
                  <S.UserImg
                    src={
                      props.data?.fetchBoard.user.imageUrl
                        ? props.data?.fetchBoard.user.imageUrl
                        : "/image/profileDefault.png"
                    }
                  />
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
              <S.UserWrap>
                <S.UserTitle>{props.data?.fetchBoard.title}</S.UserTitle>
              </S.UserWrap>
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
            </S.Right>
          </S.Middle>
        </S.WrapperTop>
      </S.WrapperOut>
      {/* <S.WrapperBottom>
        <S.Button onClick={props.onClickMoveToList}>목록</S.Button>
        <S.Button onClick={props.onClickMoveToList}>수정</S.Button>
        <S.Button onClick={props.onClickMoveToList}>삭제</S.Button>
      </S.WrapperBottom> */}

      <S.WraperQuestion>
        <QuestionWriteContainer data={props.data} />
        <QuestionListContainer data={props.data} />
      </S.WraperQuestion>
    </>
  );
}

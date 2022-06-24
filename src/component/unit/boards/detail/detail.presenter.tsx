// // 예원 6/12

import * as S from "./detail.styles";
import { IDetailPresenter } from "./detail.types";
import { getPaymentDate } from "../../../../commons/libraries/date";
import KakaoMapFetch from "../../../../commons/kakaoMapFetch";
import QuestionWriteContainer from "../../question/write/questionwrite.container";
import Dompurify from "dompurify";
import QuestionListContainer from "../../question/list/questionlist.container";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useMovetoPage } from "../../../../commons/hooks/movePage";

export default function DetailPresenter(props: IDetailPresenter) {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });
  const { onClickMoveToPage } = useMovetoPage();

  return (
    <>
      <S.WrapperOut>
        <S.WrapperTop>
          <S.Top>
            <S.Map>
              <KakaoMapFetch data={props.data} />
            </S.Map>
            <S.ImageWrap>
              {props.data?.fetchBoard.imagesUrl?.map(
                (el: string, idx: number) => (
                  <S.ImgWrapper key={idx}>
                    <S.Img src={!el ? "image/logo.png" : el} />
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
            <S.Right data-aos="fade-left">
              <S.EditDeleteWrap>
                <S.UserWriteDate>
                  {getPaymentDate(props.data?.fetchBoard.createdAt)}
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
                  className="css-19t73uj"
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
                <S.Button onClick={onClickMoveToPage("/boards")}>목록</S.Button>
              </S.WrapperBottom>
            </S.Right>
          </S.Middle>
        </S.WrapperTop>
      </S.WrapperOut>
      <S.WraperQuestion>
        <QuestionWriteContainer data={props.data} />
        <QuestionListContainer data={props.data} userData={props.userData} />
      </S.WraperQuestion>
    </>
  );
}

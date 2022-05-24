// // 예원작업 5/16

// import Category from "../../../../commons/category";
// import * as S from "./detail.styles";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { IDetailPresenter } from "./detail.types";
// import { getDate } from "../../../../commons/libraries/date";
// import { FETCH_BOARD } from "./detail.query";

// export default function DetailPresenter(props: IDetailPresenter) {
//   const settings = {
//     dots: true,
//     autoplay: true,
//     infinite: true,
//     speed: 3000,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     pauseOnHover: true,
//   };
//   return (
//     <S.WrapperOut>
//       <S.WrapperTop>
//         <S.TopLeft>
//           <S.Map src={"/image/mapEx.png"} />
//           <S.SliderWrap>
//             <S.ImageWrap>
//               <S.SliderStyle {...settings}>
//                 {props.data?.fetchBoard.images
//                   ?.filter((el: string) => el)
//                   .map((el: string) => (
//                     <S.ImgWrapper key={el}>
//                       <S.Img src={el} />
//                     </S.ImgWrapper>
//                   ))}

//                 {/* <S.ImgWrapper>
//                   <S.Img src={"/image/test2.png"} />
//                 </S.ImgWrapper>
//                 <S.ImgWrapper>
//                   <S.Img src={"/image/naver.png"} />
//                 </S.ImgWrapper>
//                 <S.ImgWrapper>
//                   <S.Img src={"/image/mypicks.png"} />
//                 </S.ImgWrapper> */}
//               </S.SliderStyle>
//             </S.ImageWrap>
//           </S.SliderWrap>
//         </S.TopLeft>
//         <S.EditDeleteWrap>
//           <S.Icon src={"/image/listpen.png"} />
//           <S.Icon
//             src={"/image/delete.png"}
//             onClick={props.onClickDeleteBoard}
//           />
//         </S.EditDeleteWrap>
//         <S.TopRight>
//           <S.UserInfoWrap>
//             <S.UserImg src={"/image/usericon.png"} />
//             <S.UserWrap>
//               <S.User>
//                 <S.UserName>{props.data?.fetchBoard.user.ninkname}</S.UserName>

//                 {/* <S.UserWriteDate>작성일: {getDate(props.data?.fetchBoard.createdAt)}</S.UserWriteDate> */}
//               </S.User>
//               <S.UserLiving>
//                 거주기간: {props.data?.fetchBoard.period}
//               </S.UserLiving>
//             </S.UserWrap>
//           </S.UserInfoWrap>
//           <S.UserTitle>{props.data?.fetchBoard.title}</S.UserTitle>
//           <S.CategoryWrap>
//             <Category />
//           </S.CategoryWrap>
//           <S.UserMiddle>
//             <S.ShopName>{props.data?.fetchBoard.place}</S.ShopName>
//             <S.ShopRatingWrap>
//               <S.ShopRating></S.ShopRating>
//               <S.RatingWrap>
//                 <S.Good src={"/image/ratingGood.png"} />
//                 <S.Soso src={"/image/ratingSoso.png"} />
//                 <S.Bad src={"/image/ratingBad.png"} />
//               </S.RatingWrap>
//             </S.ShopRatingWrap>
//           </S.UserMiddle>
//           <S.UserContents>{props.data?.fetchBoard.contents}</S.UserContents>
//           <S.WrapperBottom>
//             <S.Button onClick={props.onClickMoveToList}>목록</S.Button>
//             {/* <S.Button>수정</S.Button>
//         <S.Button>삭제</S.Button> */}
//           </S.WrapperBottom>
//         </S.TopRight>
//       </S.WrapperTop>
//     </S.WrapperOut>
//   );
// }

// 하드코딩해서 보이게 해놓은 부분
import * as S from "./detail.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IDetailPresenter } from "./detail.types";
import { getDate } from "../../../../commons/libraries/date";
import KakaoMapFetch from "../../../../commons/kakaoMapFetch";
import QuestionWriteContainer from "../../question/write/questionwrite.container";
import Dompurify from "dompurify";

export default function DetailPresenter(props: IDetailPresenter) {
  console.log(props.data?.fetchBoard.images, "image");
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 2,
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
              src={"/image/listpen.png"}
              onClick={props.onClickMoveToBoardEdit}
            />
            <S.Icon
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
                {/* <S.UserImg src={props.data?.fetchBoard.user.imageUrl} /> */}
                <S.UserName>{props.data?.fetchBoard.ninkname}</S.UserName>
              </S.User>
              <S.UserLivingWrap>
                <S.UserLiving>거주기간:</S.UserLiving>
                <S.UserLivingPeriod>
                  {props.data?.fetchBoard.startDate}~
                  {props.data?.fetchBoard.endDate}
                </S.UserLivingPeriod>
              </S.UserLivingWrap>
            </S.UserInfoWrap>
            <S.UserContents
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(props.data?.fetchBoard.contents),
              }}
            ></S.UserContents>
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

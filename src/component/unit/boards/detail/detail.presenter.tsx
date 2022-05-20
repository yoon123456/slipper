// 예원작업 5/16

import Category from "../../../../commons/category";
import * as S from "./detail.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IDetailPresenter } from "./detail.types";
import { getDate } from "../../../../commons/libraries/date";
import { FETCH_BOARD } from "./detail.query";

export default function DetailPresenter(props: IDetailPresenter) {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 3000,
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
                {props.data?.fetchBoard.images
                  ?.filter((el: string) => el)
                  .map((el: string) => (
                    <S.ImgWrapper key={el}>
                      <S.Img src={el} />
                    </S.ImgWrapper>
                  ))}

                {/* <S.ImgWrapper>
                  <S.Img src={"/image/test2.png"} />
                </S.ImgWrapper>
                <S.ImgWrapper>
                  <S.Img src={"/image/naver.png"} />
                </S.ImgWrapper>
                <S.ImgWrapper>
                  <S.Img src={"/image/mypicks.png"} />
                </S.ImgWrapper> */}
              </S.SliderStyle>
            </S.ImageWrap>
          </S.SliderWrap>
        </S.TopLeft>
        <S.EditDeleteWrap>
          <S.Icon src={"/image/listpen.png"} />
          <S.Icon
            src={"/image/delete.png"}
            onClick={props.onClickDeleteBoard}
          />
        </S.EditDeleteWrap>
        <S.TopRight>
          <S.UserInfoWrap>
            <S.UserImg src={"/image/usericon.png"} />
            <S.UserWrap>
              <S.User>
                <S.UserName>{props.data?.fetchBoard.user.ninkname}</S.UserName>

                {/* <S.UserWriteDate>작성일: {getDate(props.data?.fetchBoard.createdAt)}</S.UserWriteDate> */}
              </S.User>
              <S.UserLiving>
                거주기간: {props.data?.fetchBoard.period}
              </S.UserLiving>
            </S.UserWrap>
          </S.UserInfoWrap>
          <S.UserTitle>{props.data?.fetchBoard.title}</S.UserTitle>
          <S.CategoryWrap>
            <Category />
          </S.CategoryWrap>
          <S.UserMiddle>
            <S.ShopName>{props.data?.fetchBoard.place}</S.ShopName>
            <S.ShopRatingWrap>
              <S.ShopRating></S.ShopRating>
              <S.RatingWrap>
                <S.Good src={"/image/ratingGood.png"} />
                <S.Soso src={"/image/ratingSoso.png"} />
                <S.Bad src={"/image/ratingBad.png"} />
              </S.RatingWrap>
            </S.ShopRatingWrap>
          </S.UserMiddle>
          <S.UserContents>{props.data?.fetchBoard.contents}</S.UserContents>
          <S.WrapperBottom>
            <S.Button onClick={props.onClickMoveToList}>목록</S.Button>
            {/* <S.Button>수정</S.Button>
        <S.Button>삭제</S.Button> */}
          </S.WrapperBottom>
        </S.TopRight>
      </S.WrapperTop>
    </S.WrapperOut>
  );
}

// // 하드코딩해서 보이게 해놓은 부분
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
//                 <S.ImgWrapper>
//                   <S.Img src={"/image/listimage.png"} />
//                 </S.ImgWrapper>
//                 <S.ImgWrapper>
//                   <S.Img src={"/image/listimage.png"} />
//                 </S.ImgWrapper>
//                 <S.ImgWrapper>
//                   <S.Img src={"/image/listimage.png"} />
//                 </S.ImgWrapper>
//                 <S.ImgWrapper>
//                   <S.Img src={"/image/listimage.png"} />
//                 </S.ImgWrapper>
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
//                 <S.UserName>작성자</S.UserName>

//                 <S.UserWriteDate>작성일: 2022.05.07</S.UserWriteDate>
//               </S.User>
//               <S.UserLiving>거주기간: 2022.05.07~2222.05.07</S.UserLiving>
//             </S.UserWrap>
//           </S.UserInfoWrap>
//           <S.UserTitle>사장님이 친절해요</S.UserTitle>
//           <S.CategoryWrap>
//             <Category />
//           </S.CategoryWrap>
//           <S.UserMiddle>
//             <S.ShopName>도미노피자</S.ShopName>
//             <S.ShopRatingWrap>
//               <S.ShopRating></S.ShopRating>
//               <S.RatingWrap>
//                 <S.Good src={"/image/ratingGood.png"} />
//                 <S.Soso src={"/image/ratingSoso.png"} />
//                 <S.Bad src={"/image/ratingBad.png"} />
//               </S.RatingWrap>
//             </S.ShopRatingWrap>
//           </S.UserMiddle>
//           <S.UserContents>
//             사장님이 친절하시고 피자가 맛있어요 치즈가 쭉쭉 늘어나요 콜라가
//             시원해요 피클이 맛있어요 사장님이 친절하시고 피자가 맛있어요 치즈가
//             쭉쭉 늘어나요 콜라가 시원해요 피클이 맛있어요 사장님이 친절하시고
//             피자가 맛있어요 치즈가 쭉쭉 늘어나요 콜라가 시원해요 피클이 맛있어요
//             피자가 맛있어요 치즈가 쭉쭉 늘어나요 콜라가 시원해요 피클이 맛있어요
//             피자가 맛있어요 치즈가 쭉쭉 늘어나요 콜라가 시원해요 피클이 맛있어요
//             피자가 맛있어요 치즈가 쭉쭉 늘어나요 콜라가 시원해요 피클이 맛있어요
//             피자가 맛있어요 치즈가 쭉쭉 늘어나요 콜라가 시원해요 피클이 맛있어요
//           </S.UserContents>
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

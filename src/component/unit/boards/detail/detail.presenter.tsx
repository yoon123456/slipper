import Category from "../../../../commons/category";
import * as S from "./detail.styles";

export default function DetailPresenter() {
  return (
    <S.WrapperOut>
      <S.WrapperTop>
        <S.TopLeft>
          <S.UserTop>사진</S.UserTop>
          <S.UserMiddle>
            <S.UserName>유저닉네임</S.UserName>
          </S.UserMiddle>
          <S.UserBottom>
            <S.UserContents>
              안녕하세요 슬리퍼 신으러
              왔어요오오옹오오오오오오오옹오오오오오오오오옹오오오오오오옹오오오오오오오
            </S.UserContents>
          </S.UserBottom>
        </S.TopLeft>
        <S.TopRight>
          <S.Map src={"/image/mapEx.png"} />
          <S.CategoryWrap>
            <Category />
          </S.CategoryWrap>
        </S.TopRight>
      </S.WrapperTop>
      <S.WrapperMiddle>
        <S.Title>우리동네 맛집은 나만 알거야</S.Title>
        <S.ResidenceWrap>
          <S.Residence>거주기간</S.Residence>
          <S.Rating>
            <S.Good src={"/image/ratingGood.png"} />
            <S.Soso src={"/image/ratingSoso.png"} />
            <S.Bad src={"/image/ratingBad.png"} />
          </S.Rating>
        </S.ResidenceWrap>
        <S.Contents>우리동네에는 맛집이 많아요 수원으로 놀러 오세요</S.Contents>
      </S.WrapperMiddle>
      <S.WrapperBottom>
        <S.Button>목록</S.Button>
        <S.Button>수정</S.Button>
        <S.Button>삭제</S.Button>
      </S.WrapperBottom>
    </S.WrapperOut>
  );
}

import * as S from "./landing.styles";


export default function LandingPresenter(){
  return (
    <S.WrapperOut>
      <S.WrapperTop>
        <S.Ham src ="/image/ham.png"></S.Ham>
        <S.MainFlex>
          <S.MainImg src="/image/main.png"></S.MainImg>
          <S.MainOrange>
            <S.MainText>"슬리퍼가 대신 다녀올게."</S.MainText>
            <S.SubText>이사가는 곳 동네 인프라를 이제는 슬리퍼로 알아보세요!</S.SubText>
          </S.MainOrange>
        </S.MainFlex>
        <S.Slipper src="/image/slipper.png"></S.Slipper>
      </S.WrapperTop>

      <S.WrapperBottom>
      </S.WrapperBottom>
      <S.Footer></S.Footer>

    </S.WrapperOut>
  )
}
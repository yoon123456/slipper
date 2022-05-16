import * as S from "./payment.styled";

export default function PaymentPresenter() {
  return (
    <>
      <S.Warrap>
        <S.WarrapLeft>
          <S.WarrapLeft2>
            <S.WarrapInLeft src="/image/searchbutton.png"></S.WarrapInLeft>
            <S.WarrapInLeftCuponDiv />
          </S.WarrapLeft2>
        </S.WarrapLeft>

        <S.WarrapRight>
          <S.WarrapRight2>
            <S.WarrapInRightInput3 placeholder="3달간 슬리퍼를 신어보세요!" />
            <S.WarrapInRightInput2 placeholder="2달간 슬리퍼를 신어보세요!" />
            <S.WarrapInRightInput1 placeholder="1달간 슬리퍼를 신어보세요!" />
          </S.WarrapRight2>
        </S.WarrapRight>
        <S.WarrapInRightBottom>
          <S.WarrapInLeftCupon />
          <S.WarrapInRightInput />
          <S.WarrapInRightBtn>슬리퍼 구매</S.WarrapInRightBtn>
        </S.WarrapInRightBottom>
      </S.Warrap>
    </>
  );
}

// <S.WarrapRight>
// <S.WarrapInRight>
//   <S.WarrapInput3Week placeholder="3달간 슬리퍼를 신어보세요!" />
//   <S.WarrapInput2Week placeholder="2달간 슬리퍼를 신어보세요!" />
//   <S.WarrapInput1Week placeholder="1달간 슬리퍼를 신어보세요!" />
//   <S.WarrapInSplipperBox>
//     <S.WarrapInputWeek />
//     {/* <S.WarraPaymentButton>슬리퍼 구매!</S.WarraPaymentButton> */}
//   </S.WarrapInSplipperBox>
// </S.WarrapInRight>
// </S.WarrapRight>

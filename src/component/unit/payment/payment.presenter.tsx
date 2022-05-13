import * as S from "./payment.styled";

export default function PaymentPresenter() {
  return (
    <>
      <S.WrapperOut>
        <S.WrapperInLeft></S.WrapperInLeft>
        <S.WrapperInMiddle>
          <S.WrapperInMiddlTop></S.WrapperInMiddlTop>
          <S.WrapperInMiddleM>
            <S.WrapperLeft>
              <S.WrapperLeftIamgeBox>
                <S.WrapperLeftIamge></S.WrapperLeftIamge>
              </S.WrapperLeftIamgeBox>
            </S.WrapperLeft>
            <S.WrapperRight></S.WrapperRight>
          </S.WrapperInMiddleM>
          <S.WrapperInMiddleBottom></S.WrapperInMiddleBottom>
        </S.WrapperInMiddle>
        <S.WrapperInRight></S.WrapperInRight>
      </S.WrapperOut>
    </>
  );
}

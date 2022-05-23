// 해리 수정 5/18
import * as S from "./payment.styles";
import Payment from "../../../commons/pay/payment";
export default function PaymentPresenter() {
  return (
    <S.WrapperOut>
      <S.BodyWrapper>
        <S.Head>Choose your SLIPPER!</S.Head>
        <S.VoucherWrapper>
          <S.Voucher>
            {/* <S.Explain>7일간 슬리퍼를 신어보세요!</S.Explain> */}
            <S.ExplainRow>
              <S.ExplainColored>7일간 </S.ExplainColored>
              <S.Explain>슬리퍼를 신어보세요!</S.Explain>
            </S.ExplainRow>
            <S.Price>₩2,000</S.Price>
            <S.Period>/ 7days</S.Period>
            {/* <S.Button>Get started</S.Button> */}
            <Payment />
          </S.Voucher>
          <S.Voucher>
            {/* <S.Explain>1달간 슬리퍼를 신어보세요!</S.Explain> */}
            <S.ExplainRow>
              <S.ExplainColored>1달간 </S.ExplainColored>
              <S.Explain>슬리퍼를 신어보세요!</S.Explain>
            </S.ExplainRow>
            <S.Price>₩7,000</S.Price>
            <S.Period>/ 1month</S.Period>
            <S.Button>Get started</S.Button>
          </S.Voucher>
          <S.Voucher>
            {/* <S.Explain>3달간 슬리퍼를 신어보세요!</S.Explain> */}
            <S.ExplainRow>
              <S.ExplainColored>3달간 </S.ExplainColored>
              <S.Explain>슬리퍼를 신어보세요!</S.Explain>
            </S.ExplainRow>
            <S.Price>₩20,000</S.Price>
            <S.Period>/ 3months</S.Period>
            <S.Button>Get started</S.Button>
          </S.Voucher>
        </S.VoucherWrapper>
      </S.BodyWrapper>
    </S.WrapperOut>
  );
}

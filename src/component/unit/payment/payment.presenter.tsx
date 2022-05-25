// 해리 수정 5/18
import * as S from "./payment.styles";
import Payment from "../../../commons/pay/payment";
import { PaymentIprops } from "./payment.types";
export default function PaymentPresenter(props: PaymentIprops) {
  return (
    <S.WrapperOut>
      <S.BodyWrapper>
        <S.Head>Choose your SLIPPER!</S.Head>
        <S.VoucherWrapper>
          <S.Voucher>
            <S.ExplainRow>
              <S.ExplainColored>7일간 </S.ExplainColored>
              <S.Explain>슬리퍼를 신어보세요!</S.Explain>
            </S.ExplainRow>
            <S.Price>₩2,000</S.Price>
            <S.Period>/ 7days</S.Period>

            <Payment
              MonthFlag={props.MonthFlag}
              data={props.data}
              value={100}
            />
          </S.Voucher>
          <S.Voucher>
            <S.ExplainRow>
              <S.ExplainColored>1달간 </S.ExplainColored>
              <S.Explain>슬리퍼를 신어보세요!</S.Explain>
            </S.ExplainRow>
            <S.Price>₩7,000</S.Price>
            <S.Period>/ 1month</S.Period>
            <Payment
              MonthFlag={props.MonthFlag}
              data={props.data}
              value={7000}
            />
          </S.Voucher>
          <S.Voucher>
            <S.ExplainRow>
              <S.ExplainColored>3달간 </S.ExplainColored>
              <S.Explain>슬리퍼를 신어보세요!</S.Explain>
            </S.ExplainRow>
            <S.Price>₩20,000</S.Price>
            <S.Period>/ 3months</S.Period>
            <Payment
              MonthFlag={props.MonthFlag}
              data={props.data}
              value={20000}
            />
          </S.Voucher>
        </S.VoucherWrapper>
      </S.BodyWrapper>
    </S.WrapperOut>
  );
}

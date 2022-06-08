import * as S from "./mypaids.styles";
import { IMypaidsPresenter } from "./mypaids.types";
import InfiniteScroll from "react-infinite-scroller";
import { getDate } from "../../../commons/libraries/date";

export default function MypaidsPresenter(props: IMypaidsPresenter) {
  return (
    <S.WrapperOut>
      <S.Head>이용권 결제 내역</S.Head>
      <S.BodyWrapper>
        <S.BodyHeadWrapper>
          <S.BodyHeadFirst>이용권</S.BodyHeadFirst>
          <S.BodyHead>결제일시</S.BodyHead>
          <S.BodyHead>만료일시</S.BodyHead>
        </S.BodyHeadWrapper>
        <S.Body>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.loadMore}
            hasMore={true}
            useWindow={false}
          >
            {props.data?.fetchPayments.map((el: any) => (
              <S.RowWrapper key={el.id}>
                <S.RowFirst id={el.id}>{el.subType}</S.RowFirst>
                <S.Row id={el.id}>{getDate(el.subStart)}</S.Row>
                <S.Row id={el.id}>{getDate(el.subEnd)}</S.Row>
              </S.RowWrapper>
            )) || <S.RowWrapper></S.RowWrapper>}
          </InfiniteScroll>
        </S.Body>
      </S.BodyWrapper>
    </S.WrapperOut>
  );
}

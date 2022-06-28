import styled from "@emotion/styled";

export const WrapperOut = styled.div`
  width: 100%;
`;
export const Head = styled.div`
  font-size: 1.8rem;
  border-bottom: 1px solid gainsboro;
  padding: 5% 1% 2% 2%;
`;
export const BodyWrapper = styled.div`
  width: 100%;
  padding: 1%;
`;
export const FlexBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
export const BodyHeadWrapper = styled.div`
  width: 100%;
  height: 55px;
  margin: 1%;
  padding: 2%;
  display: flex;
  align-items: center;
`;
export const BodyHeadFirst = styled.div`
  width: 100px;
  font-size: 1.4rem;
  text-align: center;
`;

export const KeyDiv = styled.span`
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;
export const BodyHead = styled.div`
  width: 20%;
  font-size: 1.2rem;
  text-align: center;
`;
export const Body = styled.div`
  width: 100%;
  height: 500px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const RowWrapper = styled.div`
  width: 100%;
  height: 55px;
  margin: 1%;
  padding: 2%;
  display: flex;
  align-items: center;
  background-color: #f4f7f9b3;
  border-radius: 5px;
`;
export const RowFirst = styled.div`
  width: 100px;
  font-size: 1.4rem;
  text-align: center;
`;
export const Row = styled.div`
  width: 20%;

  font-size: 1.1rem;
  text-align: center;
`;

export const refundPaymentButtonHidden = styled.div`
  cursor: pointer;
  width: 20%;
  text-align: center;

  :hover {
    text-decoration: underline;
  }
`;
export const refundPaymentButton = styled.div`
  cursor: pointer;
  display: none;
  :hover {
    text-decoration: underline;
  }
`;

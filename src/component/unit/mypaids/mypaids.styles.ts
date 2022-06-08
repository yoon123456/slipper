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
  display: flex;
  flex-direction: column;
`;
export const BodyHeadWrapper = styled.div`
  width: 100%;
  height: 5px;
  margin: 1%;
  padding: 2%;
  padding-top: 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
`;
export const BodyHeadFirst = styled.div`
  width: 20%;
  font-size: 1.5rem;
`;
export const BodyHead = styled.div`
  width: 34.5%;
  font-size: 1.5rem;
`;
export const Body = styled.div`
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
  flex-direction: row;
  align-items: center;
  justify-content: left;
  background-color: #f4f7f9b3;
  border-radius: 5px;
`;
export const RowFirst = styled.div`
  width: 20%;
  font-size: 1.4rem;
`;
export const Row = styled.div`
  width: 35%;
  font-size: 1.4rem;
`;

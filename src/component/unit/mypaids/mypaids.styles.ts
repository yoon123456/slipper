import styled from "@emotion/styled";

export const WrapperOut = styled.div`
  width: 100%;
  /* padding: 5%; */
`;
export const Head = styled.div`
  font-size: 2rem;
  border-bottom: 1px solid gainsboro;
  padding: 5% 1% 2% 2%;
`;
export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BodyHeadWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 5% 5% 1% 5%;
`;
export const BodyHead = styled.div`
  font-size: 1.6rem;
  width: 30%;
  text-align: center;
  padding-right: 4%;
`;
export const Body = styled.div`
  /* padding: 1%; */
  height: 400px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const RowWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #f5f7f9;
  border-radius: 5px;
  padding: 1% 4% 1% 4%;
  margin: 1%;
  :hover {
    box-shadow: 5px 7px 42px 1px rgba(0, 0, 0, 0.12);
  }
`;
export const Row = styled.div`
  font-size: 1.4rem;
  width: 30%;
  text-align: center;
  padding-right: 5%;
`;

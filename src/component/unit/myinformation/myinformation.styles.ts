// 해리 작업 5/15
import styled from "@emotion/styled";

export const WrapperRight = styled.div`
  width: 100%;
  /* height: 100%; */
  /* padding: 40px; */
  /* border-radius: 40px; */
  /* background-color: #f5f7f9; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const Body = styled.div`
  padding: 100px 40px 100px 10px;
  width: 100%;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* padding-top: 60px; */
  /* padding-bottom: 100px; */
`;
export const BodyRow = styled.div`
  width: 100%;
  /* height: 10px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
export const Header = styled.div`
  width: 20%;
  font-size: 16px;
  font-weight: bold;
  /* color: #ffcfec; */
  color: #1d1a5c;
  text-align: center;
`;
export const Contents = styled.div`
  width: 80%;
  height: 40px;
  font-size: 16px;
  /* box-shadow: 0px 0px 5px gray; */
  border-radius: 10px;
  padding: 8px;
  padding-left: 16px;
  background-color: white;
`;
export const Introduction = styled.div`
  width: 80%;
  height: 150px;
  font-size: 16px;
  /* box-shadow: 0px 0px 5px gray; */
  border-radius: 10px;
  padding: 10px;
  background-color: white;
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 50px;
  /* padding-top: 100px; */
  padding-left: 200px;
  padding-right: 200px;
`;
export const Button = styled.div`
  width: 70px;
  height: 30px;
  padding: 2px;
  text-align: center;
  font-size: 14px;
  color: #ffcfec;
  border: 2px solid #ffcfec;
  border-radius: 17px;
  cursor: pointer;
  :hover {
    background-color: #ffcfec;
    color: white;
  }
`;

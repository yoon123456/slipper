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
  justify-content: space-between;
  padding: 100px 40px 0px 10px;
`;
export const Body = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* padding-top: 60px; */
  /* padding-bottom: 100px; */
  margin-top: 50px;
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
  font-size: 1.6rem;
  font-weight: bold;
  /* color: #ffcfec; */
  color: #008af6;
  text-align: center;
`;
export const Contents = styled.div`
  width: 80%;
  height: 40px;
  font-size: 1.4rem;
  color: black;
  /* box-shadow: 0px 0px 5px gray; */
  border-radius: 10px;
  padding: 1.5%;
  padding-left: 2%;
  background-color: #f5f7f9;
`;
export const ContentsEdit = styled.input`
  width: 80%;
  height: 40px;
  font-size: 1.4rem;
  color: black;
  /* box-shadow: 0px 0px 5px gray; */
  border-radius: 10px;
  padding: 1.5%;
  /* padding-left: 16px; */
  background-color: #f5f7f9;
  border: none;
  outline: none;
`;
export const Introduction = styled.div`
  width: 80%;
  height: 150px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  font-size: 1.4rem;
  color: black;
  /* box-shadow: 0px 0px 5px gray; */
  border-radius: 10px;
  padding: 1.5%;
  background-color: #f5f7f9;
`;
export const IntroductionEdit = styled.input`
  width: 80%;
  height: 150px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  font-size: 1.4rem;
  color: black;
  /* box-shadow: 0px 0px 5px gray; */
  border-radius: 10px;
  padding: 1.5%;
  background-color: #f5f7f9;
  border: none;
  outline: none;
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 130px;
  /* padding-top: 100px; */
  padding-left: 200px;
  padding-right: 200px;
`;
export const Button = styled.div`
  width: 90px;
  height: 40px;
  padding: 6px;
  text-align: center;
  font-size: 1.5rem;
  color: #008af6;
  border: 2px solid #008af6;
  border-radius: 17px;
  cursor: pointer;
  :hover {
    background-color: #008af6;
    color: white;
  }
`;

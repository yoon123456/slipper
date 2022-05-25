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
  /* padding: 100px 40px 0px 10px; */
`;
export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 15%;
  padding-right: 7%;
`;
export const ImgEditWrapper = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  margin-bottom: 30px;
  padding-right: 35%;
`;
export const ImgEditHeader = styled.div`
  width: 30%;
  /* height: 100px; */
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
`;
export const BodyRow = styled.div`
  width: 100%;
  /* height: 90px; */
  /* height: 100%; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
export const Header = styled.div`
  width: 20%;
  /* height: 100px; */
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  /* vertical-align: top; */
  /* display: flex;
  flex-direction: row;
  justify-content: initial; */
  /* position: static; */
`;
export const Contents = styled.div`
  width: 85%;
  height: 40px;
  font-size: 1.4rem;
  border-radius: 10px;
  padding: 1.3%;
`;
export const ContentsEdit = styled.input`
  width: 85%;
  height: 40px;
  font-size: 1.4rem;
  color: black;
  border-radius: 10px;
  padding: 1.4%;
  background-color: #f5f7f9;
  border: none;
  outline: none;
`;
export const Introduction = styled.div`
  width: 85%;
  height: 260px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  font-size: 1.4rem;
  color: black;
  border-radius: 10px;
  padding: 1.5%;
`;
export const IntroductionEdit = styled.input`
  width: 80%;
  height: 200px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  font-size: 1.4rem;
  color: black;
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
  margin-top: 7%;
  /* padding-top: 100px; */
  padding-left: 200px;
  padding-right: 200px;
`;
export const Button = styled.button`
  width: 30%;
  height: 3%;
  /* margin: 10%; */
  padding: 2%;
  text-align: center;
  color: gray;
  font-size: 1.3rem;
  text-decoration: none;
  text-shadow: 0px 0px 0px #f0f0f0;
  border: none;
  border-radius: 10px;
  background-color: white;
  background: linear-gradient(to bottom, white 5%, #ffffff 100%);
  display: inline-block;
  box-shadow: 3px 3px 7px 0 rgba(0, 0, 0, 0.25),
    -4px -4px 7px 0 rgba(255, 255, 255, 0.3);
  cursor: pointer;
  :hover {
    background: linear-gradient(to bottom, #ffffff 5%, #f0f0f0 100%);
    background-color: #ffffff;
  }
  :active {
    position: relative;
    top: 1px;
  }
`;

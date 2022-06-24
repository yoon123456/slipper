import styled from "@emotion/styled";
import { Iprops } from "../../../component/unit/boards/list/list.types";
import { IPropsHeader } from "./header.types";

export const WrapperOut = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 9px 11px 0px #f2f2f2; ;
`;

// 데이터
export const WrapperInUser = styled.div`
  text-align: center;
  color: #008af6;
  font-size: 2.5rem;
  font-family: "HallymGothic-Regular";
  font-weight: bold;
  margin: 1%;
  letter-spacing: 5px;
`;

export const WrapperInMy = styled.div`
  text-align: center;
  color: #008af6;
  font-size: 1.7rem;
  font-family: "HallymGothic-Regular";
  letter-spacing: 2px;
`;
// 햄버거
export const WrapperInHam = styled.div`
  margin: 0 auto;
`;

// 해리테스트
export const TestWrapper = styled.div`
  width: 800px;
  display: flex;
  text-align: center;
`;
export const Board = styled.div`
  width: 33.3%;
  font-size: 1.6rem;
  cursor: pointer;
  color: ${(props: IPropsHeader) => (props.ClickBoard ? "#008af6" : "#000")};
`;
export const Payment = styled.div`
  width: 33.3%;
  font-size: 1.6rem;
  cursor: pointer;
  color: ${(props: IPropsHeader) => (props.ClickPayment ? "#008af6" : "#000")};
`;
export const Mypage = styled.div`
  width: 33.3%;
  font-size: 1.6rem;
  cursor: pointer;
  color: ${(props: IPropsHeader) => (props.ClickMypage ? "#008af6" : "#000")};
`;
export const LogOut = styled.div`
  width: 115px;
  height: 30px;
  line-height: 2.1;
  background-color: #008af6;
  color: white;
  border-radius: 10px;
  font-size: 1.4rem;
  text-align: center;
  margin-left: 20px;
  cursor: pointer;
`;

export const WrapperOutH = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 9px 11px 0px #f2f2f2;
  font-family: "HallymGothic-Regular";
`;
export const WrapperBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
// 로고 박스
export const WrapperInLogo = styled.div`
  width: 100px;
  margin-left: 50px;
  cursor: pointer;
  :hover {
    font-size: 1.4rem;
  }
`;

export const WrapperIn = styled.div`
  width: 48%;
  display: flex;

  align-items: center;
`;
//#008af6;
export const WrapperUser = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;
export const WrapperUserLogin = styled.div`
  display: flex;
  align-items: center;
`;
export const WrapUser = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const MeneWrap = styled.div`
  width: 20%;
  display: flex;
  text-align: center;
`;

export const Menu = styled.div`
  width: 50%;
  font-size: 1.6rem;
  cursor: pointer;
  :hover {
    color: #008af6;
  }
`;
export const LogoutIcon = styled.img`
  width: 18%;
  margin-left: 5px;
  margin-bottom: 3px;
`;

export const LogIn = styled.div`
  width: 110px;
  height: 30px;
  line-height: 2.1;
  color: black;
  border-radius: 10px;
  font-size: 1.6rem;
  text-align: center;
  cursor: pointer;
  :hover {
    color: #008af6;
  }
`;
export const UserImage = styled.div`
  width: 100px;
  position: relative;
`;
export const UserImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const UserImg = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 10px;
`;

export const Drop = styled.img`
  width: 20px;
  height: 20px;
`;

export const DropdownList = styled.div`
  display: ${(props: Iprops) => (props.over ? "block" : "none")};
  position: absolute;
  top: 50;
  background-color: white;
  width: 100px;
  z-index: 9;
  text-align: center;
  margin-top: 10px;
`;

export const List = styled.div`
  color: black;
  padding: 10px 20px;
  font-size: 1.2rem;
  display: block;
  cursor: pointer;
`;

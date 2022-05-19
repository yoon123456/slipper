// 해리 작업 5/13
import styled from "@emotion/styled";
import { IProps } from "./mypage.types";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #f5f7f9;
`;
export const WrapperOut = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 1%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: "HallymGothic-Regular";
`;
export const WrapperLeft = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  margin-right: 2%;
  padding: 5% 0% 17% 0%;
`;
export const ProfileImage = styled.img`
  width: 60%;
  height: 120px;
  margin: 40px;
  background-color: white;
`;
export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* color: gray; */
  text-align: center;
  padding: 0% 10% 0% 22%;
  height: 60px;
  font-size: 2.5rem;
  cursor: pointer;
  /* :hover {
    width: 100%;
    background-color: #f5f7f9;
    font-size: 2.8rem;
    padding: 0% 10% 0% 22%;
  } */
`;
export const Icon = styled.img`
  height: 50%;
`;
export const MenuButton = styled.div`
  width: 80%;
  color: ${(props: IProps) => (props.mypageRight ? "#008af6" : "black")};
`;
export const WrapperRight = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;
export const NicknameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: none;
  padding: 3%;
`;
export const NicknameFront = styled.div`
  font-size: 2.3rem;
  font-weight: bold;
  color: #008af6;
`;
export const Nickname = styled.div`
  font-size: 2.2rem;
  color: #008af6;
`;
export const Right = styled.div`
  width: 100%;
  height: 650px;
  padding: 5%;
  background-color: white;
  border: 1px solid #f5f7f9;
`;

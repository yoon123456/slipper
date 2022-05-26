// 해리 작업 5/13
import styled from "@emotion/styled";
import { IProps } from "./mypage.types";

// export const Wrapper = styled.div`
//   width: 100%;
//   /* background-color: #f5f7f9; */
// `;
export const WrapperOut = styled.div`
  width: 55%;
  margin: 5% auto;
  /* padding: 1%; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: "HallymGothic-Regular";
  box-shadow: 10px 10px 20px 3px rgba(214, 214, 214, 1);
  border-radius: 41px;
`;
export const WrapperLeft = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  /* margin-right: 2%; */
  padding: 5% 0% 10% 0%;
  border-radius: 41px 0 0 41px;
  border-right: 1px solid lightgray;
`;
export const NicknameWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: none;
  padding: 2%;
`;
export const NicknameInput = styled.input`
  width: 65%;
  text-align: center;
  padding: 1%;
  font-size: 1.5rem;
  /* color: #008af6; */
  border: none;
  border-bottom: 1px solid lightgray;
  outline: none;
`;
export const Nickname = styled.div`
  font-size: 2.1rem;
  color: #008af6;
`;
export const NicknameFixed = styled.div`
  font-size: 1.5rem;
  line-height: 2;
  color: #008af6;
`;
export const FinishNicknameEdit = styled.div`
  width: 20%;
  border: 1px solid lightgray;
  padding: 1%;
  border-radius: 5px;
  text-align: center;
  font-size: 1rem;
  margin-left: 5%;
  cursor: pointer;
`;
export const OpenNicknameEdit = styled.img`
  width: 6%;
  height: 16px;
  cursor: pointer;
`;
export const ProfileImage = styled.img`
  width: 80%;
  height: 160px;
  margin: 20px;
  text-align: center;
  background-color: white;
`;
export const Introduce = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid lightgray;
  background-color: red;
`;
export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  font-size: 2.5rem;
  cursor: pointer;
  color: ${(props: IProps) => (props.mypageRight ? "#008AF6" : "black")};
  background-color: ${(props: IProps) =>
    props.mypageRight ? "#f4f7f9b3" : "none"};
  border-left: ${(props: IProps) =>
    props.mypageRight ? "4px solid #008AF6" : "none"};
  padding: ${(props: IProps) =>
    props.mypageRight ? "0% 10% 0% 27.5%" : "0% 10% 0% 29%"};
`;
export const Icon = styled.img`
  width: 11%;
  /* height: 40%; */
`;
export const MenuButton = styled.div`
  width: 80%;
`;
export const WrapperRight = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
`;
export const Right = styled.div`
  width: 100%;
  padding: 5%;
`;

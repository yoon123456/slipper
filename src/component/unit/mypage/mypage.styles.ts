// haeri 작업시작 22.05.13
import styled from "@emotion/styled";
import { IProps } from "./mypage.types";

export const WrapperOut = styled.div`
  width: 80%;
  height: 800px;
  margin: 8% auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: "HallymGothic-Regular";
`;
export const WrapperLeft = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 5% 0% 10% 0%;
  border-radius: 41px 0 0 41px;
`;
export const LeftTop = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const NicknameRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: inherit;
  justify-content: center;
  margin-bottom: 10%;
`;
export const Nickname = styled.div`
  font-size: 2.2rem;
  color: #008af6;
`;
export const NicknameFixed = styled.div`
  font-size: 1.7rem;
  line-height: 2;
  color: #008af6;
  margin-left: 5px;
`;
export const EditIcon = styled.img`
  width: 19px;
  height: 21px;
  margin-left: 10px;
  cursor: pointer;
`;
export const ProfileImage = styled.img`
  object-fit: cover;
  width: 110px;
  height: 110px;
  margin-bottom: 10%;
`;
export const Introduce = styled.div`
  width: 90%;
  height: 130px;
  font-size: 1.4rem;
  text-align: center;
  background-color: #f4f7f9b3;
  padding: 5%;
  margin-top: 10%;
  margin-bottom: 20%;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const ModalHead = styled.div`
  font-size: 1.6rem;
  padding-bottom: 1%;
  color: #008af6;
`;
export const NicknameEditInput = styled.input`
  width: 100%;
  height: 30px;
  text-align: start;
  padding-left: 1%;
  margin-bottom: 7%;
  font-size: 1.2rem;
  font-family: "HallymGothic-Regular";
  border: 1px solid lightgray;
  outline: none;
`;
export const ProfileImageEditWrapper = styled.div`
  height: 10%;
  display: flex;
  flex-direction: column;
  /* justify-content: safe; */
  padding-bottom: 7%;
`;
export const IntroduceEditInput = styled.input`
  width: 100%;
  height: 100px;
  text-align: start;
  padding: 2%;
  font-size: 1.3rem;
  font-family: "HallymGothic-Regular";
  border: 1px solid lightgray;
  outline: none;
`;
export const MenuWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
  width: 14%;
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

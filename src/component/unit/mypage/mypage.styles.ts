// 해리 작업 5/13
import styled from "@emotion/styled";

export const WrapperOut = styled.div`
  width: 50%;
  /* margin: 0 auto; */
  margin: 50px auto;
  padding: 10px;
  display: flex;
  flex-direction: row;
  border-radius: 40px;
  /* background-color: #1d1a5c; */
  background-color: #008af6;
  box-shadow: 0px 0px 10px gray;
  font-family: "HallymGothic-Regular";
`;
export const WrapperLeft = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* padding: 20px; */
  padding-top: 50px;
  padding-bottom: 80px;
`;
export const NicknameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const NicknameFront = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: white;
`;
export const Nickname = styled.div`
  font-size: 1.8rem;
  /* font-weight: bold; */
  color: white;
`;
export const ProfileImage = styled.img`
  width: 60%;
  height: 170px;
  margin: 40px;
  background-color: white;
`;
export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-between; */
  width: 100%;
  color: white;
  text-align: center;
  /* padding-left: 8%; */
  padding: 0% 10% 0% 25%;
  /* padding: 10px;
  padding-left: 80px;
  padding-right: 40px; */
  height: 60px;
  font-size: 2.3rem;
  :hover {
    /* color: #1d1a5c; */
    background-color: #88baf959;
    border-radius: 30px;
    font-weight: bold;
    font-size: 2.5rem;
    padding: 0% 0.5% 0% 15%;
    width: 80%;
    /* margin: 0% 20% 0% 20%; */
    /* margin: 10%; */
    /* padding: 7px;
    padding-left: 55px;
    padding-right: 60px; */
    /* margin-left: 45px;
    margin-right: 45px; */
  }
  cursor: pointer;
`;
export const Icon = styled.img`
  /* width: 20%; */
  height: 50%;
`;
export const MenuButton = styled.div`
  font-weight: bold;
  /* color: #1d1a5c; */
  width: 80%;
`;
export const WrapperRight = styled.div`
  width: 70%;
  border-radius: 40px;
  /* background-color: #f5f7f9; */
  background-color: white;
`;

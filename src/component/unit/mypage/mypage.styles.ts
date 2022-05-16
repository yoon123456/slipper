// 해리 작업 5/13
import styled from "@emotion/styled";

export const WrapperOut = styled.div`
  width: 50%;
  /* margin: 0 auto; */
  margin: 50px auto;
  /* padding: 10px; */
  display: flex;
  flex-direction: row;
  border-radius: 40px;
  background-color: #1d1a5c;
  box-shadow: 0px 0px 10px gray;
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
export const Nickname = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: white;
`;
export const ProfileImage = styled.img`
  width: 60%;
  height: 170px;
  margin: 40px;
  background-color: gray;
`;
export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-between; */
  width: 100%;
  color: white;
  text-align: center;
  padding: 10px;
  padding-left: 80px;
  padding-right: 40px;
  height: 60px;
  :hover {
    /* color: #1d1a5c; */
    background-color: #352d7b;
    border-radius: 20px;
    font-weight: bold;
    font-size: 18px;
    padding: 7px;
    padding-left: 50px;
    padding-right: 50px;
    margin-left: 45px;
  }
  cursor: pointer;
`;
export const Icon = styled.img`
  /* width: 20%; */
  height: 70%;
`;
export const MenuButton = styled.div`
  /* font-size: 12px; */
  font-weight: bold;
  /* color: #1d1a5c; */
  width: 80%;
`;
export const WrapperRight = styled.div`
  width: 70%;
  border-radius: 40px;
  background-color: #f5f7f9;
`;

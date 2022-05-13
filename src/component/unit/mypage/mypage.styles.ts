// 해리 작업 5/13
import styled from "@emotion/styled";

export const WrapperOut = styled.div`
  width: 50%;
  margin: 0 auto;
  padding-bottom: 90px;
  padding-top: 90px;
`;
export const WrapperTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const WrapperLeft = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
export const ProfileImage = styled.img`
  width: 100%;
  height: 200px;
`;
export const Introduction = styled.div`
  width: 100%;
  height: 150px;
  font-size: 16px;
  margin-top: 20px;
  border: 4px solid #ffcfec;
  border-style: dashed;
  border-radius: 15px;
  padding: 10px;
`;
export const WrapperRight = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  padding-bottom: 120px;
`;
export const RightRow = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const Header = styled.div`
  width: 20%;
  font-size: 16px;
  font-weight: bold;
  /* color: #ffcfec; */
  color: #008af6;
  text-align: center;
`;
export const Contents = styled.div`
  width: 80%;
  font-size: 16px;
`;
export const PaymentDetails = styled.div`
  width: 80%;
  height: 150px;
  display: flex;
  flex-direction: column;
`;
export const WrapperBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-left: 250px;
  padding-right: 250px;
  margin-top: 40px;
`;
export const Button = styled.div`
  width: 90px;
  height: 40px;
  padding: 5px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #008af6;
  border: 2px solid #008af6;
  border-radius: 17px;
  cursor: pointer;
  :hover {
    background-color: #008af6;
    color: white;
  }
`;

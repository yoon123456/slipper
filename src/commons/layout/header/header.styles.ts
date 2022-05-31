import styled from "@emotion/styled";

export const WrapperOut = styled.div`
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 9px 11px 0px #f2f2f2; ;
`;
export const WrapperBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 910%;
`;
// 로고 박스
export const WrapperInLogo = styled.div`
  width: 150px;
  margin-left: 80px;
  cursor: pointer;
  :hover {
    font-size: 1.4rem;
  }
`;

// 데이터 및 햄버거 박스
export const WrapperIn = styled.div`
  /* width: 20%; */
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 50px;
  font-family: "HallymGothic-Regular";
`;
//#008af6;

export const WrapUser = styled.div`
  width: 380px;
  display: flex;
  align-items: center;
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
export const Test = styled.div`
  width: 33.3%;
  font-size: 1.6rem;
  cursor: pointer;
  :hover {
    color: #008af6;
  }
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
export const LogIn = styled.div`
  width: 115px;
  height: 30px;
  line-height: 2.1;
  background-color: #008af6;
  color: white;
  border-radius: 10px;
  font-size: 1.4rem;
  text-align: center;
  margin-right: 70px;
  cursor: pointer;
`;

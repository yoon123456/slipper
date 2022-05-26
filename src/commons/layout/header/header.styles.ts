import styled from "@emotion/styled";

export const WrapperOut = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gainsboro;
`;

// 로고 박스
export const WrapperInLogo = styled.div`
  margin-left: 20px;
  cursor: pointer;
  :hover {
    font-size: 1.4rem;
  }
`;

// 데이터 및 햄버거 박스
export const WrapperIn = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  padding-right: 50px;
  font-family: "HallymGothic-Regular";
`;
//#008af6;

export const WrapUser = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
`;
// 데이터
export const WrapperInUser = styled.div`
  text-align: center;
  color: #008af6;
  font-size: 2.5rem;
  font-family: "HallymGothic-Regular";
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

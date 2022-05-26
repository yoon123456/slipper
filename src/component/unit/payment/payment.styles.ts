// 해리 수정 5/18
import styled from "@emotion/styled";

export const WrapperOut = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    to bottom,
    #008af6 0%,
    #008af6 50%,
    /* #fcfcfc 50%, */ white 50%,
    /* #fcfcfc 100% */ white 100%
  );
  font-family: "HallymGothic-Regular";
`;
export const BodyWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 5.5% 0% 0% 0%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
`;
export const Head = styled.div`
  font-size: 3.5rem;
  margin-bottom: 7%;
  color: white;
  text-align: center;
`;
export const VoucherWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Voucher = styled.div`
  width: 32.5%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: none;
  border-radius: 5px;
  background-color: white;
  padding: 27% 2% 27% 2%;
  box-shadow: 0px 15px 12px -1px rgba(199, 199, 199, 1);
  :hover {
    transform: scale(1.1);
    /* animation-duration: 10s; */
    animation-delay: 10s;
  }
`;
export const ExplainRow = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;
  margin-bottom: 20%;
`;
export const ExplainColored = styled.div`
  font-size: 1.9rem;
  color: #008af6;
`;
export const Explain = styled.div`
  font-size: 1.6rem;
`;
export const Price = styled.div`
  font-size: 2.7rem;
`;
export const Period = styled.div`
  font-size: 1.8rem;
  margin-bottom: 10%;
`;
export const Button = styled.div`
  padding: 3% 10% 3% 10%;
  font-size: 1.2rem;
  color: white;
  border: #ffcfec;
  background-color: #ffcfec;
  border-radius: 5%;
  cursor: pointer;
  :hover {
    padding: 2.2% 9% 2.2% 9%;
    background-color: white;
    color: #ffcfec;
    border: 2px solid #ffcfec;
  }
`;

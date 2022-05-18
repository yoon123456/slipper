// 해리 작업 5/12
import styled from "@emotion/styled";

export const WrapperOut = styled.div`
  font-family: "HallymGothic-Regular";
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;
export const StepWrapperColored = styled.div`
  width: 33.3%;
  padding: 2%;
  background-color: #008af6;
  box-shadow: 3px 0px 8px 3px rgba(217, 217, 217, 1);
  border: none;
`;
export const StepWrapper = styled.div`
  width: 33.3%;
  padding: 2%;
  box-shadow: 14px 0px 6px -7px rgba(237, 237, 237, 1);
  border: none;
`;
export const StepHead = styled.div`
  margin-bottom: 1%;
  font-size: 3rem;
  color: #008af6;
`;
export const StepExplain = styled.div`
  margin-bottom: 7%;
  font-size: 1.6rem;
`;
export const Head = styled.div`
  margin-bottom: 1%;
  font-size: 1.5rem;
  color: #008af6;
  /* color: white; */
`;
export const Input = styled.input`
  width: 100%;
  padding: 1%;
  margin-bottom: 4%;
  border: none;
  border-bottom: 1px solid gainsboro;
  outline: none;
  font-size: 1.4rem;
`;
export const RatingHeader = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  color: #008af6;
`;
export const Rating = styled.img`
  width: 25px;
  height: 25px;
`;
export const RatingWrapper = styled.div`
  margin-bottom: 4%;
`;
export const Map = styled.img`
  width: 100%;
  height: 50%;
  margin-bottom: 5%;
`;
export const Store = styled.input`
  width: 100%;
  padding: 1%;
  font-size: 1.4rem;
  border: none;
  border-bottom: 1px solid #dcdcdc;
  outline: none;
  margin-bottom: 5%;
`;
export const Address = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #dcdcdc;
  padding: 10px;
  font-size: 1.6rem;
  outline: none;
  margin-bottom: 20px;
`;
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 70px;
  margin-bottom: 30px;
`;
export const Image = styled.div`
  width: 22%;
  height: 200px;
  background-color: #dcdcdc;
`;
export const WrapperBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  /* padding-top: ; */
  padding-left: 250px;
  padding-right: 250px;
  margin-top: 40px;
`;
export const Button = styled.div`
  width: 90px;
  height: 40px;
  padding: 5px;
  text-align: center;
  font-size: 1.6rem;
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

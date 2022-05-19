// 해리 작업 5/12
import styled from "@emotion/styled";

export const WrapperOut = styled.div`
  font-family: "HallymGothic-Regular";
  width: 100%;
  /* margin: 0 auto; */
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
export const StepHeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const StepImg = styled.img`
  width: 6%;
  height: 6%;
  margin-right: 1%;
`;
export const StepHead = styled.div`
  margin-bottom: 1%;
  font-size: 3rem;
  color: #008af6;
  text-align: center;
`;
export const StepExplain = styled.div`
  margin-bottom: 10%;
  font-size: 1.6rem;
  text-align: center;
`;
export const Head = styled.div`
  margin-bottom: 1.5%;
  font-size: 1.4rem;
  color: #008af6;
  /* color: white; */
`;
export const HeadCategory = styled.div`
  margin-bottom: 0;
  font-size: 1.4rem;
  color: #008af6;
`;
export const HeadContents = styled.div`
  margin-top: 1%;
  margin-bottom: 1.5%;
  font-size: 1.4rem;
  color: #008af6;
`;
export const Input = styled.input`
  width: 100%;
  padding: 1%;
  margin-bottom: 6%;
  border: none;
  border-bottom: 1px solid gainsboro;
  outline: none;
  font-size: 1.2rem;
  ::placeholder {
    color: lightgray;
  }
`;
export const RatingWrapper = styled.div`
  margin-bottom: 5%;
`;
export const Rating = styled.img`
  width: 25px;
  height: 25px;
`;
export const Map = styled.img`
  width: 100%;
  height: 40%;
  margin-bottom: 6%;
`;
export const ImageWrapper = styled.div`
  width: 100%;
  height: 54%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const ImageRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const Image = styled.div`
  width: 47%;
  height: 200px;
  background-color: gainsboro;
`;
export const ButtonWrapper = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 20% 30% 20% 30%;
`;
export const Button = styled.div`
  width: 40%;
  padding: 2%;
  font-size: 1.6rem;
  text-align: center;
  /* color: #008af6; */
  color: #ffcfec;
  /* border: 2px solid #008af6; */
  border: 2px solid #ffcfec;
  border-radius: 20px;
  cursor: pointer;
  :hover {
    /* background-color: #008af6; */
    background-color: #ffcfec;
    color: white;
  }
`;

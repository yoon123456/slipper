// 해리 작업 5/12
import styled from "@emotion/styled";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;

export const WrapperOut = styled.div`
  font-family: "HallymGothic-Regular";
  width: 50%;
  margin: 6% auto;
  display: flex;
  flex-direction: column;
`;
export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* background-color: red; */
`;
export const TopColumnOn = styled.div`
  width: 33.3%;
  height: 70px;
  padding: 1% 3% 1% 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 5px -5px 8px rgba(214, 214, 214, 1);
  /* box-shadow: inset 0 7px 9px -7px rgba(0, 0, 0, 0.4); */
`;
export const TopColumnOff = styled.div`
  width: 33.3%;
  height: 70px;
  padding: 1% 3% 1% 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #f6f6f6;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  /* box-shadow: -5px -5px 5px rgba(214, 214, 214, 1); */
  /* box-shadow: inset 0 7px 9px -7px rgba(0, 0, 0, 0.4); */
  box-shadow: inset 0 7px 9px -7px #c5c5c5;
`;

export const TopRow = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const TopImg = styled.img`
  width: 25%;
  height: 80%;
  /* margin-right: 1%; */
`;
export const Top = styled.div`
  font-size: 2rem;
`;
export const TopDetail = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
`;
export const StepWrapper = styled.div`
  width: 100%;
  height: 900px;
  padding: 7% 15% 5% 15%;
  border-radius: 0px 0px 41px 41px;
  box-shadow: 0px 10px 20px rgba(214, 214, 214, 1);
`;
export const StepBody = styled.div`
  width: 100%;
  height: 90%;
`;
export const Head = styled.div`
  margin-bottom: 2%;
  font-size: 1.6rem;
  color: #008af6;
  /* color: white; */
`;
export const StyledRangePicker = styled(RangePicker)`
  width: 130%;
  margin-bottom: 12%;
  /* padding: 3% 3% 3% 0; */
`;
export const HeadCategory = styled.div`
  margin-bottom: 0;
  font-size: 1.4rem;
  color: #008af6;
`;
export const HeadContents = styled.div`
  margin-top: 1%;
  margin-bottom: 2%;
  font-size: 1.6rem;
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
  width: 13%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5%;
`;
export const RatingColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-around; */
`;
export const Checkbox = styled.input``;
// export const Rating = styled.img`
// width: 25px;
// height: 25px;
// `;
export const Rating = styled.div`
  /* width: 100px; */
  /* height: 25px; */
  font-size: 1.9rem;
`;
export const StepBottom = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const StepButton = styled.button`
  width: 13%;
  height: 40%;
  /* margin: 10%; */
  padding: 1%;
  color: gray;
  font-size: 1.3rem;
  text-decoration: none;
  text-shadow: 0px 0px 0px #f0f0f0;
  border: none;
  border-radius: 10px;
  background-color: white;
  background: linear-gradient(to bottom, white 5%, #ffffff 100%);
  display: inline-block;
  box-shadow: 3px 3px 7px 0 rgba(0, 0, 0, 0.25),
    -4px -4px 7px 0 rgba(255, 255, 255, 0.3);
  cursor: pointer;
  :hover {
    background: linear-gradient(to bottom, #ffffff 5%, #f0f0f0 100%);
    background-color: #ffffff;
    color: #008af6;
  }
  :active {
    position: relative;
    top: 1px;
  }
`;
export const Map = styled.div`
  width: 100%;
  height: 250px;
  margin-bottom: 6%;
  /* width: 50%;
  margin: 0 auto;
  padding-right: 6%; */
`;
// export const ImageWrapper = styled.div`
//   width: 100%;
//   height: 70%;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;
// `;

export const ImageStepWrapper = styled.div`
  width: 100%;
  height: 900px;
  padding: 5% 5% 5% 5%;
  border-radius: 0px 0px 41px 41px;
  box-shadow: 0px 10px 20px rgba(214, 214, 214, 1);
`;
export const ImageRow = styled.div`
  width: 100%;
  /* padding: 0 10% 0 10%; */
  padding-top: 7%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;
export const ImageBottom = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 11% 0 11%;
`;

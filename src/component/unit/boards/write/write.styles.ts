// haeri 작업시작 22.05.12
import styled from "@emotion/styled";
import { DatePicker } from "antd";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const { RangePicker } = DatePicker;
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

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
`;
export const TopColumnOn = styled.div`
  width: 33.5%;
  height: 90px;
  padding: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  /* box-shadow: 5px -5px 8px rgba(214, 214, 214, 1); */
  box-shadow: 5px -5px 8px rgb(221 220 220);
  /* border: 1px solid lightgray; */
  /* border-bottom: none; */
  margin-top: 20px;
  z-index: 9999;
`;
export const TopColumnOff = styled.div`
  width: 33.5%;
  height: 90px;
  padding: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: gray;
  /* background-color: #f6f6f6; */
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 5px -5px 8px rgb(238 238 238);
  /* border: 1px solid lightgray; */
  /* border-bottom: none; */
  margin-top: 20px;
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
  padding: 3% 15% 8.5% 15%;
  border-radius: 0px 0px 41px 41px;
  /* box-shadow: 0px 10px 20px rgba(214, 214, 214, 1); */
  /* box-shadow: 0px 7px 20px #008af6; */
  box-shadow: 4px 2px 14px 0px #e8e8e8;
  /* border: 1px solid lightgray; */
  /* border-top: none; */
  z-index: 0;
`;
export const StepBody = styled.div`
  width: 100%;
  height: 90%;
`;
export const Head = styled.div`
  /* margin-top: 5%; */
  margin-bottom: 3%;
  font-size: 1.6rem;
  color: #008af6;
`;
export const StyledRangePicker = styled(RangePicker)`
  width: 130%;
  margin-bottom: 15%;
`;
export const HeadCategory = styled.div`
  margin-bottom: 0;
  font-size: 1.4rem;
  color: #008af6;
`;
export const HeadContents = styled.div`
  /* margin-top: 1%; */
  margin-bottom: 3%;
  font-size: 1.6rem;
  color: #008af6;
`;
export const Input = styled.input`
  width: 100%;
  padding: 1%;
  /* margin-bottom: 2%; */
  margin-bottom: 7%;
  border: none;
  border-bottom: 1px solid gainsboro;
  outline: none;
  font-size: 1.2rem;
  ::placeholder {
    color: lightgray;
  }
`;
export const RatingWrapper = styled.div`
  width: 17%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 7%;
  /* padding-top: 1%; */
`;
export const RatingImg = styled.img`
  cursor: pointer;
  width: 25%;
  height: 50%;
`;
export const StyledQuill = styled(ReactQuill)`
  height: 250px;
  margin-bottom: 15px;
  .ql-editor {
    padding: 1%;
    min-height: 320px;
    font-size: 25px;
    line-height: 1.5;
  }
  /* 첫번째 자식요소에 스타일링 css */
  /* .ql-editor .ql-blank::before {
    left: 0;
  } */
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
  :active {
    position: relative;
    top: 2px;
    color: #008af6;
  }
`;
export const ImageStepWrapper = styled.div`
  width: 100%;
  height: 900px;
  padding: 7% 15% 5% 15%;
  border-radius: 0px 0px 41px 41px;
  box-shadow: 0px 10px 20px rgba(214, 214, 214, 1);
`;
export const ImageMap = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 10%;
  padding-bottom: 10%;
`;
export const ImageBottom = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

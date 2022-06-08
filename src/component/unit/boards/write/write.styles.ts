// haeri 작업시작 22.05.12
import styled from "@emotion/styled";
import { DatePicker } from "antd";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { IProps } from "./write.types";

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
export const TopOn = styled.div`
  width: 33.5%;
  height: 90px;
  margin-top: 20px;
  padding: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 0px -6px 9px rgb(221 220 220);
  z-index: 9999;
`;
export const TopOff = styled.div`
  width: 33.5%;
  height: 90px;
  margin-top: 20px;
  padding: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: gray;
  background-color: #f4f7f9b3;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 7px -3px 8px 0px rgb(238 238 238);
`;
export const TopRow = styled.div`
  width: 35%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const TopImg = styled.img`
  width: 25%;
  height: 80%;
`;
export const StepName = styled.div`
  font-size: 2rem;
`;
export const StepDetail = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
`;
export const BodyWrapper = styled.div`
  width: 100%;
  height: 1000px;
  padding: 7% 15% 5% 15%;
  border-radius: 0px 0px 41px 41px;
  box-shadow: 4px 2px 14px 0px #e8e8e8;
  z-index: 0;
`;
export const Body = styled.div`
  width: 100%;
  height: 90%;
`;
export const InputWrapper = styled.div`
  height: 17%;
`;
export const Head = styled.div`
  padding-bottom: 2.5%;
  font-size: 1.6rem;
  color: #008af6;
`;
export const StyledRangePicker = styled(RangePicker)`
  width: 130%;
`;
export const Error = styled.div`
  font-size: 1.1rem;
  color: red;
  padding: 2% 0 0 0.5%;
`;
export const HeadContents = styled.div`
  margin-bottom: 2.5%;
  font-size: 1.6rem;
  color: #008af6;
`;
export const Input = styled.input`
  width: 100%;
  padding: 0.5%;
  border: none;
  border-bottom: 1px solid gainsboro;
  outline: none;
  font-size: 1.5rem;
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
  padding-top: 1%;
`;
export const RatingImg = styled.img`
  cursor: pointer;
  width: 25%;
  height: 50%;
  :active {
    position: relative;
    top: 2px;
  }
`;
export const ResetScore = styled.button`
  width: 5%;
  height: 15%;
  margin-top: 1%;
  font-size: 1rem;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: white;
  color: gray;
  cursor: pointer;
  :active {
    position: relative;
    top: 2px;
  }
`;
export const StyledQuill = styled(ReactQuill)`
  height: 270px;
  margin-bottom: 6%;
  .ql-editor {
    padding: 2%;
    min-height: 320px;
    font-size: 25px;
    line-height: 1.5;
  }
`;
export const MapWrapper = styled.div`
  height: 50%;
  margin-bottom: 7%;
`;
export const MapHead = styled.div`
  padding-bottom: 2.5%;
  font-size: 1.6rem;
  color: #008af6;
`;
export const MapDetail = styled.div`
  width: 100%;
  height: 5%;
  padding: 0.5%;
  margin-bottom: 5%;
  border: none;
  border-bottom: 1px solid gainsboro;
  outline: none;
  font-size: 1.5rem;
  ::placeholder {
    color: lightgray;
  }
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Button = styled.button`
  width: 15%;
  height: 50%;
  padding: 1%;
  font-size: 1.5rem;
  text-decoration: none;
  text-shadow: 0px 0px 0px #f0f0f0;
  border: none;
  border-radius: 10px;
  background-color: ${(props: IProps) =>
    props.isButtonActive ? "#008af6" : "#f4f7f9b3"};
  color: ${(props: IProps) => (props.isButtonActive ? "white" : "#008af6")};
  display: inline-block;
  cursor: pointer;
  :active {
    position: relative;
    top: 2px;
  }
`;
export const MapButtonOn = styled.button`
  width: 15%;
  height: 50%;
  padding: 1%;
  font-size: 1.5rem;
  text-decoration: none;
  text-shadow: 0px 0px 0px #f0f0f0;
  border: none;
  border-radius: 10px;
  background-color: #008af6;
  color: white;
  display: inline-block;
  cursor: pointer;
  :active {
    position: relative;
    top: 2px;
  }
`;
export const MapButtonOff = styled.button`
  width: 15%;
  height: 50%;
  padding: 1%;
  font-size: 1.5rem;
  text-decoration: none;
  text-shadow: 0px 0px 0px #f0f0f0;
  border: none;
  border-radius: 10px;
  background-color: #f4f7f9b3;
  color: #008af6;
  display: inline-block;
  cursor: pointer;
  :active {
    position: relative;
    top: 2px;
  }
`;
export const ImageBodyWrapper = styled.div`
  width: 100%;
  height: 1000px;
  padding: 7% 15% 5% 15%;
  border-radius: 0px 0px 41px 41px;
  box-shadow: 0px 10px 20px rgba(214, 214, 214, 1);
`;
export const ImageBody = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 10%;
  padding-bottom: 10%;
`;
export const ImageButtonWrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const FinishButton = styled.button`
  width: 15%;
  height: 50%;
  padding: 1%;
  font-size: 1.5rem;
  text-decoration: none;
  text-shadow: 0px 0px 0px #f0f0f0;
  border: none;
  border-radius: 10px;
  background-color: #008af6;
  color: white;
  display: inline-block;
  cursor: pointer;
  :active {
    position: relative;
    top: 2px;
  }
`;

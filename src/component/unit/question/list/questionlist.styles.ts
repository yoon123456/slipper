import styled from "@emotion/styled";
import { IWriteButtonProps } from "./questionlist.types";

export const WrapperOut = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 20px;
  /* border-top: 1px solid lightgray; */
`;
export const RowBox = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2.5%;
`;
export const Profile = styled.div`
  width: 7%;
`;
export const ProfileImage = styled.img`
  padding: 10%;
  width: 80px;
  height: 80px;
  object-fit: fill;
`;
export const RightBox = styled.div`
  width: 90%;
`;
export const Top = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
export const Left = styled.div`
  display: flex;
  align-items: baseline;
  width: 90%;
`;
export const Option = styled.div`
  display: flex;
  align-items: center;
  width: 9%;
`;
export const Name = styled.h4`
  font-size: 1.5rem;
  margin-left: 0.5%;
`;
export const Time = styled.span`
  font-size: 1.2rem;
  color: gray;
  margin-left: 1%;
`;
export const Question = styled.div`
  font-size: 1.3rem;
  height: 35%;
  outline: none;
  border-radius: 12px;
  padding: 1%;
  /* box-shadow: 8px 13px 3px lightgray; */
  background-color: #f6f6f6;
`;
export const QuestionAnswer = styled.div`
  width: 80px;
  height: 30px;
  margin: 1% 0% 0% 0%;
  line-height: 2.2;
  font-size: 1.3rem;
  text-align: center;
  border-radius: 10px;
  background-color: #008af6;
  color: white;
  cursor: pointer;
`;
export const DropDown = styled.div``;
export const Circle = styled.img`
  width: 30px;
  margin-top: 38px;
`;
export const Edit = styled.div`
  margin-left: 30px;
  font-size: 1.2rem;
  cursor: pointer;
  :hover {
    color: #008fa6;
  }
`;
export const Delete = styled.div`
  margin-left: 25px;
  font-size: 1.2rem;
  cursor: pointer;
  :hover {
    color: #008fa6;
  }
`;
export const AnswerBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

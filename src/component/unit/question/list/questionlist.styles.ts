import styled from "@emotion/styled";
import { IWriteButtonProps } from "./questionlist.types";

export const WrapperOut = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const RowBox = styled.div`
  display: flex;
  width: 100%;
`;
export const Profile = styled.div`
  width: 7%;
`;
export const ProfileImage = styled.img`
  padding: 10%;
  /* width: 80%; */
`;
export const RightBox = styled.div`
  width: 90%;
`;
export const Top = styled.div`
  /* background-color: red; */
  display: flex;
  align-items: baseline;
`;
export const Name = styled.h4`
  font-size: 1.5rem;
`;
export const Time = styled.span`
  font-size: 1.2rem;
  color: gray;
  margin-left: 0.3%;
`;
export const Question = styled.div`
  font-size: 1.3rem;
  height: 35%;
  outline: none;
  border: 1px solid lightgray;
  border-radius: 12px;
  padding: 1%;
  box-shadow: 8px 13px 3px #f4f4f4;
`;
export const QuestionAnswer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 30px;
  margin: 1% 2%;
  line-height: 2.2;
  font-size: 1.3rem;
  text-align: center;
  cursor: pointer;
`;
// dropdown menu
export const DropDown = styled.div``;
export const Circle = styled.img`
  width: 30px;
  margin-top: 38px;
`;
export const Submenu = styled.div``;
export const Edit = styled.div``;
export const Delete = styled.div``;

import styled from "@emotion/styled";
import { IWriteButtonProps } from "./answerwrite.types";

export const QuestionBox = styled.div`
  width: 90%;
  /* border: 1px solid gainsboro; */
  display: flex;
  justify-content: space-between;
`;
export const PersonBox = styled.div`
  width: 10%;
`;
export const Person = styled.img`
  padding: 10%;
  width: 80%;
`;
export const CommentBox = styled.div`
  width: 95%;
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
export const QuestionInput = styled.input`
  width: 100%;
  font-size: 1.3rem;
  height: 40px;
  outline: none;
  border: 1px solid lightgray;
  border-radius: 12px;
  padding: 1%;
`;
export const Box = styled.div``;
export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1% 2%;
`;
export const Cancel = styled.div`
  width: 80px;
  height: 30px;
  line-height: 2.5;
  font-size: 1.3rem;
  text-align: center;
  cursor: pointer;
`;
export const Write = styled.div`
  width: 80px;
  height: 30px;
  line-height: 2.4;
  font-size: 1.3rem;
  text-align: center;
  border-radius: 10px;
  background-color: ${(props: IWriteButtonProps) =>
    props.isActive ? "#008af6" : "none"};
  color: ${(props: IWriteButtonProps) => (props.isActive ? "white" : "black")};
  cursor: pointer;
`;

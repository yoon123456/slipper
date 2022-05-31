import styled from "@emotion/styled";
import { IWriteButtonProps } from "./answerwrite.types";

export const QuestionBox = styled.div`
  width: 90%;
  display: flex;
  align-items: baseline;
  margin-top: 2%;
`;
export const PersonBox = styled.div`
  width: 7%;
`;
export const Person = styled.img`
  width: 60px;
  height: 60px;
  padding: 10%;
`;
export const CommentBox = styled.div`
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
export const Edit = styled.div`
  margin-left: 10px;
  font-size: 1.1rem;
`;
export const Delete = styled.div`
  margin-left: 10px;
  font-size: 1.1rem;
  cursor: pointer;
`;
export const QuestionInput = styled.input`
  width: 100%;
  font-size: 1.3rem;
  height: 35%;
  outline: none;
  border: 1px solid lightgray;
  border-radius: 12px;
  padding: 1%;
  box-shadow: 8px 13px 3px #f4f4f4;
`;
export const Box = styled.div``;
export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 2% 0% 0% 0%;
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
  margin-top: 5px;
  line-height: 2.4;
  font-size: 1.3rem;
  text-align: center;
  border-radius: 10px;
  background-color: ${(props: IWriteButtonProps) =>
    props.isActiveButton ? "#008af6" : "none"};
  color: ${(props: IWriteButtonProps) =>
    props.isActiveButton ? "white" : "black"};
  cursor: pointer;
`;

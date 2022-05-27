import styled from "@emotion/styled";
import { IWriteButtonProps } from "./questionwrite.types";

export const Div = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
  margin-bottom: 2%;
`;
export const PersonBox = styled.div`
  width: 7%;
`;
export const CommentBox = styled.div`
  width: 90%;
`;
export const Top = styled.div`
  display: flex;
  align-items: baseline;
`;
export const Name = styled.h4`
  font-size: 1.7rem;
`;
export const Time = styled.span`
  font-size: 1.4rem;
  color: gray;
  margin-left: 0.3%;
`;
export const Person = styled.img`
  padding: 10%;
`;
export const QuestionInput = styled.input`
  width: 100%;
  font-size: 1.3rem;
  height: 40px;
  outline: none;
  border: 1px solid lightgray;
  border-radius: 12px;
  padding: 1%;
  box-shadow: 8px 13px 3px #f4f4f4;
`;
export const Box = styled.div`
  display: ${(props: IWriteButtonProps) => (props.isActive ? "block" : "none")};
  margin-top: 3%;
`;
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
  background-color: ${(props: IWriteButtonProps) =>
    props.isActive ? "#008af6" : "none"};
  color: ${(props: IWriteButtonProps) => (props.isActive ? "white" : "black")};
  border-radius: 10px;
  cursor: pointer;
`;

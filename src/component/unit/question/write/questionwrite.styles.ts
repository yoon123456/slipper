import styled from "@emotion/styled";
import { IWriteButtonProps } from "./questionwrite.types";

export const Div = styled.div`
  width: 50%;
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
export const RightBox = styled.div`
  width: 90%;
`;
export const QuestionInput = styled.input`
  width: 100%;
  height: 50%;
  border: none;
  border-bottom: 1px solid gainsboro;
  /* outline-color: #008af6; */
`;
export const Box = styled.div`
  display: ${(props: IWriteButtonProps) => (props.isActive ? "block" : "none")};
`;
export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1% 2%;
`;
export const Cancel = styled.div`
  width: 7%;
  height: 30px;
  line-height: 2.5;
  font-size: 1.3rem;
  text-align: center;
`;
export const Write = styled.div`
  width: 7%;
  height: 30px;
  line-height: 2.5;
  font-size: 1.3rem;
  text-align: center;
  background-color: ${(props: IWriteButtonProps) =>
    props.isActive ? "#008af6" : "none"};
  color: ${(props: IWriteButtonProps) => (props.isActive ? "white" : "black")};
`;

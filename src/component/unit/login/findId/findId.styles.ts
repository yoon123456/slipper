import styled from "@emotion/styled";
import { IProps } from "./findId.types";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  margin: 0 auto;
`;

export const WrapperOut = styled.div`
  width: 30%;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -45%);
  border-radius: 41px 41px 41px 41px;
  -moz-border-radius: 41px 41px 41px 41px;
  -webkit-border-radius: 41px 41px 41px 41px;
  -webkit-box-shadow: 10px 10px 20px 3px rgba(214, 214, 214, 1);
  -moz-box-shadow: 10px 10px 20px 3px rgba(214, 214, 214, 1);
  box-shadow: 10px 10px 20px 3px rgba(214, 214, 214, 1);
  margin: 0 auto;
  padding: 2%;
`;
export const WrapperIn = styled.div`
  width: 80%;
  margin: 0 auto;
`;
export const Join = styled.div`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  color: #008af6;
`;
export const Profile = styled.div`
  display: flex;
  align-items: baseline;
  margin: 0 auto;
  margin-top: 7%;
  font-size: 2.5rem;
  font-family: "HallymGothic-Regular";
`;
export const ProfileBox = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10%;
`;
export const Flex = styled.div``;

export const NumWrap = styled.div`
  width: 100%;
  display: flex;
`;
export const InputProfile = styled.input`
  width: 80%;
  margin-right: 25px;
  padding: 3%;
  font-size: 1.2em;
  border: none;
  border-bottom: 2px solid gainsboro;
  outline: none;
`;
export const NumberAsk = styled.button`
  width: 100px;
  line-height: 3;
  text-align: center;
  background-color: #f2f2f2;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;
export const NumberBox = styled.div``;
export const CheckNumber = styled.div`
  display: flex;
  width: 100%;
  padding-top: 7%;
`;
export const CheckEnd = styled.button`
  width: 100px;
  line-height: 3;
  text-align: center;
  background-color: #f2f2f2;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  border: none;
`;
export const Input = styled.input`
  width: 80%;
  height: 40px;
  margin-right: 25px;
  padding: 2%;
  font-size: 1.2em;
  border: none;
  border-bottom: 2px solid gainsboro;
  outline: none;
`;

export const PasswordCheck = styled.input`
  width: 100%;
  padding: 2%;
  margin-top: 27px;
  border: none;
  border-bottom: 2px solid gainsboro;
  outline: none;
`;

export const JoinWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: "HallymGothic-Regular";
`;

export const JoinSlipper = styled.button`
  width: 90%;
  margin: 0 auto;
  height: 42px;
  font-size: 1.5rem;
  margin-top: 5%;
  text-align: center;
  background-color: ${(props: IProps) =>
    props.isActive ? "#f2f2f2" : "#008af6"};
  color: ${(props: IProps) => (props.isActive ? "black" : "white")};
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;
export const Eamil = styled.div`
  width: 100%;
  height: 50px;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4%;
  color: #008af6;
`;

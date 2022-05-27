import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const RoleBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10%;
  font-size: 1.7rem;
  font-weight: 600;
  color: gray;
`;
export const RoleBoxIn = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;
export const Role = styled.input`
  margin-right: 5px;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  padding: 5%;
`;
export const ImageBox = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 40px;
`;
export const Image = styled.img`
  width: 70%;
  margin-left: 10%;
`;
export const WrapperLeft = styled.div`
  width: 50%;
  background-color: white;
`;
// right box
export const fadeInDown = keyframes`
    0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
`;
export const fadeInRight = keyframes`
    0% {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
`;
const R = keyframes`
  from {
    width: 50%;
  }
  to{
  width: 70%;
  }
`;

export const BossText = styled.div`
  margin-left: 30%;
  font-size: 1.5rem;
  animation: ${fadeInDown} 1s both;
`;
export const WrapperOut = styled.div`
  width: 40%;
  border: 1px solid gainsboro;
  border-radius: 41px;
  border-radius: 41px 41px 41px 41px;
  -moz-border-radius: 41px 41px 41px 41px;
  -webkit-border-radius: 41px 41px 41px 41px;
  -webkit-box-shadow: 10px 10px 20px 3px rgba(214, 214, 214, 1);
  -moz-box-shadow: 10px 10px 20px 3px rgba(214, 214, 214, 1);
  box-shadow: 10px 10px 20px 3px rgba(214, 214, 214, 1);
  background-color: white;

  animation: ${fadeInDown} 2s both;
`;
export const WrapperJoin = styled.div`
  width: 62%;
  margin: 0 auto;
  margin-top: 12px;
  animation: ${fadeInRight} 1s both;
`;
export const Join = styled.div`
  text-align: center;
  font-size: 3.3rem;
  font-weight: bold;
  color: #008af6;
  margin-top: 5%;
`;
export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin-top: 8%; */
`;
export const ProfileBox = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InputProfile = styled.input`
  width: 70%;
  border: none;
  border-bottom: 2px solid gainsboro;
  margin-top: 12%;
  outline: none;
  :focus {
    animation: ${R} 1s ease;
    border-bottom: 2px solid #008af6;
    transition: 0.5s linear;
  }
`;
export const Check = styled.div`
  display: flex;
  padding-top: 8%;
  align-items: center;
`;
export const CheckNumber = styled.div`
  display: flex;
  padding-top: 7%;
`;

export const TelBox = styled.div`
  width: 45%;
`;
export const Tel = styled.input`
  width: 90%;
  height: 30px;
  border: 1px solid gainsboro;
  margin-right: 20px;
  padding: 1%;
  border-radius: 5px;
  outline: none;
`;
export const NumberAsk = styled.button`
  width: 100px;
  line-height: 3;
  text-align: center;
  background-color: #f2f2f2;
  border-radius: 10px;
  border: none;
  outline: none;
`;
export const NumberBox = styled.div`
  margin-left: 3%;
`;

export const Input = styled.input`
  width: 40%;
  height: 30px;
  border: 1px solid gainsboro;
  margin-right: 22px;
  padding: 1%;
  border-radius: 5px;
  outline: none;
`;
export const CheckEnd = styled.button`
  width: 100px;
  line-height: 3;
  text-align: center;
  background-color: #f2f2f2;
  border-radius: 10px;
  border: none;
`;
export const PasswordCheck = styled.input`
  width: 70%;
  display: block;
  border: none;
  border-bottom: 2px solid gainsboro;
  margin-top: 6.7%;
  padding: 1%;
  outline: none;
  :focus {
    animation: ${R} 1s ease;
    border-bottom: 2px solid #008af6;
    transition: 0.5s linear;
  }
`;
export const PasswordCheck2 = styled.input`
  width: 70%;
  display: block;
  border: none;
  border-bottom: 2px solid gainsboro;
  margin-top: 7.3%;
  padding: 1%;
  outline: none;
  :focus {
    animation: ${R} 1s ease;
    border-bottom: 2px solid #008af6;
    transition: 0.5s linear;
  }
`;
export const Introduce = styled.input`
  width: 100%;
  height: 50px;
  display: block;
  margin-top: 35px;
  padding: 1%;
  border: none;
  border: 1.5px solid gainsboro;
  outline: none;
`;
export const JoinSlipper = styled.button`
  width: 100px;
  font-size: 1.3rem;
  padding: 5px;
  margin-top: 5%;
  margin-left: 40%;
  line-height: 2;
  text-align: center;
  background-color: #008af6;
  color: white;
  border: none;
  border-radius: 12px;
`;
export const Error = styled.span`
  color: red;
`;
// 약관동의
export const WrapperAgree = styled.div``;
export const AgreeIn = styled.div`
  width: 80%;
  margin: 0 auto;
`;
export const Title = styled.h2`
  margin-top: 10%;
  line-height: 2.5;
  font-size: 1.6rem;
  border-bottom: 1px solid black;
`;
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gainsboro;
  margin-top: 20px;
`;
export const FlexText = styled.div`
  font-size: 1.3rem;
  margin-bottom: 1.5%;
`;
export const TitleText = styled.input`
  margin-bottom: 1.5%;
  height: 35px;
`;
export const MustBox = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  /* margin-bottom: 1.5%; */
`;
export const Must = styled.div`
  font-size: 1.3rem;
  margin-top: 10px;
  /* margin-bottom: 1.5%; */
`;
export const MustRed = styled.div`
  color: red;
  font-size: 1.3rem;
  margin-top: 10px;

  /* margin-bottom: 1.5%; */
`;
export const AgreeContent = styled.div`
  width: 100%;
  height: 180px;
  padding: 5%;
  margin-top: 10px;
  border: 1px solid gainsboro;
  overflow: scroll;
  text-align: justify;
`;
export const AgreeButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 30px;
`;
export const AgreeCancle = styled.button`
  width: 100px;
  height: 30px;
  margin-right: 30px;
  border: none;
  border-radius: 10px;
`;
export const AgreeJoin = styled.button`
  width: 100px;
  border: none;
  border-radius: 10px;
`;

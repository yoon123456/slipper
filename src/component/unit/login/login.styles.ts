import styled from "@emotion/styled";
import { IProps } from "./login.types";

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
  width: 78%;
  margin: 0 auto;
`;
export const Join = styled.div`
  text-align: center;
  font-size: 4.3rem;
  font-weight: bold;
  color: #008af6;
  /* @media (min-width: 1024px > min-width:) {
  } */
`;
export const Profile = styled.div`
  margin: 0 auto;
  font-size: 2.5rem;
  font-family: "HallymGothic-Regular";
`;
export const ProfileBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10%;
`;
export const InputProfile = styled.input`
  width: 100%;
  padding: 2%;
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
export const Error = styled.div`
  color: red;
  padding-top: 2%;
  font-size: 1.2rem;
`;
export const Menu = styled.div`
  width: 100%;
  font-size: 3rem;
  font-family: "HallymGothic-Regular";
  color: gray;
  margin: 0 auto;
`;

export const MenuBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  margin-top: 18%;
`;
export const IdFind = styled.div`
  cursor: pointer;
  text-decoration: underline;
`;
export const PasswordFind = styled.div`
  cursor: pointer;
  text-decoration: underline;
`;
export const Sign = styled.div`
  cursor: pointer;
  text-decoration: underline;
  color: black;
`;

export const Sns = styled.div`
  width: 100%;
  margin: 0 auto;
  font-family: "HallymGothic-Regular";
`;
export const Orbox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-top: 5%;
`;
export const Or = styled.div`
  margin-top: 4%;
`;
export const OrLeft = styled.div`
  width: 40%;
  border-bottom: 2px solid gainsboro;
  margin-top: 4%;
  margin-right: 2%;
`;
export const OrRight = styled.div`
  width: 40%;
  border-bottom: 2px solid gainsboro;
  margin-top: 4%;
  margin-left: 2%;
`;

export const SnsBox = styled.div`
  width: 100%;
  margin-top: 4%;
  margin-bottom: 7%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const AWrap = styled.a`
  width: 33.3%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const KaKao = styled.img`
  width: 31%;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
    transition: all 300ms ease-in;
  }
`;
export const Google = styled.img`
  width: 33%;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
    transition: all 300ms ease-in;
  }
`;
export const Naver = styled.img`
  width: 30%;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
    transition: all 300ms ease-in;
  }
`;

export const JoinWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: "HallymGothic-Regular";
`;

export const JoinSlipper = styled.button`
  width: 100%;
  height: 42px;
  font-size: 1.5rem;
  margin-top: 9%;
  text-align: center;
  background-color: ${(props: IProps) =>
    props.isActive ? "#008af6" : "#f4f7f9b3"};
  color: ${(props: IProps) => (props.isActive ? "white" : "#008af6")};
  border-radius: 10px;
  border: none;
`;

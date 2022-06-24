import { Iprops } from "./list.types";
import styled from "@emotion/styled";

export const WrapperOut = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "HallymGothic-Regular";
  background-color: ${(props: Iprops) =>
    props.isActive ? "#27272C14" : "none"};
  font-family: "HallymGothic-Regular";
`;
export const WrapperLeft = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-bottom: 50px;
  height: 100vh;
`;
export const EmphyLeft = styled.div`
  width: 60%;
  margin: 0 auto;
  height: 100vh;
  margin-top: 35px;
  text-align: center;
  font-size: 2.5rem;
  font-style: italic;
`;
export const EmphyText = styled.div`
  margin-top: 50px;
`;

export const Infinite = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const WrapperTop = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const WrapperContents = styled.div`
  width: 100%;
  margin: 0 auto;
  opacity: ${(props: Iprops) => (props.isActive ? "0.3" : "1")};
`;

export const WrapperBody = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
`;

export const WrapperMiddle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4% 0% 4% 0%;
  margin: 0 auto;
`;
export const WrapperWrite = styled.div`
  width: 20%;
`;

export const WrapperArray = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
`;

export const Array = styled.div`
  line-height: 2;
  font-size: 1.4rem;
  margin-left: 30px;
  color: #008af6;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
  text-decoration: ${(props: Iprops) =>
    props.array === "recent" && "underline"};
`;
export const ArrayBox = styled.div`
  display: flex;
  align-items: center;
`;
export const ListArray = styled.img`
  width: 17px;
  margin-left: 2px;
`;
export const Pick = styled.div`
  line-height: 2;
  font-size: 1.4rem;
  margin-left: 15px;
  color: #008af6;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
  text-decoration: ${(props: Iprops) => props.array === "like" && "underline"};
`;

export const WrapperBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;

export const Button = styled.div`
  width: 80%;
  text-align: center;
  line-height: 2;
  color: gray;
  background-color: #f2f2f2;
  border-radius: 7px;
  font-size: 1.4rem;
  cursor: pointer;
  :hover {
    font-weight: bold;
  }
`;
export const WrapperRight = styled.div`
  width: 100%;
  height: 110vh;
  margin: 0 auto;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  /* display: flex;
  flex-direction: column; */
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ::-webkit-scrollbar {
    display: none;
  }
`;

// 각각의 글 상세로 들어가는것 수정
export const UserContents = styled.div`
  width: 98%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
  cursor: pointer;
  box-shadow: 6px 4px 6px -5px gainsboro;
  margin: 0 auto 20px auto;
  :hover {
    box-shadow: 5px 5px 15px 5px #e1e1e1;
  }
`;
export const ImageWrap = styled.div`
  width: 40%;
  height: 160px;
`;

export const ImageLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 0 0 10px;
  position: relative;
`;
export const UserWrap = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5%;
`;
export const UserDate = styled.div`
  width: 10%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;
export const LikeWrap = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
export const Marker = styled.img`
  width: 90%;
  z-index: 2;
`;

export const Count = styled.div`
  font-size: 1.2rem;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
`;
export const ListTitleWrap = styled.div`
  padding: 3%;
`;

export const ListTitle = styled.div`
  font-size: 2rem;
  font-weight: 500;
  padding-bottom: 2%;
`;
export const ListHometown = styled.div`
  color: #7b7e7e;
  font-size: 1rem;
  padding-bottom: 2%;
`;
export const ListShopName = styled.div`
  color: #2a2f2f;
  font-size: 1.5rem;
`;

// 헤더추가
export const WrapperOutH = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 9px 11px 0px #f2f2f2;
  font-family: "HallymGothic-Regular";
`;
export const WrapperBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
// 로고 박스
export const WrapperInLogo = styled.div`
  width: 100px;
  margin-left: 40px;
  cursor: pointer;
  :hover {
    font-size: 1.4rem;
  }
`;

export const WrapperIn = styled.div`
  width: 48%;
  display: flex;

  align-items: center;
`;
//#008af6;
export const WrapperUser = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;
export const WrapperUserLogin = styled.div`
  display: flex;
  align-items: center;
`;
export const WrapUser = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const MeneWrap = styled.div`
  width: 20%;
  display: flex;
  text-align: center;
`;

export const Menu = styled.div`
  width: 50%;
  font-size: 1.6rem;
  cursor: pointer;
  :hover {
    color: #008af6;
  }
`;
export const LogoutIcon = styled.img`
  width: 18%;
  margin-left: 5px;
  margin-bottom: 3px;
`;

export const LogIn = styled.div`
  width: 110px;
  height: 30px;
  line-height: 2.1;
  color: black;
  border-radius: 10px;
  font-size: 1.6rem;
  text-align: center;
  cursor: pointer;
  :hover {
    color: #008af6;
  }
`;
export const UserImage = styled.div`
  width: 100px;
  position: relative;
`;
export const UserImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const UserImg = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 10px;
`;

export const Drop = styled.img`
  width: 20px;
  height: 20px;
`;

export const DropdownList = styled.div`
  display: ${(props: Iprops) => (props.over ? "block" : "none")};
  position: absolute;
  top: 50;
  background-color: white;
  width: 100px;
  z-index: 9;
  text-align: center;
`;

export const List = styled.div`
  color: black;
  padding: 17px 10px;
  font-size: 1.2rem;
  display: block;
  cursor: pointer;
`;

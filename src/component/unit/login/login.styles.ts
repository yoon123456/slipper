import styled from "@emotion/styled";

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
  /* background-color: red; */
  border-radius: 41px 41px 41px 41px;
  -moz-border-radius: 41px 41px 41px 41px;
  -webkit-border-radius: 41px 41px 41px 41px;
  -webkit-box-shadow: 10px 10px 20px 3px rgba(214, 214, 214, 1);
  -moz-box-shadow: 10px 10px 20px 3px rgba(214, 214, 214, 1);
  box-shadow: 10px 10px 20px 3px rgba(214, 214, 214, 1);
  margin: 0 auto;
`;
export const WrapperIn = styled.div`
  width: 80%;
  margin: 0 auto;
`;
export const Join = styled.div`
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  color: #008af6;
  margin-top: 5%;
  @media (min-width: 1024px > min-width:) {
  }
`;
export const Profile = styled.div`
  /* padding-top: 10%; */
  margin: 0 auto;
  /* border: 2px solid black; */
`;
export const ProfileBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const InputProfile = styled.input`
  width: 90%;
  border: none;
  border-bottom: 2px solid gainsboro;
  padding: 10px;
  margin: 10px;
`;

export const PasswordCheck = styled.input`
  width: 90%;
  border: none;
  border-bottom: 2px solid gainsboro;
  padding: 10px;
  margin: 10px;
`;

export const Menu = styled.div`
  width: 100%;
  font-size: 13px;
  color: gray;
  margin: 0 auto;
  margin-top: 5%;
`;

export const MenuBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
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
  margin-left: 10%;
`;

export const Sns = styled.div`
  width: 100%;
  margin: 0 auto;
`;
export const Orbox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
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
  margin-bottom: 4%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const KaKao = styled.img`
  width: 10%;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
    transition: all 300ms ease-in;
  }
`;
export const Google = styled.img`
  width: 10%;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
    transition: all 300ms ease-in;
  }
`;
export const Naver = styled.img`
  width: 10%;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
    transition: all 300ms ease-in;
  }
`;

export const JoinSlipper = styled.div`
  width: 30%;
  line-height: 2.2;
  margin: 0 auto;
  padding: 1%;
  margin-top: 5%;
  text-align: center;
  /* font-size: 13px; */
  font-weight: bold;
  color: #008af6;
  border: 2px solid #008af6;
  border-radius: 25px;
  cursor: pointer;
  :hover {
    background-color: #008af6;
    color: white;
  }
`;

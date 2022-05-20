import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;
export const ImageBox = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 40px;
`;
export const Image = styled.img`
  width: 90%;
  margin-left: 20%;
`;
export const WrapperLeft = styled.div`
  width: 40%;
  background-color: white;
`;

export const WrapperOut = styled.div`
  width: 60%;
  border-radius: 41px 41px 41px 41px;
  -moz-border-radius: 41px 41px 41px 41px;
  -webkit-border-radius: 41px 41px 41px 41px;
  background-color: white;
`;
export const WrapperIn = styled.div`
  width: 45%;
  margin: 0 auto;
  padding-top: 40px;
`;
export const Join = styled.div`
  text-align: center;
  font-size: 5rem;
  font-weight: bold;
  color: #008af6;
`;
export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10%;
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
  margin-top: 10%;
`;
export const MyImage = styled.div`
  width: 150px;
  height: 150px;
  background-color: gainsboro;
`;
export const Check = styled.div`
  display: flex;
  padding-top: 30px;
  align-items: center;
`;
export const CheckNumber = styled.div`
  display: flex;
  padding-top: 30px;
`;

export const TelBox = styled.div`
  width: 45%;
`;
export const Tel = styled.input`
  width: 90%;
  height: 30px;
  border: 1px solid gainsboro;
  margin-right: 20px;
  border-radius: 5px;
`;
export const NumberAsk = styled.button`
  width: 100px;
  line-height: 3;
  text-align: center;
  background-color: #008af6;
  color: white;
  border: none;
  border-radius: 10px;
`;
export const NumberBox = styled.div`
  margin-left: 3%;
`;

export const Input = styled.input`
  width: 33%;
  height: 30px;
  border: 1px solid gainsboro;
  margin-right: 15px;
  border-radius: 5px;
`;
export const CheckEnd = styled.div`
  width: 100px;
  line-height: 3;
  text-align: center;
  background-color: #f2f2f2;
  border-radius: 10px;
`;
export const PasswordCheck = styled.input`
  width: 63%;
  display: block;
  border: none;
  border-bottom: 2px solid gainsboro;
  padding-bottom: 10px;
  margin-top: 40px;
`;
export const Introduce = styled.input`
  width: 100%;
  height: 150px;
  display: block;
  margin-top: 20px;
  border: none;
  border: 2px solid gainsboro;
`;
export const JoinSlipper = styled.button`
  width: 20%;
  height: 50px;
  line-height: 2.2;
  margin: 0 auto;
  padding: 5px;
  margin-top: 8%;
  margin-left: 40%;
  text-align: center;
  font-size: 1.6rem;
  font-weight: bold;
  background-color: white;
  color: #008af6;
  border: 2px solid #008af6;
  border-radius: 25px;
  cursor: pointer;
  :hover {
    background-color: #008af6;
    color: white;
  }
`;
export const Error = styled.span`
  color: red;
`;

import styled from "@emotion/styled";

export const WrapperOut = styled.div`
  width: 50%;
  margin: 0 auto;
  border-radius: 41px 41px 41px 41px;
  -moz-border-radius: 41px 41px 41px 41px;
  -webkit-border-radius: 41px 41px 41px 41px;
  background-color: white;
  -webkit-box-shadow: 10px 10px 20px 3px rgba(214, 214, 214, 1);
  -moz-box-shadow: 10px 10px 20px 3px rgba(214, 214, 214, 1);
  box-shadow: 10px 10px 20px 3px rgba(214, 214, 214, 1);
`;
export const WrapperIn = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-top: 40px;
`;
export const Join = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
`;
export const Profile = styled.div`
  display: flex;
  justify-content: space-between;

  padding-top: 50px;
`;
export const ProfileBox = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;
export const InputProfile = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid gainsboro;
  padding: 10px;
  /* margin: 10px; */
`;
export const Input = styled.input`
  width: 20%;
  border: 1px solid gainsboro;
  margin-right: 20px;
  border-radius: 5px;
`;
export const MyImage = styled.div`
  width: 120px;
  height: 120px;
  background-color: gainsboro;
`;
export const Check = styled.div`
  display: flex;
  padding-top: 30px;
`;
export const CheckNumber = styled.div`
  display: flex;
  padding-top: 30px;
`;

export const TelBox = styled.div`
  width: 60%;
  height: 20%;
`;
export const Tel = styled.input`
  width: 30%;
  border: none;
  border: 1px solid gainsboro;
`;
export const NumberAsk = styled.div`
  width: 100px;
  text-align: center;
  background-color: #f2f2f2;
  border-radius: 10px;
`;
export const CheckEnd = styled.div`
  width: 100px;
  text-align: center;
  background-color: #f2f2f2;
  border-radius: 10px;
`;
export const PasswordCheck = styled.input`
  width: 40%;
  display: block;
  border: none;
  border-bottom: 2px solid gainsboro;
  padding: 10px;
`;
export const Introduce = styled.input`
  width: 100%;
  height: 150px;
  display: block;
  margin-top: 20px;
  border: none;
  border: 2px solid gainsboro;
`;
export const JoinSlipper = styled.div`
  width: 20%;
  height: 40px;
  line-height: 1.5;
  margin: 0 auto;
  margin-top: 20px;
  padding: 5px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #008af6;
  border: 2px solid #008af6;
  border-radius: 17px;
  cursor: pointer;
  :hover {
    background-color: #008af6;
    color: white;
  }
`;

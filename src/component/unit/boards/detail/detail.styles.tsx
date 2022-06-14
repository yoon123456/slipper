import styled from "@emotion/styled";

export const WrapperOut = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-top: 80px;
  display: flex;
  flex-direction: row;
  position: relative;
  font-family: "HallymGothic-Regular";
`;
export const WrapperTop = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const Top = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 100px;
`;
export const Map = styled.div`
  width: 50%;
  height: 400px;
  margin: 0 auto;
  padding: 10px;
`;

export const ImageWrap = styled.div`
  width: 50%;
  height: 200px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  padding: 10px;
  :hover {
    padding: 0;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Middle = styled.div`
  width: 100%;
  display: flex;
`;
export const Left = styled.div`
  width: 65%;
  padding: 10px;
`;
export const LeftTop = styled.div`
  display: flex;
`;
export const Label = styled.div`
  width: 91%;
  margin-left: 1%;
  font-size: 2.7rem;
  padding-bottom: 20px;
  color: black;
  font-weight: 900;
`;
export const BookMark = styled.img`
  width: 8%;
  height: 50px;
  cursor: pointer;
`;

export const Tr = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid gainsboro;
`;
export const Th = styled.div`
  font-size: 1.8rem;
  font-weight: 900;
  width: 30%;
  padding-left: 10px;
`;
export const Info = styled.div`
  font-size: 1.8rem;
`;
export const InfoA = styled.a`
  font-size: 1.8rem;
`;
export const RatingWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const Good = styled.img`
  width: 13%;
  padding-right: 10px;
`;
export const Soso = styled.img`
  width: 13%;
  padding-right: 10px;
`;
export const Bad = styled.img`
  width: 13%;
  padding-right: 10px;
`;

export const Right = styled.div`
  width: 30%;
  margin: 0 auto;
  padding: 20px;
  padding-top: 80px;
  box-shadow: 1px 1px 10px 0px rgb(233 233 233);
  position: relative;
`;
export const EditDeleteWrap = styled.div`
  width: 85%;
  position: absolute;
  top: 20px;
  right: 6%;
  display: flex;
  justify-content: space-between;
`;
export const UserWriteDate = styled.div`
  font-size: 1.4rem;
  color: gray;
  padding-top: 2%;
`;
export const IconWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const Icon = styled.img`
  width: 25px;
  cursor: pointer;
`;
export const UserInfoWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const User = styled.div`
  width: 100%;
  display: flex;
`;
export const UserImg = styled.img`
  width: 25%;
  border-radius: 20px;
  padding: 10px;
`;
export const UserName = styled.div`
  width: 70%;
  font-size: 3rem;
  margin-left: 10%;
  display: flex;
  align-items: center;
`;
export const UserLivingWrap = styled.div`
  width: 100%;
  display: flex;
  padding-top: 15px;
`;

export const UserLiving = styled.div`
  width: 30%;
  font-size: 1.5rem;
  padding: 0 3% 0 3%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const UserLivingPeriod = styled.div`
  width: 70%;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;
export const UserWrap = styled.div`
  display: flex;
  padding-top: 20px;
`;
export const UserTitle = styled.div`
  width: 100%;
  font-size: 2.6rem;
  font-weight: 900;
  padding: 3% 0 3% 2%;
`;

export const UserContents = styled.div`
  text-align: justify;
  width: 100%;
  height: 300px;
  font-size: 2rem;
  padding: 4%;
  margin: 5% 0;
  border: 0.5px solid rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const WrapperBottom = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`;
export const Button = styled.button`
  width: 30%;
  height: 35px;
  padding: 1%;
  margin: 3%;
  color: #008af6;
  font-size: 1.3rem;
  border: none;
  border-radius: 10px;
  background-color: white;
  display: inline-block;
  background-color: #f4f7f9b3;
  cursor: pointer;
  :hover {
    position: relative;
    top: 2px;
  }
`;

export const WraperQuestion = styled.div`
  width: 70%;
  margin: 6% auto;
`;

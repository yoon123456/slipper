import styled from "@emotion/styled";
import Slider from "react-slick";

export const WrapperOut = styled.div`
  width: 60%;
  height: 100vh;
  margin: 0 auto;
  padding-top: 3%;
  display: flex;
  flex-direction: column;
  position: relative;
  /* border: 1px solid red; */
`;
export const WrapperTop = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;
export const TopLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 5% 5% 5% 0%;
`;
export const EditDeleteWrap = styled.div`
  width: 37%;
  position: absolute;
  top: 12%;
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
// slider
export const SliderWrap = styled.div`
  width: 90%;
  margin: 0% auto 7% auto;
`;
export const ImageWrap = styled.div`
  width: 100%;
  height: 350px;
`;

export const SliderStyle = styled(Slider)`
  width: 100%;
  height: 100%;
`;

export const ImgWrapper = styled(Slider)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;
export const Img = styled.img`
  width: 80%;
  height: 350px;
  object-fit: contain;
  margin-right: 10px;
  border-radius: 10px;
`;
//
export const TopRight = styled.div`
  width: 50%;
  margin: 2% auto;
  padding: 6%;
  padding-top: 10%;
  border-radius: 41px 41px 41px 41px;
  -moz-border-radius: 41px 41px 41px 41px;
  -webkit-border-radius: 41px 41px 41px 41px;
  -webkit-box-shadow: 10px 10px 20px 3px rgba(214, 214, 214, 1);
  -moz-box-shadow: 10px 10px 20px 3px rgba(214, 214, 214, 1);
  box-shadow: 1px 1px 20px 0px rgb(233 233 233);
`;
export const UserWrap = styled.div`
  display: flex;
`;
export const UserTitle = styled.div`
  width: 100%;
  font-size: 2.7rem;
  padding-left: 2%;
`;
export const BookMark = styled.img`
  width: 9%;
  height: 40px;
  cursor: pointer;
`;

export const Wrap = styled.div`
  font-size: 1.4rem;
  padding: 4% 0 0 2%;
  color: #a7a7a7;
`;

export const UserInfoWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5% 2% 0 2%;
`;
export const User = styled.div`
  width: 30%;
  display: flex;
`;
export const UserImg = styled.img`
  width: 20%;
  border-radius: 50%;
`;

export const UserName = styled.div`
  width: 70%;
  font-size: 1.8rem;
  margin-left: 10%;
  display: flex;
  align-items: center;
`;
export const UserLivingWrap = styled.div`
  width: 70%;
  display: flex;
`;

export const UserLiving = styled.div`
  width: 30%;
  height: 30px;
  font-size: 1.5rem;
  color: gray;
  padding: 0 5% 0 3%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const UserLivingPeriod = styled.div`
  width: 70%;
  font-size: 1.5rem;
  color: gray;
  display: flex;
  align-items: center;
`;
export const UserMiddle = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  padding: 0 2% 3% 2%;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.16);
`;
export const ShopName = styled.div`
  width: 50%;
  font-size: 1.9rem;
  /* margin-right: 3%; */
`;
export const ShopRatingWrap = styled.div`
  width: 60%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const ShopRating = styled.div`
  /* width: 20%; */
  font-size: 1.6rem;
`;
export const RatingWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
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

export const Map = styled.div`
  width: 88%;
  height: 350px;
  background-color: aliceblue;
  margin: 0 auto;
`;
export const CategoryWrap = styled.div`
  width: 30%;
  padding: 3% 0 4% 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Category = styled.button`
  width: 90%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  font-size: 1.3rem;
  border: none;
  border-radius: 30px;
  box-shadow: 0px 2px 4px 0px #e1e1e1;
  color: #008af6;
  margin: 1%;
`;

export const Good = styled.img`
  width: 20%;
  padding: 3%;
`;
export const Soso = styled.img`
  width: 20%;
  padding: 3%;
`;
export const Bad = styled.img`
  width: 20%;
  padding: 3%;
`;

export const WrapperBottom = styled.div`
  width: 70%;
  margin: 5% auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 3%;
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
  width: 64%;
  margin: 6% auto;
  padding-left: 3%;
  padding-right: 1%;

  /* margin-bottom: 10%; */
`;
export const Question = styled.div`
  font-size: 1.7rem;
  margin-top: 10%;
  margin-bottom: 5%;
  border-bottom: 1px solid gainsboro;
`;

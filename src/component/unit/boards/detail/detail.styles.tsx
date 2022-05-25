import styled from "@emotion/styled";
import Slider from "react-slick";

export const WrapperOut = styled.div`
  width: 70%;
  height: 100vh;
  margin: 0 auto;
  padding-top: 3%;
  display: flex;
  flex-direction: column;
  position: relative;
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
  padding: 5%;
`;
export const EditDeleteWrap = styled.div`
  width: 13%;
  position: absolute;
  top: 12%;
  right: 3%;
  display: flex;
  justify-content: space-between;
`;
export const UserWriteDate = styled.div`
  font-size: 1.4rem;
  color: gray;
  padding-top: 2%;
`;

export const Icon = styled.img`
  width: 13%;
  cursor: pointer;
`;
// slider
export const SliderWrap = styled.div`
  width: 90%;
  margin: 15% auto 0 auto;
`;
export const ImageWrap = styled.div`
  width: 100%;
  height: 300px;
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
  width: 70%;
  height: 280px;
  object-fit: cover;
  margin-right: 10px;
  border-radius: 5%;
`;
//
export const TopRight = styled.div`
  width: 50%;
  margin: 2% auto;
  padding: 6%;
  border-radius: 41px 41px 41px 41px;
  -moz-border-radius: 41px 41px 41px 41px;
  -webkit-border-radius: 41px 41px 41px 41px;
  -webkit-box-shadow: 10px 10px 20px 3px rgba(214, 214, 214, 1);
  -moz-box-shadow: 10px 10px 20px 3px rgba(214, 214, 214, 1);
  box-shadow: 10px 10px 20px 3px rgba(214, 214, 214, 1);
`;
export const UserTitle = styled.div`
  width: 100%;
  font-size: 2.9rem;
  padding-left: 2%;
`;

export const UserInfoWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
`;
export const User = styled.div`
  width: 30%;
  display: flex;
`;
export const UserImg = styled.img`
  width: 20%;
`;

export const UserName = styled.div`
  width: 70%;
  font-size: 1.7rem;
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
  padding: 3% 2% 5% 2%;
`;
export const ShopName = styled.div`
  /* width: 30%; */
  font-size: 2rem;
  margin-right: 5%;
`;
export const ShopRatingWrap = styled.div`
  /* width: 50%; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const ShopRating = styled.div`
  /* width: 20%; */
  font-size: 1.6rem;
`;
export const RatingWrap = styled.div`
  /* width: 30%; */
`;

export const UserContents = styled.div`
  text-align: justify;
  width: 100%;
  height: 350px;
  font-size: 1.5rem;
  padding: 4%;
  margin: 5% 0;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0.5px 2px;
  border-radius: 5%;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Map = styled.div`
  width: 100%;
  height: 500px;
  background-color: aliceblue;
`;
export const CategoryWrap = styled.div`
  width: 20%;
  padding: 3% 0 4% 0;
  margin-right: 2%;
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

  cursor: pointer;
  /* :focus {
    color: #008af6;
    border: 1px solid #008af6;
  } */
  margin: 1%;
`;

export const Good = styled.img`
  width: 25%;
`;
export const Soso = styled.img`
  width: 25%;
`;
export const Bad = styled.img`
  width: 22%;
`;

export const WrapperBottom = styled.div`
  width: 50%;
  margin: 5% auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 3%;
`;
export const Button = styled.div`
  width: 50%;
  height: 40px;
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
export const WraperQuestion = styled.div`
  width: 100%;
  margin: 0 auto;
`;

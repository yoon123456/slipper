import styled from "@emotion/styled";
import Slider from "react-slick";

export const WrapperOut = styled.div`
  width: 50%;
  height: 650px;
  margin: 3% auto;
  padding: 1%;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 4px 4px #e1e1e1;
`;
export const WrapperTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const TopLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;
// slider
export const SliderWrap = styled.div`
  width: 90%;
  margin: 4% auto 0 auto;
`;
export const ImageWrap = styled.div`
  width: 100%;
  height: 150px;
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
  height: 30%;
`;
export const Img = styled.img`
  width: 40%;
  height: 150px;
  object-fit: cover;
  background-color: green;
  margin-right: 10px;
  border-radius: 5%;
`;
//
export const TopRight = styled.div`
  width: 50%;
  padding: 2%;
`;
export const UserInfoWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const UserWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const UserImg = styled.img``;
export const UserName = styled.div`
  font-size: 1.6rem;
  padding: 5px;
`;
export const UserWriteDate = styled.div``;

export const UserTitle = styled.div`
  width: 100%;
  height: 50px;
  font-size: 2.5rem;
`;
export const UserLiving = styled.div`
  width: 100%;
  height: 30px;
  font-size: 1.5rem;
`;
export const UserMiddle = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2%;
`;
export const ShopName = styled.div`
  width: 30%;
  font-size: 1.6rem;
`;
export const ShopRatingWrap = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const ShopRating = styled.div`
  width: 20%;
  font-size: 1.6rem;
`;
export const RatingWrap = styled.div`
  width: 30%;
`;

export const UserContents = styled.div`
  width: 95%;
  height: 250px;
  font-size: 1.5rem;
  padding: 2%;
  margin-top: 2%;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  /* border: 1px solid gainsboro; */
  border-radius: 3%;
  background-color: #fbfbfd;
`;

export const Map = styled.img`
  width: 100%;
  height: 300px;
`;
export const CategoryWrap = styled.div`
  width: 100%;
`;

export const Good = styled.img`
  width: 33.3%;
`;
export const Soso = styled.img`
  width: 33.3%;
`;
export const Bad = styled.img`
  width: 30%;
`;

export const WrapperBottom = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`;
export const Button = styled.div`
  width: 90px;
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

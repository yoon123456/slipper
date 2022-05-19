import styled from "@emotion/styled";
import Slider from "react-slick";

export const WrapperOut = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    to right,
    white 0%,
    white 50%,
    #f5f7f9 50%,
    #f5f7f9 100%
  );
  display: flex;
  flex-direction: column;
  position: relative;
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
  padding: 7% 7% 5% 13%;
`;
export const EditDeleteWrap = styled.div`
  width: 3%;
  position: absolute;
  top: 3%;
  right: 2%;
  display: flex;
  justify-content: space-between;
`;
export const Icon = styled.img`
  width: 40%;
  cursor: pointer;
`;
// slider
export const SliderWrap = styled.div`
  width: 90%;
  margin: 10% auto 0 auto;
`;
export const ImageWrap = styled.div`
  width: 100%;
  height: 200px;
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
  height: 50%;
`;
export const Img = styled.img`
  width: 40%;
  height: 200px;
  object-fit: cover;
  margin-right: 10px;
  border-radius: 5%;
`;
//
export const TopRight = styled.div`
  width: 50%;
  padding-top: 2%;
  padding: 7% 13% 10% 5%;
`;
export const UserInfoWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 2% 5%;
`;
export const UserWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1% 3% 1% 1%;
`;
export const User = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`;
export const UserImg = styled.img`
  width: 7%;
`;
export const UserName = styled.div`
  width: 100%;
  font-size: 1.7rem;
`;
export const UserWriteDate = styled.div`
  width: 100%;
  font-size: 1rem;
  color: gray;
  padding-top: 2%;
`;

export const UserTitle = styled.div`
  width: 100%;
  font-size: 2.7rem;
  padding: 3% 0 3% 5%;
`;
export const UserLiving = styled.div`
  width: 60%;
  height: 30px;
  font-size: 1.5rem;
  color: gray;
  padding: 0 5% 0 3%;
  display: flex;
  justify-content: flex-end;
`;
export const UserMiddle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4% 2% 4% 5%;
`;
export const ShopName = styled.div`
  width: 30%;
  font-size: 2rem;
  padding-left: 3%;
`;
export const ShopRatingWrap = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10%;
`;
export const ShopRating = styled.div`
  width: 20%;
  font-size: 1.6rem;
`;
export const RatingWrap = styled.div`
  width: 30%;
`;

export const UserContents = styled.div`
  width: 94%;
  max-height: 300px;
  font-size: 1.5rem;
  padding: 2%;
  margin: 2% 0 0 2%;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  border-radius: 3%;
  /* background-color: #fbfbfd; */
`;

export const Map = styled.img`
  width: 100%;
  height: 360px;
`;
export const CategoryWrap = styled.div`
  width: 100%;
  padding: 0px;
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
  margin: 30px auto;
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

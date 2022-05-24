import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const fadeInDown = keyframes`
    0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
`;
export const fadein = keyframes`
  from {
        opacity:0;
    }
    to {
        opacity:1;
    }
`;
export const DivOut = styled.div``;

export const DivBox = styled.div``;
export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  animation: ${fadein} 2s;
`;
export const Div = styled.div`
  width: 100%;
`;
export const Img1 = styled.div`
  font-size: 45px;
`;
export const Img2 = styled.div`
  font-size: 45px;
`;
export const Img3 = styled.div`
  font-size: 45px;
`;
export const Pbox1 = styled.div`
  display: flex !important;
  justify-content: space-around;
  align-items: center;
  color: white;
  background-color: #ff7ca8;
  font-size: 50px;
  font-weight: 700;
`;
export const Pbox2 = styled.div`
  display: flex !important;
  justify-content: space-around;
  align-items: center;
  color: white;
  background-color: #42c58a;
  font-size: 50px;
  font-weight: 700;
`;
export const Pbox3 = styled.div`
  display: flex !important;
  justify-content: space-around;
  align-items: center;
  color: white;
  font-size: 50px;
  background-color: #ff9f40;
  font-weight: 700;
`;
export const ArrowBox = styled.div`
  width: 40%;
  height: 40px;
  margin-top: 50px;
  font-size: 2.3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid white;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background-color: white;
    color: #008af6;
    text-align: center;
  }
`;
export const Arrow = styled.img``;
export const ArrowSpan = styled.div``;

export const TBox = styled.div``;
export const show = keyframes`
  0% {margin-top:-270px;}
  5% {margin-top:-180px;}
  33% {margin-top:-180px;}
  38% {margin-top:-90px;}
  66% {margin-top:-90px;}
  71% {margin-top:0px;}
  99.99% {margin-top:0px;}
  100% {margin-top:-270px;}

`;

export const Txt = styled.div`
  margin-bottom: 20px;
  color: white;
  font-size: 25px;
  font-weight: 300;
`;

export const Img = styled.img``;
export const ImgBox = styled.div``;

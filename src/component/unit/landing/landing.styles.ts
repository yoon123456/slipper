import styled2 from "@emotion/styled";
import { styled } from "@mui/material/styles";
import { keyframes } from "@emotion/react";
import ButtonBase from "@mui/material/ButtonBase";

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
export const fadein = keyframes`
  from {
        opacity:0;
    }
    to {
        opacity:1;
    }
`;
export const bounceArrow = keyframes`
  50% {
    transform: translateY(-50%);
  }
`;

export const WrapperOut = styled2.div`
animation: ${fadein} 2s;
`;

// landing top
export const WrapperTop = styled2.div`
  width: 100%;
  :before {
    animation: ${bounceArrow} 1s ease infinite;
    bottom: 1rem;
    color: #fff;
    content: 'Scroll';
    font-size: 2rem;
    height: 3rem;
    left: 50%;
    letter-spacing: -1px;
    line-height: 2rem;
    margin-left: -2.5rem;
    opacity: 0.8;
    position: absolute;
    text-align: center;
}
`;
export const ScrollArrow = styled2.img`
  animation: ${bounceArrow} 1s ease infinite;
  bottom: 2.3rem;
  left: 50%;
  letter-spacing: -1px;
  line-height: 4rem;
  margin-left: -3rem;
  position: absolute;
  text-align: center;
  width: 6rem; 
`;
export const LogoBox = styled2.div`
  position: absolute;
  width: 9%;
  margin: 40px;
`;
export const MainFlex = styled2.div`
  display: flex;
`;

export const Main = styled2.div`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;
export const MainImg = styled2.img`
  width: 100%;
  height: 100%;
`;
export const MainBlue = styled2.div`
  text-align: center;
`;
export const TextBox = styled2.div`
  position: absolute;
  top: 33%;
  right: 20%;
  transform: translate(50%, -80%);
  color: white;
  text-transform: uppercase;
  font-size:4rem;
  font-weight:bold;
  padding-top:200px;  
  // position:fixed;
  // width:100%;
  bottom:45%;
  display:block;
`;
export const TextIn = styled2.div`
  height:50px;
  overflow:hidden;
`;
export const TextO = styled2.div`
  animation: ${show} 5s linear infinite;

`;
export const TextOut = styled2.div`
`;
export const TextFirst = styled2.div`
  color:#fff;
  padding:4px 12px;
  height:45px;
  margin-bottom:45px;
  display:inline-block;
  font-size: 3.3rem;

`;
export const TextSecond = styled2.div`
  color:#fff;
  padding:4px 12px;
  height:45px;
  margin-bottom:45px;
  display:inline-block;
  font-size: 3.3rem;

`;
export const TextLast = styled2.div`
  color:#fff;
  padding:4px 12px;
  height:45px;
  margin-bottom:45px;
  display:inline-block;
  font-size: 3.3rem;

`;
export const bounce = keyframes`
  100% {
    top: -20px;
    text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
      0 5px 0 #ccc, 0 6px 0 #ccc, 0 7px 0 #ccc, 0 8px 0 #ccc, 0 9px 0 #ccc,
      0 50px 25px rgba(0, 0, 0, 0.2);
  }
  `;
export const H1 = styled2.h1`
    cursor: default;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 40%;
    height: 150px;
    margin: auto;
    display: block;
    text-align: left;
    font-family: "Luckiest Guy", cursive;
    -webkit-font-smoothing: antialiased;
    span {
      position: relative;
      top: 10px;
      display: inline-block;
      -webkit-animation: ${bounce} 0.3s ease infinite alternate;
      font-size: 14rem;
      color: #fff;
      z-index:2;
      text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
      0 5px 0 #ccc, 0 6px 0 transparent, 0 7px 0 transparent, 0 8px 0 transparent,
      0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.4);

      &:nth-child(2){
        -webkit-animation-delay: 0.1s;
      }
      &:nth-child(3){
        -webkit-animation-delay: 0.2s;
      }
      &:nth-child(4){
        -webkit-animation-delay: 0.3s;
      }
      &:nth-child(5){
        -webkit-animation-delay: 0.4s;
      }
      &:nth-child(6){
        -webkit-animation-delay: 0.5s;
      }
      &:nth-child(7){
        -webkit-animation-delay: 0.6s;
      }
      &:nth-child(8){
        -webkit-animation-delay: 0.7s;
      }
    }
  `;
export const WriteImage = styled2.img`
  width: 60%;
  display: block;
  margin: 0 auto;
  margin-bottom: 200px;
`;
export const SearchImage = styled2.img`
  width: 60%;
  display: block;
  margin: 0 auto;
  margin-bottom: 150px;

`;
export const MypageImage = styled2.img`
  width: 60%;
  display: block;
  margin: 0 auto;
  margin-bottom: 150px;
`;
export const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  // height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

export const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

export const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

export const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

export const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export const ArrowBox = styled2.div`
  height: 40px;
  margin-top: 50px;
  font-size: 2.3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid black;
  border-radius: 10px;
  cursor: pointer;

  :hover{
    background-color: white;
    color: #008af6;
    text-align: center;
  
  }
`;
export const Arrow = styled2.img`
`;
export const ArrowSpan = styled2.div`
`;

export const Box = styled2.div`
  height: 100vh;
`;
export const TBox = styled2.div`
  display: flex;
  flex-direction: column;
`;
export const Img1 = styled2.div`
  font-size: 30px;
`;
export const Img2 = styled2.div`
  font-size: 30px;
  text-align: center;
`;
export const Img3 = styled2.div`
  width: 740px;
  font-size: 30px;
  text-align: center;
`;

export const Pbox1 = styled2.div`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f4f4f4;
`;
export const ImageCafe = styled2.img`
  width: 290px;e
  display: flex;
  justify-content: flex-end;
  :hover {
    filter: blur(3px);
    transition: 0.3s ease-in-out;
  }
`;
export const Pbox2 = styled2.div`
  height: 100%;
`;
export const Pbox3 = styled2.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Txt = styled2.div`
  margin-bottom: 15px;
  margin-top: 25px;
  font-size: 20px;
  text-align: center;
  font-weight: 300;
`;

export const Img = styled2.img``;
export const LastImage = styled2.img`
  margin-left: 100px;
`;

export const ImgBox1 = styled2.div`
  width: 500px;
  height: 500px;
  background-color: #ff9f40;
  :hover {
    span {
      opacity: 1;
    }
    /* filter: blur(5px);
    transition: 0.3s ease-in-out; */
    filter: opacity(0.7);
    transition: 0.3s ease-in-out;
  }
  cursor: pointer;
`;
export const ImgBox2 = styled2.div`
  width: 500px;
  margin: 0 auto;
  background-color: #42c58a;
  margin-top: 50px;
  backface-visibility: hidden;
  :hover {
    span {
      opacity: 1;
    }
    filter: opacity(0.7);
    transition: 0.3s ease-in-out;
  }
  cursor: pointer;
`;
export const ImgBox3 = styled2.div`
  width: 700px;
  background-color: #ff7ca8;
  :hover {
    span {
      opacity: 1;
    }

    filter: opacity(0.7);
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }
`;

export const Middle = styled2.span`
  transition: 0.3s ease-in-out;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
`;
export const MiddleText = styled2.div`
  background-color: #fff;
  color: black;
  font-weight: 700;
  font-size: 16px;
  padding: 16px 32px;
  cursor: pointer;
`;

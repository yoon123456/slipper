// 해리 작업 5/12
import styled from "@emotion/styled";

export const WrapperOut = styled.div`
  font-family: "HallymGothic-Regular";
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* background-color: red; */
`;
export const TopColumn = styled.div`
  width: 33.5%;
  /* border: 1px solid #008af6; */
  /* border-bottom: none; */
  box-shadow: 5px -5px 9px 5px rgba(184, 184, 184, 1);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
export const TopRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const TopImg = styled.img`
  width: 15%;
  height: 15%;
  /* margin-right: 1%; */
`;
export const Top = styled.div`
  font-size: 2rem;
`;
export const TopDetail = styled.div`
  text-align: center;
`;
export const StepWrapper = styled.div`
  width: 100%;
  padding: 10%;
  border-radius: 41px 41px 41px 41px;
  -moz-border-radius: 41px 41px 41px 41px;
  -webkit-border-radius: 41px 41px 41px 41px;
  -webkit-box-shadow: 10px 10px 20px 3px rgba(214, 214, 214, 1);
  -moz-box-shadow: 10px 10px 20px 3px rgba(214, 214, 214, 1);
  box-shadow: 10px 10px 20px 3px rgba(214, 214, 214, 1);
`;
export const Head = styled.div`
  margin-bottom: 1.5%;
  font-size: 1.4rem;
  color: #008af6;
  /* color: white; */
`;
export const DateWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Date = styled.input`
  width: 33%;
  margin-bottom: 6%;
  border: none;
  border-bottom: 1px solid gainsboro;
  outline: none;
  font-size: 1.2rem;
`;

export const DateBetween = styled.div`
  width: 12%;
  color: gray;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 6%;
`;
export const DateButton = styled.button`
  width: 7%;
  height: 25px;
  margin-bottom: 6%;
  background-color: white;
  color: gray;
  border: 1px solid gainsboro;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  :hover {
    color: #008af6;
    border: 1px solid #008af6;
  }
`;
export const HeadCategory = styled.div`
  margin-bottom: 0;
  font-size: 1.4rem;
  color: #008af6;
`;
export const HeadContents = styled.div`
  margin-top: 1%;
  margin-bottom: 1.5%;
  font-size: 1.4rem;
  color: #008af6;
`;
export const Input = styled.input`
  width: 100%;
  padding: 1%;
  margin-bottom: 6%;
  border: none;
  border-bottom: 1px solid gainsboro;
  outline: none;
  font-size: 1.2rem;
  ::placeholder {
    color: lightgray;
  }
`;
export const RatingWrapper = styled.div`
  margin-bottom: 5%;
`;
export const Rating = styled.img`
  width: 25px;
  height: 25px;
`;
export const StepButton = styled.button`
  width: 5%;
  height: 5%;
  cursor: pointer;
  margin-top: 10%;
`;
export const Map = styled.img`
  width: 100%;
  height: 40%;
  margin-bottom: 6%;
`;
// export const ImageWrapper = styled.div`
//   width: 100%;
//   height: 70%;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;
// `;
export const ImageRow = styled.div`
  width: 100%;
  padding: 0 10% 0 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;
export const ButtonWrapper = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 20% 30% 20% 30%;
`;
export const Button = styled.div`
  width: 40%;
  padding: 2%;
  font-size: 1.6rem;
  text-align: center;
  /* color: #008af6; */
  color: #ffcfec;
  /* border: 2px solid #008af6; */
  border: 2px solid #ffcfec;
  border-radius: 20px;
  cursor: pointer;
  :hover {
    /* background-color: #008af6; */
    background-color: #ffcfec;
    color: white;
  }
`;

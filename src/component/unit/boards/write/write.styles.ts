// 해리 작업 5/12
import styled from "@emotion/styled";

export const WrapperOut = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 60px;
  padding-bottom: 60px;
`;
export const WrapperTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;
export const CategoryHeader = styled.div`
  width: 80px;
  font-size: 20px;
  font-weight: bold;
  color: #008af6;
`;
export const WrapperCenter = styled.div`
  width: 100%;
`;
export const Title = styled.input`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid #dcdcdc;
  padding: 10px;
  font-size: 16px;
  outline: none;
`;
export const CenterRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 30px;
`;
export const Period = styled.input`
  width: 70%;
  border: none;
  border-bottom: 1px solid #dcdcdc;
  padding: 10px;
  font-size: 16px;
  outline: none;
`;
export const RatingWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-left: 20px;
  padding-right: 20px;
`;
export const RatingHeader = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #008af6;
`;
export const Rating = styled.img`
  width: 25px;
  height: 25px;
`;
export const Contents = styled.div`
  width: 100%;
  height: 300px;
  background-color: #dcdcdc;
  margin-bottom: 30px;
`;
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 70px;
  margin-bottom: 30px;
`;
export const Image = styled.div`
  width: 22%;
  height: 200px;
  background-color: #dcdcdc;
`;
export const Map = styled.img`
  width: 100%;
  height: 250px;
  margin-bottom: 10px;
`;
export const Store = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #dcdcdc;
  padding: 10px;
  font-size: 16px;
  outline: none;
  margin-bottom: 20px;
`;
export const Address = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #dcdcdc;
  padding: 10px;
  font-size: 16px;
  outline: none;
  margin-bottom: 20px;
`;
export const WrapperBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  /* padding-top: ; */
  padding-left: 250px;
  padding-right: 250px;
  margin-top: 40px;
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

import styled from "@emotion/styled";

export const WrapperOut = styled.div`
  width: 100%;
  margin: 0 0 0 0;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;
export const WrapperLeft = styled.div`
  width: 50%;
  margin: 0 auto;
  height: 100vh;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const WrapperTop = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 100px 0 40px 0;
`;
export const SearchBar = styled.input`
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 2px 4px 0px #e1e1e1;
  outline: none;
  padding: 20px;
  font-size: 20px;
`;
export const SearchButton = styled.div`
  width: 28%;
  height: 40px;
  margin: 0 auto;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #008af6;
  border-radius: 10px;
  color: #008af6;
  /* box-shadow: 0px 3px 11px 5px #e1e1e1; */
  cursor: pointer;
  :hover {
    background-color: #008af6;
    color: white;
  }
`;

export const Serach = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
export const CategoryWrap = styled.div`
  width: 80%;
  margin: 0 auto 40px auto;
`;
export const WrapperMiddle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #bbbebe6f;
  border-top: 2px solid #bbbebe6f;
  padding: 10px 7%;
  margin: 70px 0 70px 0;
`;
export const WrapperArray = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-around;
`;
export const Array = styled.div`
  width: 50%;
  cursor: pointer;
  :hover {
    font-weight: bold;
  }
`;
export const WrapperWrite = styled.div``;

export const WrapperBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;

export const Button = styled.div`
  width: 100px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  /* box-shadow: 0px 3px 11px 5px #e1e1e1; */
  cursor: pointer;
  :hover {
    font-weight: bold;
  }
`;
export const WrapperRight = styled.div`
  width: 40%;
  height: 100vh;
  /* overflow-y: hidden; */
`;
export const Map = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

// hover

export const Gallery = styled.div`
  width: 30%;
  height: 250px;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
  margin-bottom: 20px;
`;
export const A = styled(Gallery)`
  display: block; /* 영역적용위해 사용 */
  width: 100%;
  height: 100%;
  position: relative; /* absolute의 기본기준은 body로 처리 - 현재 요소로 기준변경 */
`;

export const Figcaption = styled(Gallery)`
  width: 100%;
  /* height: 100%; */
  background-color: rgba(0, 0, 0, 0.7);

  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */

  position: absolute; /* 이미지와 겹치게 처리 */
  top: 0;
  left: 0;

  color: #fff;
  text-align: center;
  line-height: 200px;

  opacity: 0; /* 처음엔 안보이고 */

  transition: 0.3s;
  :hover {
    opacity: 1;
  }
`;
export const Img = styled.img`
  width: 100%;
`;
export const Icon = styled.div`
  position: absolute;
  top: -70px;
  right: 10px;
  height: 20px;
`;
export const Categoty = styled.div`
  position: absolute;
  top: -50px;
`;
export const Title = styled.div`
  position: absolute;
  top: 10px;
`;

// 각각의 글 상세로 들어가는것 수정해본것
export const UserContents = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  padding-top: 20px;
  cursor: pointer;
`;
export const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 30px;
  :hover {
    opacity: 0.7;
  }
`;
export const Heart = styled.div`
  position: absolute;
  top: 30px;
  right: 20px;
  color: white;
  width: 20px;
  height: 20px;
`;
export const ListTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
export const ListHometown = styled.div`
  color: #7b7e7e;
`;

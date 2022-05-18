import styled from "@emotion/styled";

export const WrapperOut = styled.div`
  width: 100%;
  margin: 0 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "HallymGothic-Regular";
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
  padding: 30px 0 0 0;
`;

export const WrapperBody = styled.div`
  display: flex;
  width: 90%;
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
  font-size: 2rem;
`;
export const SearchButton = styled.div`
  width: 15%;
  height: 40px;
  margin: 0 auto;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  border: 2px solid #008af6;
  border-radius: 10px;
  color: #008af6;
  cursor: pointer;
  :hover {
    background-color: #008af6;
    color: white;
  }
`;

export const Serach = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2%;
`;
export const CategoryWrap = styled.div`
  width: 80%;
  margin: 0 auto;
`;
export const WrapperMiddle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2% 7%;
`;
export const WrapperArray = styled.div`
  width: 8%;
  display: flex;
  justify-content: space-around;
`;
export const Array = styled.div`
  width: 50%;
  text-align: end;
  font-size: 1.2rem;
  cursor: pointer;
  :hover {
    font-size: 1.4rem;
  }
`;
export const WrapperWrite = styled.div`
  width: 42%;
  display: flex;
  align-items: center;
`;

export const WrapperBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;

export const Button = styled.div`
  width: 10%;
  height: 35px;
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  cursor: pointer;
  :hover {
    font-weight: bold;
  }
`;
export const Pen = styled.img`
  width: 20px;
`;
export const WrapperRight = styled.div`
  width: 45%;
  height: 100vh;
  margin-left: 5%;
  /* overflow-y: hidden; */
`;
export const Map = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

// 각각의 글 상세로 들어가는것 수정2
export const UserContents = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
  cursor: pointer;
  box-shadow: 6px 4px 6px -5px gainsboro;
  border-radius: 10px;
  margin: 0 auto 20px auto;
  :hover {
    box-shadow: 5px 5px 15px 5px #e1e1e1;
  }
`;
export const ImageWrap = styled.div`
  width: 40%;
  height: 160px;
`;
export const UserWrap = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5%;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 0 0 10px;
  position: relative;
`;
export const Heart = styled.img`
  position: absolute;
  top: 6%;
  left: 34%;
  color: red;
  width: 20px;
  height: 20px;
  z-index: 1;
  cursor: pointer;
`;
export const ListTitleWrap = styled.div`
  padding: 3%;
`;

export const ListTitle = styled.div`
  font-size: 2rem;
  font-weight: 500;
`;
export const ListHometown = styled.div`
  color: #7b7e7e;
  font-size: 1rem;
`;
export const ListShopName = styled.div`
  color: #2a2f2f;
  font-size: 1.5rem;
`;

// hover

// export const Gallery = styled.div`
//   width: 30%;
//   height: 250px;
//   overflow: hidden;

//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 10%;
//   margin-bottom: 20px;
// `;
// export const A = styled(Gallery)`
//   display: block; /* 영역적용위해 사용 */
//   width: 100%;
//   height: 100%;
//   position: relative; /* absolute의 기본기준은 body로 처리 - 현재 요소로 기준변경 */
// `;

// export const Figcaption = styled(Gallery)`
//   width: 100%;
//   /* height: 100%; */
//   background-color: rgba(0, 0, 0, 0.7);

//   /* display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center; */

//   position: absolute; /* 이미지와 겹치게 처리 */
//   top: 0;
//   left: 0;

//   color: #fff;
//   text-align: center;
//   line-height: 200px;

//   opacity: 0; /* 처음엔 안보이고 */

//   transition: 0.3s;
//   :hover {
//     opacity: 1;
//   }
// `;
// export const Img = styled.img`
//   width: 100%;
// `;
// export const Icon = styled.div`
//   position: absolute;
//   top: -70px;
//   right: 10px;
//   height: 20px;
// `;
// export const Categoty = styled.div`
//   position: absolute;
//   top: -50px;
// `;
// export const Title = styled.div`
//   position: absolute;
//   top: 10px;
// `;

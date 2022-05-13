import styled from "@emotion/styled";

export const WrapperOut = styled.div`
  width: 50%;
  margin: 0 auto;
`;
export const WrapperTop = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 40px;
`;
export const SearchBar = styled.input`
  width: 80%;
  height: 50px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 2px 1px 1px #d1cbcb;
  outline: none;
  padding: 20px;
  font-size: 20px;
`;
export const SearchButton = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20%;
  box-shadow: 0px 2px 1px 1px #d1cbcb;
  cursor: pointer;
`;

export const Serach = styled.img`
  width: 40px;
  height: 40px;
`;
// export const WrapperMiddle = styled.div`
//   width: 28%;
//   height: 250px;
//   background-image: url("/image/listimage.png");
//   background-size: cover;
//   border-radius: 10%;
//   margin-top: 30px;
//   :hover {
//     opacity: 0.5;
//   }
// `;

// export const Icon = styled(WrapperMiddle)`
//   /* opacity: 0; */
//   background-image: none;
//   /* :hover {
//     opacity: 1;
//     z-index: 3;
//   } */
// `;
// export const Categoty = styled(WrapperMiddle)`
//   background-image: none;
// `;
// export const Title = styled(WrapperMiddle)`
//   background-image: none;
// `;

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
  background-color: #f2f2f2;
  font-size: 18px;
  border-radius: 30px;
  box-shadow: 0px 2px 1px 1px #d1cbcb;
  cursor: pointer;
  :hover {
    background-color: #b0d5cd;
    color: white;
  }
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

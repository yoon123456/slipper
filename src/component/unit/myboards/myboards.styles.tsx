import styled from "@emotion/styled";

export const WrapperOut = styled.div`
  width: 50%;
  margin: 0 auto;
`;
export const WrapperLeft = styled.div``;
export const UserPhoto = styled.div``;
export const UserName = styled.div``;
export const UserEmail = styled.div``;
export const WrapperRight = styled.div``;
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

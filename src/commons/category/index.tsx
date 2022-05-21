// 예원 작업 5/11
import styled from "@emotion/styled";

const CategoryWrapperOut = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Box = styled.div`
  width: 18%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  font-size: 1.3rem;
  border-radius: 30px;
  box-shadow: 0px 2px 4px 0px #e1e1e1;
  cursor: pointer;
  :hover {
    color: #008af6;
  }
`;

export default function Category() {
  return (
    <CategoryWrapperOut>
      <Box>#카페</Box>
      <Box>#음식</Box>
      <Box>#의류</Box>
      <Box>#유흥시설</Box>
      <Box>#편의시설</Box>
    </CategoryWrapperOut>
  );
}
// ffcfec

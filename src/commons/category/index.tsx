import styled from "@emotion/styled";

const WrapperOut = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`;

const Box = styled.div`
  width: 120px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  font-size: 20px;
  border-radius: 30px;
  box-shadow: 0px 2px 1px 1px #d1cbcb;
  cursor: pointer;
  :hover {
    background-color: #b0d5cd;
    color: white;
  }
`;

export default function Category() {
  return (
    <WrapperOut>
      <Box>#카페</Box>
      <Box>#음식</Box>
      <Box>#의류</Box>
      <Box>#유흥시설</Box>
      <Box>#편의시설</Box>
    </WrapperOut>
  );
}

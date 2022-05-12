import styled from "@emotion/styled";

export const WrapperOut = styled.div`
  width: 50%;
  margin: 0 auto;
`;
export const WrapperTop = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 40px;
`;
export const SearchBar = styled.input`
  width: 70%;
  height: 60px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 2px 1px 1px #d1cbcb;
  outline: none;
  padding: 20px;
  font-size: 20px;
`;
export const SearchButton = styled.div`
  width: 60px;
  height: 60px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20%;
  box-shadow: 0px 2px 1px 1px #d1cbcb;
  cursor: pointer;
`;

export const Serach = styled.img`
  width: 50px;
  height: 50px;
`;
export const WrapperMiddle = styled.div`
  width: 33%;
  height: 365px;
  background-image: url("/image/listimage.png");
  background-size: cover;
  border-radius: 20%;
  :hover {
    opacity: 0.5;
  }
`;

export const Icon = styled(WrapperMiddle)`
  opacity: 0;
  background-image: none;
  :hover {
    opacity: 1;
    z-index: 3;
  }
`;
export const Categoty = styled(WrapperMiddle)`
  background-image: none;
`;
export const Title = styled(WrapperMiddle)`
  background-image: none;
`;

export const WrapperBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;

export const Button = styled.div`
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

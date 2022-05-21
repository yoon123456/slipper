import styled from "@emotion/styled";

export const WrapperOut = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

export const SearchWrap = styled.div`
  width: 100%;
  display: flex;
`;

export const Search = styled.input`
  width: 50%;
  height: 50px;
  background-color: #ffffff;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 2px 4px 0px #e1e1e1;
  outline: none;
  padding: 20px;
  font-size: 2rem;
`;

export const CategoryWrapperOut = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 20px 20px 20px 20px;
  background-color: rgba(0, 0, 0, 0.01);
`;

export const Box = styled.div`
  width: 7%;
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
  margin: 1%;
  :focus {
  }
`;
export const SearchButton = styled.button`
  width: 15%;
  height: 40px;
  margin: 0 auto;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #008af6;
  border-radius: 10px;
  color: #008af6;
  font-size: 1.8rem;
  cursor: pointer;
  :hover {
    background-color: #008af6;
    color: white;
  }
`;

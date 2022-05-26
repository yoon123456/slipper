import styled from "@emotion/styled";

export const WrapperOut = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const SearchWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export const Search = styled.input`
  width: 80%;
  height: 50px;
  background-color: #ffffff;
  border: none;
  border-radius: 10px;
  box-shadow: 3px 3px 7px 0 rgba(0, 0, 0, 0.25),
    -4px -4px 7px 0 rgba(255, 255, 255, 0.3);
  outline: none;
  padding: 20px;
  margin-right: 5%;
  font-size: 2rem;
`;
export const SearchButton = styled.button`
  width: 13%;
  height: 5%;
  padding: 1%;
  color: gray;
  font-size: 1.3rem;
  text-decoration: none;
  text-shadow: 0px 0px 0px #f0f0f0;
  border: none;
  border-radius: 10px;
  background-color: white;
  background: linear-gradient(to bottom, white 5%, #ffffff 100%);
  display: inline-block;
  box-shadow: 3px 3px 7px 0 rgba(0, 0, 0, 0.25),
    -4px -4px 7px 0 rgba(255, 255, 255, 0.3);
  cursor: pointer;
  :active {
    position: relative;
    top: 2px;
    color: #008af6;
  }
`;
// export const SearchButton = styled.button`
//   width: 15%;
//   height: 40px;
//   margin: 0 auto;
//   background-color: #ffffff;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border: 2px solid #008af6;
//   border-radius: 10px;
//   color: #008af6;
//   font-size: 1.8rem;
//   cursor: pointer;
//   :hover {
//     background-color: #008af6;
//     color: white;
//   }
// `;

export const CategoryWrapperOut = styled.div`
  width: 80%;
  height: 150px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 1%;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.9);
  position: absolute;
  top: 38px;
  z-index: 2;
`;
export const BoxWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 10%;
  display: flex;
`;
export const Box = styled.button`
  width: 90%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  font-size: 1.3rem;
  border: none;
  border-radius: 30px;
  box-shadow: 0px 2px 4px 0px #e1e1e1;
  cursor: pointer;
  :focus {
    color: #008af6;
    border: 1px solid #008af6;
  }
  margin: 1%;
`;

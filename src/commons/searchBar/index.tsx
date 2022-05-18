import styled from "@emotion/styled";

const Search = styled.input`
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

export default function SearchBar() {
  return <Search type="text" placeholder="원하는 동네로 이동해보세요" />;
}

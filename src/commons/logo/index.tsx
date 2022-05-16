import styled from "@emotion/styled";

const LogoBox = styled.div`
  /* background-color: #fff314; */
`;
const LogoText = styled.img`
  padding: 40px;
  width: 20%;
`;

export default function Logo() {
  return (
    <LogoBox>
      <LogoText src="/image/logo.png"></LogoText>
    </LogoBox>
  );
}

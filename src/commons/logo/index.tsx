import styled from "@emotion/styled";

const LogoBox = styled.div``;
const LogoText = styled.img`
  width: 100%;
`;

export default function Logo() {
  return (
    <LogoBox>
      <LogoText src="/image/logo.png"></LogoText>
    </LogoBox>
  );
}

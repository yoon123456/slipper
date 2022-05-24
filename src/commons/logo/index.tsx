import styled from "@emotion/styled";
import { HeaderPrpos } from "../layout/header/header.types";

const LogoBox = styled.div`
  /* background-color: #fff314; */
`;
const LogoText = styled.img`
  padding: 40px;
  width: 17%;
`;

export default function Logo() {
  return (
    <LogoBox>
      <LogoText src="/image/logo.png"></LogoText>
    </LogoBox>
  );
}

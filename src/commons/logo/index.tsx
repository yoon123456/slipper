import styled from "@emotion/styled";

const LogoBox = styled.div`
  /* background-color: #008af6; */
`;
const LogoText = styled.div`
  font-family: "Luckiest Guy", cursive;
  color: #ffffff;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
    0 5px 0 #ccc, 0 6px 0 transparent, 0 7px 0 transparent, 0 8px 0 transparent,
    0 9px 0 transparent;
  font-size: 40px;
  padding: 40px;
  letter-spacing: 3px;
`;

export default function Logo() {
  return (
    <LogoBox>
      <LogoText>slipper</LogoText>
    </LogoBox>
  );
}

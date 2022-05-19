// 해리 작업 5/11
import styled from "@emotion/styled";
import { Menu, Dropdown, Button } from "antd";
import { useMovetoPage } from "../hooks/movePage";

const HamMenu = styled.div`
  font-family: "HallymGothic-Regular";
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  /* margin-bottom: 10px; */
  /* margin-top: 10px; */
  margin: 10px;
`;

const HamIcon = styled.img`
  width: 80px;
  height: 35px;
  margin: 20px;
  padding-left: 40px;
`;

export default function Ham() {
  const { onClickMoveToPage } = useMovetoPage();

  const menu = (
    <Menu
      items={[
        {
          label: (
            <HamMenu onClick={onClickMoveToPage("/boards/new")}>글쓰기</HamMenu>
          ),
        },
        {
          label: (
            <HamMenu onClick={onClickMoveToPage("/mypage")}>내 신발장</HamMenu>
          ),
        },
        {
          label: (
            <HamMenu onClick={onClickMoveToPage("/payment")}>
              이용권 결제
            </HamMenu>
          ),
        },
        {
          label: (
            <HamMenu onClick={onClickMoveToPage("/login")}>로그인</HamMenu>
          ),
        },
      ]}
    />
  );

  return (
    <>
      {/* <Dropdown overlay={menu} placement="bottom" arrow> */}
      {/* <Dropdown overlay={menu} arrow> */}
      <Dropdown overlay={menu}>
        <HamIcon src="/image/hamBorder.png" />
        {/* <Button>bottom</Button> */}
      </Dropdown>
    </>
  );
}

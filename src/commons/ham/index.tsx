// 5/26 햄버거(해리) 작업중!!!
// import styled from "@emotion/styled";
// import { useMovetoPage } from "../hooks/movePage";

// const Wrapper = styled.div`
//   width: 170px;
//   font-family: "HallymGothic-Regular";
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   /* justify-content: space-between; */
// `;
// const Icon = styled.img`
//   width: 90px;
//   height: 60px;
//   /* margin: 20px; */
//   padding: 10% 20% 10% 20%;
// `;
// const MenuWRapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   background-color: white;
//   display: none;
//   position: absolute;
//   z-index: 1; /*다른 요소들보다 앞에 배치*/
//   :hover {
//     display: block;
//   }
// `;
// const HamMenu = styled.div`
//   font-size: 1.5rem;
//   text-align: center;
//   font-weight: bold;
//   /* margin-bottom: 10px; */
//   /* margin-top: 10px; */
//   margin: 10px;
// `;

// export default function Ham() {
//   const { onClickMoveToPage } = useMovetoPage();

//   return (
//     <Wrapper>
//       <Icon src="/image/hamBorder.png" />
//       <MenuWRapper>
//         <HamMenu onClick={onClickMoveToPage("/boards/new")}>글쓰기</HamMenu>
//         <HamMenu onClick={onClickMoveToPage("/mypage")}>내 신발장</HamMenu>
//         <HamMenu onClick={onClickMoveToPage("/payment")}>이용권 결제</HamMenu>
//         <HamMenu onClick={onClickMoveToPage("/login")}>로그인</HamMenu>
//       </MenuWRapper>
//     </Wrapper>
//   );
// }

// 해리 작업 5/11(ANTD햄버거)
import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { Menu, Dropdown, Button } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { useMovetoPage } from "../hooks/movePage";
import { accessTokenState } from "../store";
import { IMutation } from "../types/generated/types";

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

const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

export default function Ham() {
  const { onClickMoveToPage } = useMovetoPage();

  const [accessToken] = useRecoilState(accessTokenState);
  const [logout] = useMutation<Pick<IMutation, "logout">>(LOGOUT);
  const router = useRouter();
  const onClickLogout = async () => {
    try {
      await logout();
      alert("성공");
      router.push("/boards");
    } catch (error) {
      alert("메롱");
    }
  };

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
          label: accessToken ? (
            <HamMenu onClick={onClickLogout}>로그아웃</HamMenu>
          ) : (
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

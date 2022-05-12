import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import HeaderContainor from "../layout/header/header.containor";
import Footer from "./footer/index";

const Body = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

interface ILayoutProps {
  children: ReactNode;
}

const HIDDEN_HEADERS = [
  "/",
  // ...
];
const HIDDEN_FOOTER = [
  "",
  // ...
];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);

  return (
    <>
      {/* {!isHiddenHeader && <LayoutHeader />} */}
      {!isHiddenHeader && <HeaderContainor />}
      <Body>{props.children}</Body>
      {!isHiddenFooter && <Footer />}
    </>
  );
}

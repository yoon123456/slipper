/* eslint-disable @next/next/no-sync-scripts */
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const Div = styled.div``;
const A = styled.div``;
const Wrapper = styled.div`
  height: 100vh;
  /*This part is important for centering*/
  display: grid;
  place-items: center;
`;

const typing = keyframes`
  from {
    width: 0
  }
`;

const blink = keyframes`
  50% {
  border-color: transparent
  }
`;
const Typing = styled.div`
  width: 26ch;
  animation: ${typing} 2s steps(22), ${blink} 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: "HallymGothic-Regular";
  font-size: 3rem;
`;

export default function SetTimeOut() {
  const router = useRouter();

  const onClickSlipper = () => {
    router.push(`/boards`);
  };
  setTimeout(onClickSlipper, 3000);

  return (
    <Div>
      <Wrapper>
        <Typing>슬리퍼와 함께 동네 구경 가볼까요 ?</Typing>
      </Wrapper>
      <A></A>
    </Div>
  );
}

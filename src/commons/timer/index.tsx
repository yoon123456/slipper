import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const Divbox = styled.div``;
const Boxin = styled.div`
  padding-top: 10%;
`;
const Num = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: gray;
`;

export default function Number(props: any) {
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (props.flag) {
      const countdown = setInterval(() => {
        if (parseInt(seconds) > 0) {
          setSeconds(parseInt(seconds) - 1);
        }
        if (parseInt(seconds) === 0) {
          if (parseInt(minutes) === 0) {
            clearInterval(countdown);
          } else {
            setMinutes(parseInt(minutes) - 1);
            setSeconds(59);
          }
        }
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [minutes, seconds, props.flag]);

  return (
    <Divbox>
      <Boxin>
        <Num>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </Num>
      </Boxin>
    </Divbox>
  );
}

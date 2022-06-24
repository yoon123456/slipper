import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const Divbox = styled.div``;
const Boxin = styled.div`
  margin-top: 20%;
`;
const Num = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: gray;
  margin-top: 5%;
`;

interface INmumberProps {
  flag: boolean;
}

export default function Number(props: INmumberProps) {
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (props.flag) {
      const countdown = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(countdown);
          } else {
            setMinutes(minutes - 1);
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

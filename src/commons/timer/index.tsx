// import { useEffect, useRef, useState } from "react";

// export default function Timer() {
//   const [min, setMin] = useState(3);
//   const [sec, setSec] = useState(0);
//   const time = useRef(180);
//   const timerId = useRef(null);

//   useEffect(() => {
//     timerId.current = setInterval(() => {
//       setMin(parseInt(time.current / 60));
//       setSec(time.current % 60);
//       time.current -= 1;
//     }, 1000);

//     return () => clearInterval(timerId.current);
//   }, []);

//   useEffect(() => {
//     if (time.current <= 0) {
//       console.log("타임아웃");
//       clearInterval(timerId.current);
//     }
//   }, [sec]);

//   return (
//     <>
//       <Timer>
//         {min}분 {sec}초
//       </Timer>
//     </>
//   );
// }

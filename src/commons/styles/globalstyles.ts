import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%;
    // font-size : 10px - 1rem
  }
  /* &:: webkit-scrollbar {
    width: 10px;
    height: 10px;
    background: transparent;
  }

  &:: webkit-scrollbar-thumb {
    background-color: red;
    border-radius;
  }
   */
  /* @font-face {
    font-family: "myfont";
    src: url("/font/scifibit.ttf");
  } */
  @font-face {
    font-family: "HallymGothic-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2204@1.0/HallymGothic-Regular.woff2")
      format("woff2");
    font-weight: 400;
    font-style: normal;
  }
  /* latin */
  @font-face {
    font-family: "Luckiest Guy";
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/luckiestguy/v18/_gP_1RrxsjcxVyin9l9n_j2hTd52ijl7aQ.woff2)
      format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
`;

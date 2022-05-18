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

  @font-face {
    font-family: "Luckiest Guy";
    src: url("https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap%27")
      /* src: local("Luckiest Guy") url("/fonts/LuckiesGuy-Regular.woff") */
      format("woff2");
    font-display: swap;
  }
`;

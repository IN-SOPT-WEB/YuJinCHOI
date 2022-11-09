import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
 ${reset}
 @font-face {
    font-family: 'establishRoomNo703OTF';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2112@1.0/establishRoomNo703OTF.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

body * {
  font-family: "establishRoomNo703OTF", "Arial", sans-serif;
}

 *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    line-height: 1.5;
	background-color: #fb6403;
	min-width: 620px;
  }
	`;
export default GlobalStyles;

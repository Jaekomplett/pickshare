import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'; // 브라우저마다 기본적으로 설치되어 있는 스타일을 지워주는 Node.js 패키지

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    width: 100%;
    height: 100%;
  }

  button {
    border: none;
  }
`;
export default GlobalStyles;

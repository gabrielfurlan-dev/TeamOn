import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${PoppinsFont}
  body {
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyle;
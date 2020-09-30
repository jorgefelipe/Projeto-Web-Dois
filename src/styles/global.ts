import { createGlobalStyle } from 'styled-components';

import { colors } from 'styles';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    min-height:100%;
   position: relative;
    background: ${colors.secondary};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
  }
  div {
    ::-webkit-scrollbar-track {
       background-color: #f4f4f4;
     }
    ::-webkit-scrollbar {
      width: 0px;
    }
    ::-webkit-scrollbar-thumb {
      background: #dad7d7;
    }
  }
`;
export default GlobalStyle;

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'DM Sans', sans-serif;
  }

  body {
    background: #4e4e4e;
  }

  button {
    cursor: pointer;
  }
`;

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }
  body{ 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: calc(100vh -50px);
    overflow: hidden;
  }
 
`;
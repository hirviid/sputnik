import { injectGlobal } from 'styled-components';

const theme = {
  colors: {
    primary: '#DBAE47',
    secondary: '#3B6164',
    grey: '#424B5E',
    greyDarker: '#3B4254',
    white: '#FFFFFF',
  },
};

injectGlobal`
  html, body, #root {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  
  body {
    /* padding-top: 20px; */
    background-color: ${theme.colors.greyDarker};
    color: ${theme.colors.white};
  }
`;

export default theme;

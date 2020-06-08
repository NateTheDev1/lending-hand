import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import mixins from './mixins';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
  * {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: 'Nunito', sans-serif;
  }


`;

export default GlobalStyle;

import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import mixins from './mixins';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
  * {
    box-sizing: border-box;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: smooth;
  }

  body {
    margin: 0;
    font-family: 'Nunito', sans-serif;
    animation: transitionIn 1.5s
  }



  @keyframes transitionIn {
    from {
      opacity: 0;

    }

    to {
      opacity: 1;

    }
  }

`;

export default GlobalStyle;

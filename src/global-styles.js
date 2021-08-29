import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset};

  html {
    scroll-behavior: smooth;
  }
   a{
    cursor: pointer;
   }

   input{
     border:none;
     outline: none;
   }
   ul{
     margin-top:20px;
     margin-bottom:20px;
   }

  
  `;

export default GlobalStyles;

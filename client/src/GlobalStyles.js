import { createGlobalStyle } from "styled-components";

import OxygenRegular from "./assets/fonts/Oxygen-Regular.ttf";

const GlobalStyles = createGlobalStyle`
*,*::before,*::after{
  box-sizing:border-box;
  }
  :root{
    --background-primary: #FFF4F2;
    --background-secondary: #FF9192;

    --emphasis-color: #002FD6;

    --basic-color: #FFFFFF;

    --primaryDark: #FF9192;
    --primaryLight: #FECDC5;
    --secondaryLight: #FFE591;
    --secondaryDark: #FFC057;
  }

  

    html {
      @font-face {
        font-family: "OxygenRegular";
        src: url(${OxygenRegular}) format("woff2");
        src: url(${OxygenRegular}) format("truetype");
              } 
      font-family:"OxygenRegular", sans-serif;
      color: var(--basic-color);  
    }
    
    
    body {
      padding:0;
      margin:0;
      background: var(--background-primary)
    }
    

h1, h2, h3, h4, h5 {
   margin: 0.3rem;
  letter-spacing: 0.2rem;
  }
  h1 {
    font-size: 1.8rem;
  color: var(--emphasis-color);
  margin-left: 2rem;
  }
h2 {
  font-size: 1.6rem;
   margin: 0 0 1rem 2rem;
   color: var(--emphasis-color);
 }
h3 {
  font-size: 1.4rem;
  letter-spacing:0;
}

h4 {
  font-size: 1.2rem;
  color: var(--emphasis-color);
  margin-left: 2rem;
}

span {

}

button, input  {
  outline: none;
  cursor: pointer;  
  border:none;
  font-family:"OxygenBold";
  font-size:1.25rem;
  
}


a {
  text-decoration: none;
}


`;

export default GlobalStyles;

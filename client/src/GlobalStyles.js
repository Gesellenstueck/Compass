import { createGlobalStyle } from "styled-components";
//hier auch Google-Fonts Import
import OxygenBold from "./assets/fonts/Oxygen-Bold.ttf";
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

    //card colors
    --card-pink: #FF9192;
    --card-rose: #FECDC5;
    --card-yellow: #FFE591;
    --card-orange: #FFC057;
  }

    #root{
      display: grid;
      //grid-settings here
      height: 100vh;
      height: 100vw;
    }

    html {
      @font-face {
        font-family: "OxygenRegular";
        src: url(${OxygenRegular}) format("truetype");
        
      } 
      font-family:"OxygenRegular";
      font-size:1rem;   
      color: white;
      
    }
    
    
    body {
      padding:0;
      margin:0;
      background: var(--background-primary)
    }
    
    h1, h2, h3, h4 {
      @font-face {
         font-family: "OxygenBold";
         src: url(${OxygenBold}) format("truetype");
         font-family:"OxygenBold";
       }  
}
         h1 {letter-spacing: 0.2rem;
         font-size: 2.5rem;
         }



button {
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

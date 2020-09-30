import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 body {
    font-family: 'Open Sans Condensed', sans-serif;
    padding: 20px 40px;
    
    @media screen and  (max-width: 800px) {
    padding: 10px;
    }
  }
 a {
    text-decoration:none ;
    color: black;
 }
  * {
    box-sizing: border-box;
 }
 input:-webkit-autofill {
    -webkit-box-shadow:0 0 0 50px white inset; /* Change the color to your own background color */
    -webkit-text-fill-color: #333;
}

input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 50px white inset;/*your box-shadow*/
    -webkit-text-fill-color: #333;
} 
`;
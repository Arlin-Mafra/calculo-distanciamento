import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

 :root{
     --background: #E5E5E5;
     --background-result: #C4C4C4;
     --header: #01579B;
     --button: #17A2B8;
     --button-ligth: #99DEE9;       
 }   
 *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     background: var(---background);
 }
 html{
     @media (max-width: 1080){
         font-size: 93.75%;
     }
     @media (max-width: 720){
         font-size: 87.5%;
     }
 }

 body{
    background-color: #fff1f1;
    -webkit-font-smoothing:antialised;
 }

 button{
     cursor: pointer;
 }

` 
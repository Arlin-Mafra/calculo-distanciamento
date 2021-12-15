import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

 *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
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
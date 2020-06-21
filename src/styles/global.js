import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default createGlobalStyle`

   @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');
   

      * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
   }

   body, button, a, input {
      font-family: 'Roboto', sans-serif;
   }

   button{
      cursor: pointer;
   }

   button, a, button a{
      text-decoration: none;
      display: inline;
   }

   a:hover{
      text-decoration: none !important;
   }
`;

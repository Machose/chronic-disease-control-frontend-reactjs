import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonRegister = styled(Link)`
   margin: 30px 0 20px;
   padding: 10px 20px;
   border: none;
   border-radius: 5px;

   background-image: linear-gradient(to right, #217770, #42b9af, #217770);
   background-size: 200%;
   transition: 0.5s;

   text-transform: uppercase;
   color: #fff;
   font-size: 16px;

   display: flex;
   justify-content: space-between;
   align-items: center;
   align-self: baseline;

   &:hover {
      background-position: right;
      color: #fff;
   }

   svg {
      transition: all 0.5s;
      transform: rotate(0deg);
      margin-right: 20px;
   }

   &:hover svg {
      transform: rotate(90deg);
   }
`;

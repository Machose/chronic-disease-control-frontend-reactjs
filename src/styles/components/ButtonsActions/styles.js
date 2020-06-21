import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonPen = styled(Link)`
   background: #17a2b8;
   color: #fff;
   border: none;
   border-radius: 4px;
   transition: background 0.5s;
   cursor: pointer;

   padding: 7px 10px;

   display: flex;
   align-items: center;
   justify-content: center;

   margin-right: 10px;

   &:hover {
      background: #39d5ed;
      color: #fff;
   }
`;

export const ButtonTrash = styled.button`
   background: red;
   color: #fff;
   border: none;
   border-radius: 4px;
   transition: background 0.5s;
   cursor: pointer;

   padding: 7px 10px;

   display: flex;
   align-items: center;
   justify-content: center;

   &:hover {
      background: #c21111;
   }
`;

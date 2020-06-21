import styled from "styled-components";

export const Container = styled.div`
   width: 55px;
   height: 100%;
   overflow: hidden;
   transition: width 0.2s linear;
   -webkit-transform: translateZ(0) scale(1, 1);
   box-shadow: 1px 0 15px rgba(0, 0, 0, 0.07);
   background: rgba(255, 255, 255, 0.7);

   &:hover {
      width: 250px;
      overflow: hidden;
   }

   ul {
      li {
         width: 250px;

         &:hover {
            background: linear-gradient(270deg, #36e39b52, #189cb3cc);
         }

         a {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 10px 0;
            color: #506a88;
            border-top: 1px solid #f2f2f2;

            &:hover {
               color: #f2f2f2;
            }
         }

         svg {
            width: 45px;
            height: 26px;
            margin: 0 5px;
         }
      }
   }
`;

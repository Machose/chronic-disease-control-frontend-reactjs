import styled from "styled-components";

export const Container = styled.div`
   position: relative;
   width: 80vw;
   min-width: 200px;
   max-width: 1050px;
   height: 500px;
   margin: 50px auto;
   border: none;
   box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
   border-radius: 5px;

   display: grid;
   grid-template-rows: 1fr;
   grid-template-columns: 1.5fr 1fr;
   overflow: hidden;

   min-width: 450px;

   @media (max-width: 1000px) {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
   }
`;

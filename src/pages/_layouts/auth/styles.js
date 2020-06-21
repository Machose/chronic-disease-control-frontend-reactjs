import styled from "styled-components";

export const Wrapper = styled.div`
   display: grid;
   height: 100vh;
   grid-template-columns: 1fr;
   grid-template-rows: 5vh 95vh;
`;

export const Header = styled.div`
   grid-column: 1/1;
   background: rgb(78, 76, 76);
   color: #fff;
   display: flex;
   align-items: center;
   justify-content: center;
   text-transform: capitalize;
   grid-row: 1/1;
`;

export const Main = styled.div`
   grid-column: 1/1;
   grid-row: 2/2;
`;

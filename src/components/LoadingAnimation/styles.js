import styled, { keyframes } from "styled-components";

const rotate = keyframes`
   100% {transform: rotate(360deg)}
`;

export const Container = styled.div`
   width: 150px;
   height: 150px;
   margin: 200px auto;
   display: flex;
`;

export const LoaderDiv = styled.div`
   width: calc(100% - 16px);
   height: calc(100% - 16px);
   border: 8px solid rgba(194, 209, 207, 0);
   border-top: 8px solid rgb(28, 122, 115);
   border-radius: 50%;

   height: 100%;
   width: 100%;

   display: flex;
   align-items: center;
   justify-content: center;

   animation: ${rotate} 9s linear infinite;
`;

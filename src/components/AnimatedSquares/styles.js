import styled, { css, keyframes } from "styled-components";

export const Container = styled.div.attrs((props) => ({
   page: props.attributes.page,
}))`
   position: absolute;

   ${(props) => {
      if (props.page === "singIn") {
         return css`
            & {
               grid-column: 1/1;
            }
         `;
      } else {
         return css`
            & {
               grid-column: 2/2;
            }
         `;
      }
   }}

   grid-row: 1/1;
   background: #217770;
   border-radius: 5px;
   height: 100%;
   width: 100%;
   opacity: 1;
   z-index: 20;
   padding: 20px;

   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;

   @media (max-width: 1000px) {
      display: none;
   }
`;

export const Title = styled.h1`
   color: #fff;
   font-size: 50px;
   text-align: center;
`;

export const Text = styled.p`
   color: #fff;
   font-size: 20px;
   text-align: center;
`;

const up = keyframes`
   from{
      opacity: 0;
      transform: translateY(0);
   }
   50%{
      opacity: 1;
   }
   to {
      opacity: 0;
      transform: translateY(-650px) rotate(960deg);
   }
`;

export const SquaresContainer = styled.ul``;

export const Square = styled.li.attrs((props) => ({
   size: props.size,
   position: props.position,
   animationDelay: props.animationDelay,
   duration: props.duration,
}))`
   list-style: none;
   height: ${(props) => props.size}px;
   width: ${(props) => props.size}px;
   background-color: rgba(255, 255, 255, 0.15);
   display: block;
   position: absolute;
   bottom: -40px;
   left: ${(props) => props.position}%;
   animation-delay: ${(props) => props.animationDelay};
   animation: ${up} ${(props) => props.duration}s infinite;
`;

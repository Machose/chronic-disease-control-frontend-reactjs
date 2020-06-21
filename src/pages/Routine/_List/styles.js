import styled from "styled-components";

export const Container = styled.div`
   margin: 50px;
`;

export const TypeRoutine = styled.div`
   margin: 20px auto;
   max-width: 900px;
   background: rgba(255, 255, 255, 0.5);
   padding: 20px;
   border-radius: 4px;
   box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
   display: flex;
   flex-direction: row;
   align-items: baseline;
   justify-content: space-between;
   padding: 20px 10px;
   margin: 20px 0;

   border-bottom: 2px solid rgba(0, 0, 0, 0.3);

   button {
      width: 35px;
      height: 35px;
      border-radius: 50%;

      border: 0;
      outline: 0;

      background-image: linear-gradient(to right, #217770, #42b9af, #217770);
      background-size: 200%;
      transition: 0.5s;

      &:hover {
         background-position: right;
         color: #fff;
      }

      svg {
         transition: all 0.5s;
         transform: rotate(0deg);
      }

      &:hover svg {
         transform: rotate(90deg);
      }
   }
`;

export const Title = styled.h4`
   margin-right: 20px;
`;

export const Content = styled.div`
   display: grid;
   gap: 20px;
   grid-template-columns: repeat(2, 1fr);
`;

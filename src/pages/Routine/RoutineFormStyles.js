import styled from "styled-components";

export const Title = styled.h4`
   margin-right: 20px;
`;

export const Content = styled.div`
   max-width: 500px;
   margin: 0 auto;
`;

export const Actions = styled.div`
   display: flex;
   justify-content: flex-end;

   button {
      margin-left: 20px;
   }
`;

export const Info = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: baseline;
   margin: 10px 0;
`;

export const DaysOfWeek = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   margin-top: 20px;

   div {
      font-weight: 600;
   }
`;

export const Repetitions = styled.ul`
   display: flex;
   flex-direction: row;
   justify-content: space-between;

   li {
      text-align: center;

      display: flex;
      align-items: center;
      justify-content: center;
   }
`;

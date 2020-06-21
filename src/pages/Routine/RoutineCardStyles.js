import styled from "styled-components";

export const Routine = styled.div`
   padding: 20px;
   border-radius: 4px;
   background: rgba(255, 255, 255, 0.5);
   box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
`;

export const Actions = styled.div`
   display: flex;
   justify-content: flex-end;

   button {
      border: 0;
      background: transparent;
      margin-left: 10px;
      outline: 0;
   }
`;

export const Info = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: baseline;
   margin: 10px 0;
`;

export const Name = styled.div`
   color: rgba(0, 0, 0, 0.7);
   font-weight: 600;
`;

export const Time = styled.div`
   font-weight: 600;
   color: #666;
`;

export const DaysOfWeek = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   margin-top: 20px;
`;

export const Repetitions = styled.ul`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   margin-top: 5px;

   list-style: none;
`;

export const Day = styled.li`
   text-align: center;
   line-height: 40px;
   transition: all 1s;

   height: 40px;
   width: ${(props) => (props.fullName ? "auto" : "40px")};
   border-radius: ${(props) => (props.fullName ? "10px" : "50%")};
   padding: ${(props) => (props.fullName ? "0 10px" : "")};

   color: ${(props) => (props.checked ? "#fff" : "#000")};

   background: ${(props) =>
      props.checked ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.5)"};

   border: 1px solid
      ${(props) =>
         props.checked ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.8)"};
`;

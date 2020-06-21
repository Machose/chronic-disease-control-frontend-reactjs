import styled, { css, keyframes } from "styled-components";

const alert = keyframes`
   0% {
      border: 1px solid #fff;
      transform: rotate(2deg)
   }
   25%{
      border: 1px solid red;
      transform: rotate(-2deg)
   }
   50%{
      border: 1px solid #fff;
      transform: rotate(2deg)
   }
   75%{
      border: 1px solid red;
      transform: rotate(-2deg)
   }
   100% {
      border: 1px solid #fff;
      transform: rotate(0deg)
   }
`;

export const Container = styled.div`
   min-width: 600px;
   max-width: 1000px;
   margin: 50px auto;
   display: flex;
   flex-direction: column;
   padding: 20px 50px;

   header {
      display: flex;
      align-self: center;
      align-items: center;

      button {
         border: 0;
         outline: 0;
         background: none;
         border-radius: 4px;
         margin: 0 5px;
         transition: all 0.5s;

         &:hover {
            background: rgba(0, 0, 0, 0.2);
         }
      }

      strong {
         color: #fff;
         font-size: 24px;
         margin: 0;
      }
   }

   ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 15px;
      margin-top: 30px;
      list-style: none;
   }
`;

export const Time = styled.li`
   padding: 20px;
   border-radius: 4px;
   background: #fff;

   opacity: ${(props) => (props.past && !props.alert ? 0.6 : 1)};

   ${(props) =>
      !props.alert
         ? ""
         : css`
              animation: ${alert} 2s infinite;
           `}

   div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
   }

   .observations {
      text-align: justify;
      margin-top: 5px;
      transition: all 0.5s;
      color: ${(props) => (props.past ? "#999" : "#666")};
      height: 0;
      opacity: 0;
      padding: 0;
   }

   &:hover {
      .observations {
         opacity: 1;
         height: auto;
         padding: 20px 0;
      }
   }

   strong {
      display: block;
      color: #217770;
      font-size: 20px;
      font-weight: 600;
   }

   span {
      display: block;
      margin-top: 3px;
      color: ${(props) => (props.past ? "#999" : "#000")};
   }
`;

export const Observation = styled.div`
   margin: 40px 0;
   padding: 20px;
   border-radius: 4px;
   background: #fff;
`;

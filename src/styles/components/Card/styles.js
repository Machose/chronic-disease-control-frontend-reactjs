import styled from "styled-components";

const Card = styled.div`
   background: #fff;
   box-shadow: 0px 0px 5px rgba(1, 1, 1, 0.2);
   border-radius: 5px;
   padding: 50px;
   margin: 100px auto 0;
   max-width: 80%;
   display: flex;
   flex-direction: column;

   hr {
      margin: 10px 0 50px;
      border: 0;
      border-bottom: 2px solid #8edfdb;
   }

   &::before {
      background: green;
   }
`;

export default Card;

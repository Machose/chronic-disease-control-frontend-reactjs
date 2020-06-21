import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
   max-width: 600px;
   margin: 50px auto;
   display: flex;
   flex-direction: column;

   form {
      display: flex;
      flex-direction: column;

      > button {
         margin: 25px 0 0;
         outline: 0;
      }
   }

   hr {
      border: 0;
      height: 1px;
      background: rgba(0, 0, 0, 0.2);
      margin-bottom: 10px;
   }

   button {
      height: 44px;
      background: #00bbbb;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.4s;
      outline: 0;

      &:hover {
         background: ${darken(0.08, "#00bbbb")};
      }
   }

   > button {
      margin: 10px 0 0;
      background: #f64c75;

      &:hover {
         background: ${darken(0.08, "#f64c75")};
      }
   }
`;

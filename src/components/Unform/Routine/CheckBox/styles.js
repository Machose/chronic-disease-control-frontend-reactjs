import styled from "styled-components";

export const InputBlock = styled.li`
   position: relative;
   margin-top: 10px;
   display: flex;
   flex-direction: column;

   label {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.5);
      border: 1px solid rgba(0, 0, 0, 0.8);
      text-align: center;

      line-height: 40px;
      color: #000;
      font-weight: 500;
      text-transform: capitalize;

      cursor: pointer;
   }

   input {
      display: none;

      &:checked + label {
         background: rgba(0, 0, 0, 0.8);
         color: #fff;
         border: 0;
      }
   }
`;

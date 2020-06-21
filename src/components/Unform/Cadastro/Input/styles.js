import styled from "styled-components";

export const InputBlock = styled.div`
   position: relative;
   margin-top: 10px;
   display: flex;
   flex-direction: column;

   label {
      display: block;
      font-weight: bolder;
      margin-bottom: 5px;
      flex: 1;
   }

   input {
      padding: 10px 15px;
      border: 1px solid #ccc;
      border-radius: 4px;
      flex: 1;
   }
`;

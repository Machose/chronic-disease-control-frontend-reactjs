import styled from "styled-components";

export const InputBlock = styled.div`
   position: relative;
   margin-top: 10px;

   input {
      width: 100%;
      margin: 10px 0;
      border: none;
      border-bottom: 1px solid #ccc;
      border-radius: 4px;
      padding: 10px;
      background: transparent;
   }

   label {
      position: absolute;
      left: 10px;
      top: 20px;
      transition: 0.5s;
      padding: 0;
      z-index: -1;
   }

   input:focus + label {
      transform: translateY(-30px);
      font-size: 13px;
      color: #42b9af;
   }

   input:valid + label {
      transform: translateY(-30px);
      font-size: 13px;
      color: #42b9af;
   }

   input:focus,
   input:valid {
      border-color: #42b9af;
   }
`;

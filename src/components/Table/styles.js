import styled from "styled-components";

export const TableContainer = styled.div`
   display: flex;
   flex-direction: column;
`;

export const TableInfo = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   margin-bottom: 10px;
`;

export const TableContent = styled.table`
   padding: 10px;
   border: none;
   border-collapse: collapse;

   th {
      text-align: center;
      border: 1px solid #000;
      padding: 10px 15px;
      background-color: rgba(196, 196, 196, 0.562);
   }

   td {
      border: 1px solid #000;
      padding: 10px 15px;
      text-align: center;

      div {
         display: flex;
         flex-direction: row;
         align-items: center;
         justify-content: center;

         flex: 1;
      }
   }
`;

export const Amount = styled.div`
   display: inline-block;

   label {
      margin-right: 5px;
   }

   select {
      padding: 8px 5px;
      border-radius: 5px;
   }
`;

export const Search = styled.input`
   border: 1px solid #ccc;
   border-radius: 4px;
   padding: 0 20px;
`;
export const PageCount = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;

   padding: 0;

   height: 50px;

   input {
      height: 40px;
      width: 30px;
      margin: 0 2px;
      text-align: center;
   }
`;

export const RecordCounter = styled.p`
   margin-top: 10px;
`;

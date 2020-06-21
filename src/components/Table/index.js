import React from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import {
   TableContainer,
   TableInfo,
   TableContent,
   Amount,
   Search,
   // PageCount,
   RecordCounter,
} from "./styles";

export default function Table({ headings, objects, keys }) {
   return (
      <TableContainer>
         <TableInfo>
            <Amount>
               <label> Quantidade por pagina</label>
               <select name="" id="">
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="25">25</option>
               </select>
            </Amount>
            <Search placeholder="Faça sua pesquisa" />
         </TableInfo>
         <TableContent>
            <thead>
               <tr>
                  {headings.map((heading) => (
                     <th key={heading}>{heading}</th>
                  ))}
               </tr>
            </thead>
            <tbody>
               {objects.map((object, index) => (
                  <tr key={index}>
                     {keys.map((key) => (
                        <td key={object["_id"] + key}>{object[key]}</td>
                     ))}
                  </tr>
               ))}
            </tbody>
         </TableContent>
         <TableInfo>
            <RecordCounter>
               {objects.length > 1
                  ? `${objects.length} Registros no Total`
                  : `${objects.length} Registro Inserido Apenas`}
            </RecordCounter>
            {/* <PageCount>
               <button>
                  <FaArrowLeft />
               </button>
               <input type="number" value="1" readOnly />
               <button>
                  <FaArrowRight />
               </button>
            </PageCount> */}
         </TableInfo>
      </TableContainer>
   );
}

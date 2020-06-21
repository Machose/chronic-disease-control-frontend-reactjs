import React from "react";

import { Container, LoaderDiv } from "./styles";

export default function LoadingAnimation() {
   return (
      <Container>
         <LoaderDiv>
            <LoaderDiv>
               <LoaderDiv>
                  <LoaderDiv>
                     <LoaderDiv></LoaderDiv>
                  </LoaderDiv>
               </LoaderDiv>
            </LoaderDiv>
         </LoaderDiv>
      </Container>
   );
}

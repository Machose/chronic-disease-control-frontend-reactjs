import React from "react";

import {
   Container,
   Title,
   NotFoundText,
   CubeNotFound,
   FaceOne,
   FaceTwo,
   FaceThree,
   FaceFour,
   FaceFive,
   FaceSix,
} from "./styles";

export default function NotFound() {
   return (
      <Container>
         <CubeNotFound>
            <FaceOne>
               <NotFoundText>404</NotFoundText>
            </FaceOne>
            <FaceTwo>
               <NotFoundText>404</NotFoundText>
            </FaceTwo>
            <FaceThree>
               <NotFoundText>404</NotFoundText>
            </FaceThree>
            <FaceFour>
               <NotFoundText>404</NotFoundText>
            </FaceFour>
            <FaceFive>
               <NotFoundText>404</NotFoundText>
            </FaceFive>
            <FaceSix>
               <NotFoundText>404</NotFoundText>
            </FaceSix>
         </CubeNotFound>
         <Title>Página não encontrada</Title>
      </Container>
   );
}

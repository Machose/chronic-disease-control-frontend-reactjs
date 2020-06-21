import styled, { keyframes } from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   height: 100vh;
   background: rgba(55, 78, 126, 1);
`;

export const NotFoundText = styled.h1`
   color: #fff;
   font-size: 50px;
`;
export const Title = styled.h2`
   color: #fff;
   font-size: 30px;
`;

// Animação do cubo

const cubeRotationNotFound = keyframes`
   from,to {
    -moz-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    -ms-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  16% {
    -moz-transform: rotateY(-90deg);
    -ms-transform: rotateY(-90deg);
    transform: rotateY(-90deg);
  }
  33% {
    -moz-transform: rotateY(-90deg) rotateZ(90deg);
    -ms-transform: rotateY(-90deg) rotateZ(90deg);
    transform: rotateY(-90deg) rotateZ(90deg);
  }
  50% {
    -moz-transform: rotateY(-180deg) rotateZ(90deg);
    -ms-transform: rotateY(-180deg) rotateZ(90deg);
    transform: rotateY(-180deg) rotateZ(90deg);
  }
  66% {
    -moz-transform: rotateY(-270deg) rotateX(90deg);
    -ms-transform: rotateY(-270deg) rotateX(90deg);
    transform: rotateY(-270deg) rotateX(90deg);
  }
  83% {
    -moz-transform: rotateX(90deg);
    -ms-transform: rotateX(90deg);
    transform: rotateX(90deg);
  }
`;

export const CubeNotFound = styled.div`
   -webkit-animation-name: ${cubeRotationNotFound};
   -webkit-animation-timing-function: ease-in-out;
   -webkit-animation-iteration-count: infinite;
   -webkit-animation-duration: 12s;

   animation-name: ${cubeRotationNotFound};
   animation-timing-function: ease-in-out;
   animation-iteration-count: infinite;
   animation-duration: 12s;

   -webkit-transform-style: preserve-3d;
   -moz-transform-style: preserve-3d;
   -ms-transform-style: preserve-3d;
   transform-style: preserve-3d;

   -webkit-transform-origin: 60px 60px 0;
   -moz-transform-origin: 60px 60px 0;
   -ms-transform-origin: 60px 60px 0;
   transform-origin: 60px 60px 0;
   width: 120px;
   height: 120px;
   margin-bottom: 30px;

   div {
      position: absolute;
      width: 120px;
      height: 120px;
      border: 1px solid #ccc;
      background: #29496c94;
      box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.2);
      text-align: center;
      font-size: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
   }
`;

export const FaceOne = styled.div`
   -webkit-transform: translateZ(60px);
   -moz-transform: translateZ(60px);
   -ms-transform: translateZ(60px);
   transform: translateZ(60px);
`;

export const FaceTwo = styled.div`
   -webkit-transform: rotateY(90deg) translateZ(60px);
   -moz-transform: rotateY(90deg) translateZ(60px);
   -ms-transform: rotateY(90deg) translateZ(60px);
   transform: rotateY(90deg) translateZ(60px);
`;

export const FaceThree = styled.div`
   -webkit-transform: rotateY(90deg) rotateX(90deg) translateZ(60px);
   -moz-transform: rotateY(90deg) rotateX(90deg) translateZ(60px);
   -ms-transform: rotateY(90deg) rotateX(90deg) translateZ(60px);
   transform: rotateY(90deg) rotateX(90deg) translateZ(60px);
`;
export const FaceFour = styled.div`
   -webkit-transform: rotateY(180deg) rotateZ(90deg) translateZ(60px);
   -moz-transform: rotateY(180deg) rotateZ(90deg) translateZ(60px);
   -ms-transform: rotateY(180deg) rotateZ(90deg) translateZ(60px);
   transform: rotateY(180deg) rotateZ(90deg) translateZ(60px);
`;

export const FaceFive = styled.div`
   -webkit-transform: rotateY(-90deg) rotateZ(90deg) translateZ(60px);
   -moz-transform: rotateY(-90deg) rotateZ(90deg) translateZ(60px);
   -ms-transform: rotateY(-90deg) rotateZ(90deg) translateZ(60px);
   transform: rotateY(-90deg) rotateZ(90deg) translateZ(60px);
`;
export const FaceSix = styled.div`
   -webkit-transform: rotateX(-90deg) translateZ(60px);
   -moz-transform: rotateX(-90deg) translateZ(60px);
   -ms-transform: rotateX(-90deg) translateZ(60px);
   transform: rotateX(-90deg) translateZ(60px);
`;

import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
`;

export const Main = styled.div`
   display: flex;
   flex-direction: row;
   flex: 1;
   height: calc(100vh - 60px);
   background: linear-gradient(90deg, #36e39b52, #189cb3cc);
`;

export const Footer = styled.div`
   bottom: 0;
   height: 5vh;
   background: #ccc;
`;

export const Component = styled.div`
   width: 100%;
`;

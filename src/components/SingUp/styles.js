import styled, { css } from "styled-components";

export const Container = styled.div.attrs((props) => ({
   page: props.attributes.page,
}))`
   display: flex;
   flex-direction: column;
   padding: 40px;

   @media (max-width: 1000px) {
      ${(props) => {
         if (props.page !== "singUp") {
            return css`
               & {
                  display: none;
               }
            `;
         }
      }}
   }
`;

export const FormContainer = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
`;

export const Title = styled.h3`
   text-align: center;
   margin-bottom: 10px;
`;

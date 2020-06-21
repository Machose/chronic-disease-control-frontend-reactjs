import styled, { css } from "styled-components";

export const Container = styled.div.attrs((props) => ({
   page: props.attributes.page,
}))`
   display: flex;
   flex-direction: column;
   padding: 20px;

   @media (max-width: 1000px) {
      ${(props) => {
         if (props.page !== "singIn") {
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
   display: flex;
   flex-direction: column;
   /* background: red; */
`;

export const UserImage = styled.img`
   align-self: center;
`;

export const Title = styled.h3`
   text-align: center;
   margin-bottom: 20px;
`;

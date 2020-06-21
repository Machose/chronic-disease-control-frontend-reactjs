import styled from "styled-components";

const LoginButton = styled.button.attrs((props) => ({
   disabled: props.loading.value,
}))`
   margin-top: 15px;
   padding: 10px 20px;
   width: 100%;

   border: none;
   border-radius: 5px;
   transition: 0.5s;

   background-image: linear-gradient(to right, #217770, #42b9af, #217770);
   background-size: 200%;

   color: #fff;
   font-size: 16px;

   &:hover {
      background-position: right;
   }

   &[disabled] {
      cursor: not-allowed;
      opacity: 0.6;
   }
`;

export default LoginButton;

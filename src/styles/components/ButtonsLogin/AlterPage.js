import styled from "styled-components";

const LoginButtonAlterPage = styled.button.attrs((props) => ({
   disabled: props.loading.value,
}))`
   margin-top: 20px;
   padding: 10px 20px;
   width: 100%;

   border: 1px solid #000;
   border-radius: 20px;
   transition: 0.5s;

   background: #fff;
   background-size: 200%;

   color: #000;
   font-size: 16px;

   &:hover {
      background: #595959;
      color: #fff;
   }

   outline: none;
   &:focus {
      outline: none;
   }

   &[disabled] {
      cursor: not-allowed;
      opacity: 0.6;
   }
`;

export default LoginButtonAlterPage;

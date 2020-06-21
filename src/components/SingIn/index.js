import React, { useRef } from "react";
import { connect } from "react-redux"; //conecta o componente com o estado do redux

import { singInRequest } from "../../store/modules/auth/actions";
import { alterPageLogin } from "../../store/modules/login/actions";

import { Form } from "@unform/web";

import avatar from "../../assets/image/avatar.svg";

import Input from "../Unform/Login/Input";

import LoginButton from "../../styles/components/ButtonsLogin";
import LoginButtonAlterPage from "../../styles/components/ButtonsLogin/AlterPage";

import ScreenDivider from "../../styles/components/screen-divider";

import { Container, FormContainer, UserImage, Title } from "./styles";

function SingIn({ dispatch, page, loading }) {
   const formRef = useRef(null);

   const handleSubmit = ({ email, password }) => {
      dispatch(singInRequest(email, password));
   };

   const handleAlterPage = () => {
      dispatch(alterPageLogin());
   };

   return (
      <Container attributes={{ page }}>
         <Title>Acessar </Title>
         <UserImage src={avatar} alt="avatar" width="100" />

         <FormContainer>
            <Form ref={formRef} onSubmit={handleSubmit}>
               <Input
                  type="text"
                  id="email"
                  name="email"
                  label="Email"
                  required
               />

               <Input
                  type="password"
                  id="password"
                  name="password"
                  label="Password"
                  required
               />
               <LoginButton loading={{ value: loading }} type="submit">
                  {loading ? "Carregando..." : "Login"}
               </LoginButton>
            </Form>
         </FormContainer>
         <ScreenDivider />
         <LoginButtonAlterPage
            loading={{ value: loading }}
            onClick={handleAlterPage}
         >
            Criar Nova Conta
         </LoginButtonAlterPage>
      </Container>
   );
}

export default connect((state) => ({
   page: state.login.page,
   loading: state.auth.loading,
}))(SingIn);

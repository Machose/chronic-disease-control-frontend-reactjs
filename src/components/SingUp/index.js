import React, { useRef } from "react";
import { connect } from "react-redux"; //conecta o componente com o estado do redux
import { Form } from "@unform/web";

import { Row, Col } from "react-bootstrap";

import { singUpRequest } from "../../store/modules/auth/actions";
import { alterPageLogin } from "../../store/modules/login/actions";

import Input from "../Unform/Login/Input";

import LoginButton from "../../styles/components/ButtonsLogin";
import LoginButtonAlterPage from "../../styles/components/ButtonsLogin/AlterPage";

import ScreenDivider from "../../styles/components/screen-divider";

import { Container, FormContainer, Title } from "./styles";

function SingUp({ dispatch, page, loading }) {
   const formRef = useRef(null);

   const handleSubmit = ({ name, email, password }) => {
      dispatch(singUpRequest(name, email, password));
   };

   const handleAlterPage = () => {
      dispatch(alterPageLogin());
   };

   return (
      <Container attributes={{ page }}>
         <Title>Criar Conta</Title>
         <FormContainer>
            <Form ref={formRef} onSubmit={handleSubmit}>
               <Row>
                  <Col>
                     <Input
                        type="text"
                        id="name"
                        name="name"
                        label="Name"
                        required
                     />
                  </Col>
               </Row>
               <Row>
                  <Col>
                     <Input
                        type="email"
                        id="email"
                        name="email"
                        label="Email"
                        required
                     />
                  </Col>
               </Row>
               <Row>
                  <Col>
                     <Input
                        type="password"
                        id="password"
                        name="password"
                        label="Password"
                        required
                     />
                  </Col>
               </Row>
               <LoginButton loading={{ value: loading }} type="submit">
                  {loading ? "Carregando..." : "Cadastrar"}
               </LoginButton>
            </Form>
         </FormContainer>
         <ScreenDivider />
         <LoginButtonAlterPage
            loading={{ value: loading }}
            onClick={handleAlterPage}
         >
            Já Possuo Uma Conta
         </LoginButtonAlterPage>
      </Container>
   );
}
export default connect((state) => ({
   page: state.login.page,
   loading: state.auth.loading,
}))(SingUp);

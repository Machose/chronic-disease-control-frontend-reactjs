import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Form } from "@unform/web";
import { Link, useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import Input from "../../../components/Unform/Cadastro/Input";

// Servico de back end
import api from "../../../services/api";

// Actions do physicalActivity
import * as physicalActivityActions from "../../../store/modules/physicalActivity/actions";

import {
   ButtonSave,
   ButtonCancel,
} from "../../../styles/components/ButtonsForm/Save/styles";
import Card from "../../../styles/components/Card/styles";

import { ButtonsContainer } from "./styles";

function PhysicalActivitiesForm({ saveRequest }) {
   let { id } = useParams();

   const formRef = useRef(null);

   //Lidar com o submit do formulario
   function handleSubmit(data, { reset }) {
      save(data);
      reset();
   }

   useEffect(() => {
      if (id !== undefined) {
         async function findPhysicalActivities() {
            const response = await api.get(`/physicalActivities/${id}`);
            await formRef.current.setData(response.data);
         }

         findPhysicalActivities();
      }
   }, [id]);

   //Salva os dados
   function save(physicalActivity) {
      //cria ou alterar um registro
      if (id) {
         physicalActivity._id = id;
      }
      saveRequest(physicalActivity);
   }

   return (
      <Card>
         <Form ref={formRef} onSubmit={handleSubmit}>
            <Row>
               <Col>
                  <Input
                     type="text"
                     id="name"
                     name="name"
                     label="Nome"
                     placeholder="Ex.: Corrida"
                     required
                  />
               </Col>
               <Col>
                  <Input
                     type="text"
                     id="duration"
                     name="duration"
                     label="Duração"
                     placeholder="Ex.: 2 Horas"
                     required
                  />
               </Col>
            </Row>
            <Row>
               <Col>
                  <Input
                     type="text"
                     id="observation"
                     name="observation"
                     label="Observações"
                     placeholder="Ex.: Corrida para auxiliar no controle do sistema cardiáco."
                  />
               </Col>
            </Row>
            <Row>
               <Col>
                  <ButtonsContainer>
                     <Link to="/physicalActivities">
                        <ButtonCancel type="submit">Cancelar</ButtonCancel>
                     </Link>

                     <ButtonSave type="submit">Salvar</ButtonSave>
                  </ButtonsContainer>
               </Col>
            </Row>
         </Form>
      </Card>
   );
}

//Mapeia os dados contidos no estado do redux para serem utilizados no componente
const mapStateToProps = (state) => ({
   loading: state.physicalActivity.loading,
});

//Convert actions do redux em propriedades do componente
const mapDispatchToProps = (dispatch) =>
   bindActionCreators(physicalActivityActions, dispatch);

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(PhysicalActivitiesForm);

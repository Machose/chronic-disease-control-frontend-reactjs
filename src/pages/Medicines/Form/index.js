import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Form } from "@unform/web";
import { Link, useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import Input from "../../../components/Unform/Cadastro/Input";

// Servico de back end
import api from "../../../services/api";

// Actions do medicamento
import * as MedicineActions from "../../../store/modules/medicine/actions";

import {
   ButtonSave,
   ButtonCancel,
} from "../../../styles/components/ButtonsForm/Save/styles";
import Card from "../../../styles/components/Card/styles";

import { ButtonsContainer } from "./styles";

function MedicinesForm({ saveRequest }) {
   let { id } = useParams();

   const formRef = useRef(null);

   //Lidar com o submit do formulario
   function handleSubmit(data, { reset }) {
      saveCar(data);
      reset();
   }

   useEffect(() => {
      if (id !== undefined) {
         async function findAllMedicines() {
            const response = await api.get(`/medicines/${id}`);
            await formRef.current.setData(response.data);
         }

         findAllMedicines();
      }
   }, [id]);

   //Salva os dados
   function saveCar(medicine) {
      //cria ou alterar um registro
      if (id) {
         medicine._id = id;
      }
      saveRequest(medicine);
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
                     placeholder="Ex.: Paracetamol"
                     required
                  />
               </Col>
               <Col>
                  <Input
                     type="text"
                     id="dosage"
                     name="dosage"
                     label="Dosagem"
                     placeholder="Ex.: 200 mg"
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
                     placeholder="Ex.: Remédio utilizado no tratamento de ..."
                  />
               </Col>
            </Row>
            <Row>
               <Col>
                  <ButtonsContainer>
                     <Link to="/medicines">
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
   loading: state.medicine.loading,
});

//Convert actions do redux em propriedades do componente
const mapDispatchToProps = (dispatch) =>
   bindActionCreators(MedicineActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MedicinesForm);

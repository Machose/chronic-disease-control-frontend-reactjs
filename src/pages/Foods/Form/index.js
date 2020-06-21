import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Form } from "@unform/web";
import { Link, useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import Input from "../../../components/Unform/Cadastro/Input";

// Servico de back end
import api from "../../../services/api";

// Actions do food
import * as FoodActions from "../../../store/modules/food/actions";

import {
   ButtonSave,
   ButtonCancel,
} from "../../../styles/components/ButtonsForm/Save/styles";
import Card from "../../../styles/components/Card/styles";

import { ButtonsContainer } from "./styles";

function FoodsForm({ saveRequest }) {
   let { id } = useParams();

   const formRef = useRef(null);

   //Lidar com o submit do formulario
   function handleSubmit(data, { reset }) {
      saveCar(data);
      reset();
   }

   useEffect(() => {
      if (id !== undefined) {
         async function findFoods() {
            const response = await api.get(`/foods/${id}`);
            await formRef.current.setData(response.data);
         }

         findFoods();
      }
   }, [id]);

   //Salva os dados
   function saveCar(food) {
      //cria ou alterar um registro
      if (id) {
         food._id = id;
      }
      saveRequest(food);
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
                     placeholder="Ex.: Maçã"
                     required
                  />
               </Col>
               <Col>
                  <Input
                     type="text"
                     id="grams"
                     name="grams"
                     label="Quantidade"
                     placeholder="Ex.: 100 g"
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
                     placeholder="Ex.: Alimento usado na dieta controlada"
                  />
               </Col>
            </Row>
            <Row>
               <Col>
                  <ButtonsContainer>
                     <Link to="/foods">
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
   loading: state.food.loading,
});

//Convert actions do redux em propriedades do componente
const mapDispatchToProps = (dispatch) =>
   bindActionCreators(FoodActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FoodsForm);

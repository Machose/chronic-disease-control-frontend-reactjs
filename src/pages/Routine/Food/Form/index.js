import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Form } from "@unform/web";

import { Modal } from "react-bootstrap";

import Input from "../../../../components/Unform/Routine/InputTime";
import Select from "../../../../components/Unform/Routine/Select";
import CheckBox from "../../../../components/Unform/Routine/CheckBox";

// Actions do redux
import * as foodRoutineActions from "../../../../store/modules/foodRoutine/actions";

import {
   ButtonSave,
   ButtonCancel,
} from "../../../../styles/components/ButtonsForm/Save/styles";

import api from "../../../../services/api";

import {
   Info,
   Repetitions,
   Actions,
   Content,
   DaysOfWeek,
} from "../../RoutineFormStyles";

function FoodRoutineForm({ show, onHide, itemname, saveRequest }) {
   const formRef = useRef(null);
   const [daysWeek, setDaysWeek] = useState([]);
   const [foods, setfoods] = useState([]);

   //Após a renderização ele executa algo
   useEffect(() => {
      //Busca os medicmanetos cadastrados
      async function loadfoods() {
         const response = await api.get("foods");
         setfoods(response.data);
      }
      loadfoods();

      async function loadDaysWeek() {
         const response = await api.get("daysWeek");
         setDaysWeek(response.data);
      }

      loadDaysWeek();
   }, []); //useEffect com o [] como segundo parametro faz com que algo aconteca apenas uma unica vez

   function handleSubmitfood(data) {
      const daysForSave = [];

      const { food_id, schedule } = data;

      const daysChecked = document.querySelectorAll("input:checked");

      daysChecked.forEach((input) => {
         daysForSave.push(input.value);
      });

      const dataForSave = { food_id, schedule, days_week: daysForSave };

      handlerSave(dataForSave);
   }

   async function handlerSave(data) {
      saveRequest(data);
      onHide();
   }

   return (
      <Modal
         show={show}
         onHide={onHide}
         dialogClassName="modal-90w"
         aria-labelledby="contained-modal-title-vcenter"
         centered
         itemname={itemname}
      >
         <Form ref={formRef} onSubmit={handleSubmitfood}>
            <Modal.Header closeButton>
               <Modal.Title id="contained-modal-title-vcenter">
                  Agenda
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Content>
                  <Info>
                     <Select
                        id="food_id"
                        name="food_id"
                        placeholder="Selecione um alimento"
                        label="Alimento"
                        options={foods.map((food) => ({
                           value: food._id,
                           label: food.name,
                        }))}
                     />
                     <Input
                        label="Hoário"
                        type="time"
                        id="hours"
                        name="schedule"
                        required
                     />
                  </Info>
                  <DaysOfWeek>
                     <div>Selecione os dias da semana:</div>
                     <Repetitions>
                        <CheckBox name="dayFood" multiple options={daysWeek} />
                     </Repetitions>
                  </DaysOfWeek>
               </Content>
            </Modal.Body>
            <Modal.Footer>
               <Actions>
                  <ButtonSave type="submit" onSubmit={handlerSave}>
                     Salvar
                  </ButtonSave>
                  <ButtonCancel onClick={onHide}>Cancelar</ButtonCancel>
               </Actions>
            </Modal.Footer>
         </Form>
      </Modal>
   );
}

//Mapeia os dados contidos no estado do redux para serem utilizados no componente
const mapStateToProps = (state) => ({
   loading: state.food.loading,
});

//Convert actions do redux em propriedades do componente
const mapDispatchToProps = (dispatch) =>
   bindActionCreators(foodRoutineActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FoodRoutineForm);

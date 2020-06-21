import React, { useState } from "react";

import { FaPlus } from "react-icons/fa";

import MedicineRoutineForm from "../Medicine/Form";
import FoodRoutineForm from "../Food/Form";
import PhysicalActivityForm from "../physicalActivity/Form";

import MedicineRoutineList from "../Medicine/List";
import FoodRoutineList from "../Food/List";
import PhysicalActivityList from "../physicalActivity/List";

import { Container, TypeRoutine, Header, Title, Content } from "./styles";

function RoutineList() {
   const [modalShow, setModalShow] = useState(false);
   const [foodModal, setFoodModal] = useState(false);
   const [medicineModal, setMedicineModal] = useState(false);
   const [physicalActivityModal, setPhysicalActivityModal] = useState(false);

   return (
      <Container>
         <TypeRoutine>
            <Header>
               <Title>Medicamentos</Title>
               <button
                  type="button"
                  onClick={() => {
                     setMedicineModal(true);
                     setModalShow(true);
                  }}
               >
                  <FaPlus size={15} color="#fff" />
               </button>
            </Header>
            <Content>
               <MedicineRoutineList />
            </Content>
            {!medicineModal ? (
               ""
            ) : (
               <MedicineRoutineForm
                  show={modalShow}
                  onHide={() => {
                     setMedicineModal(false);
                     setModalShow(false);
                  }}
                  itemname={"aaaa"}
               />
            )}
         </TypeRoutine>

         <TypeRoutine>
            <Header>
               <Title>Alimentos</Title>
               <button
                  type="button"
                  onClick={() => {
                     setFoodModal(true);
                     setModalShow(true);
                  }}
               >
                  <FaPlus size={15} color="#fff" />
               </button>
            </Header>
            <Content>
               <FoodRoutineList />
            </Content>
            {!foodModal ? (
               ""
            ) : (
               <FoodRoutineForm
                  show={modalShow}
                  onHide={() => {
                     setFoodModal(false);
                     setModalShow(false);
                  }}
                  itemname={"aaaa"}
               />
            )}
         </TypeRoutine>

         <TypeRoutine>
            <Header>
               <Title>Atividades físicas</Title>
               <button
                  type="button"
                  onClick={() => {
                     setPhysicalActivityModal(true);
                     setModalShow(true);
                  }}
               >
                  <FaPlus size={15} color="#fff" />
               </button>
            </Header>
            <Content>
               <PhysicalActivityList />
            </Content>
            {!physicalActivityModal ? (
               ""
            ) : (
               <PhysicalActivityForm
                  show={modalShow}
                  onHide={() => {
                     setPhysicalActivityModal(false);
                     setModalShow(false);
                  }}
                  itemname={"aaaa"}
               />
            )}
         </TypeRoutine>
      </Container>
   );
}

export default RoutineList;

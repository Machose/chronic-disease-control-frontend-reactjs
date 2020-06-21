import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FaPlus, FaPencilAlt, FaTrashAlt } from "react-icons/fa";

// Actions do medicamento
import * as FoodActions from "../../../store/modules/food/actions";

import Card from "../../../styles/components/Card/styles";
import { TableContent } from "../../../components/Table/styles";
import LoadingAnimation from "../../../components/LoadingAnimation";
import { ButtonRegister } from "../../../styles/components/ButtonsForm/Register/styles";
import {
   ButtonPen,
   ButtonTrash,
} from "../../../styles/components/ButtonsActions/styles";

import ExclusionConfirmationModal from "../../../components/ExclusionConfirmationModal";

import { Title, Link } from "./styles";
import history from "../../../services/history";

function FoodsList({ foods, findAllRequest, deleteRequest, loading }) {
   const [modalShow, setModalShow] = useState(false);
   const [itemForDelete, setItemForDelete] = useState({});

   // let keys = ["name", "dosage"];

   // const headings = ["Nome", "Dosagem"];

   useEffect(() => {
      findAllRequest();
   }, [findAllRequest]);

   return loading ? (
      <LoadingAnimation />
   ) : (
      <Card>
         <Title>Lista de alimentos</Title>

         <ButtonRegister to="/foods/new">
            <FaPlus />
            Adicionar
         </ButtonRegister>

         {/* <Table objects={medicamentos} headings={headings} keys={keys} /> */}
         <TableContent>
            <thead>
               <tr>
                  <th>Nome</th>
                  <th>Quantidade</th>
                  <th>Açõe</th>
               </tr>
            </thead>
            <tbody>
               {foods.map((food) => (
                  <tr key={food._id}>
                     <td
                        onClick={() => {
                           history.push(`foods/${food._id}`);
                        }}
                     >
                        <Link>{food.name}</Link>
                     </td>
                     <td>{food.grams}</td>
                     <td>
                        <div>
                           <ButtonPen to={`/foods/${food._id}`}>
                              <FaPencilAlt />
                           </ButtonPen>

                           <ButtonTrash
                              onClick={() => {
                                 setItemForDelete(food);
                                 setModalShow(true);
                              }}
                           >
                              <FaTrashAlt />
                           </ButtonTrash>
                        </div>
                     </td>
                  </tr>
               ))}
               {foods.length ? (
                  ""
               ) : (
                  <td colspan="3">Nenhum registro encontrado</td>
               )}
            </tbody>
         </TableContent>
         <ExclusionConfirmationModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            itemname={itemForDelete.name}
            onDelete={() => {
               deleteRequest(itemForDelete._id);
               setModalShow(false);
            }}
         />
      </Card>
   );
}

//Mapeia os dados contidos no estado do redux para serem utilizados no componente
const mapStateToProps = (state) => ({
   foods: state.food.foods,
   loading: state.food.loading,
});

//Convert actions do redux em propriedades do componente
const mapDispatchToProps = (dispatch) =>
   bindActionCreators(FoodActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FoodsList);

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FaPlus, FaPencilAlt, FaTrashAlt } from "react-icons/fa";

// Actions do physicalActivity
import * as physicalActivityActions from "../../../store/modules/physicalActivity/actions";

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

function PhysicalActivitiesList({
   physicalActivities,
   findAllRequest,
   deleteRequest,
   loading,
}) {
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
         <Title>Lista de Atividades físicas</Title>

         <ButtonRegister to="/physicalActivities/new">
            <FaPlus />
            Adicionar
         </ButtonRegister>

         {/* <Table objects={medicamentos} headings={headings} keys={keys} /> */}
         <TableContent>
            <thead>
               <tr>
                  <th>Nome</th>
                  <th>Duração</th>
                  <th>Açõe</th>
               </tr>
            </thead>
            <tbody>
               {physicalActivities.map((physicalActivity) => (
                  <tr key={physicalActivity._id}>
                     <td
                        onClick={() => {
                           history.push(
                              `physicalActivities/${physicalActivity._id}`
                           );
                        }}
                     >
                        <Link>{physicalActivity.name}</Link>
                     </td>
                     <td>{physicalActivity.duration}</td>
                     <td>
                        <div>
                           <ButtonPen
                              to={`/physicalActivities/${physicalActivity._id}`}
                           >
                              <FaPencilAlt />
                           </ButtonPen>

                           <ButtonTrash
                              onClick={() => {
                                 setItemForDelete(physicalActivity);
                                 setModalShow(true);
                              }}
                           >
                              <FaTrashAlt />
                           </ButtonTrash>
                        </div>
                     </td>
                  </tr>
               ))}
               {physicalActivities.length ? (
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
   physicalActivities: state.physicalActivity.physicalActivities,
   loading: state.physicalActivity.loading,
});

//Convert actions do redux em propriedades do componente
const mapDispatchToProps = (dispatch) =>
   bindActionCreators(physicalActivityActions, dispatch);

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(PhysicalActivitiesList);

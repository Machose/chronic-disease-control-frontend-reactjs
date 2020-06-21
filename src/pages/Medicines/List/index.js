import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FaPlus, FaPencilAlt, FaTrashAlt } from "react-icons/fa";

// Actions do medicamento
import * as MedicineActions from "../../../store/modules/medicine/actions";

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

function MedicinesList({ medicines, findAllRequest, deleteRequest, loading }) {
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
         <Title>Lista de medicamentos</Title>

         <ButtonRegister to="/medicines/new">
            <FaPlus />
            Adicionar
         </ButtonRegister>

         {/* <Table objects={medicamentos} headings={headings} keys={keys} /> */}
         <TableContent>
            <thead>
               <tr>
                  <th>Nome</th>
                  <th>Dosagem</th>
                  <th>Açõe</th>
               </tr>
            </thead>
            <tbody>
               {medicines.map((medicine) => (
                  <tr key={medicine._id}>
                     <td
                        onClick={() => {
                           history.push(`medicines/${medicine._id}`);
                        }}
                     >
                        <Link>{medicine.name}</Link>
                     </td>
                     <td>{medicine.dosage}</td>
                     <td>
                        <div>
                           <ButtonPen to={`medicines/${medicine._id}`}>
                              <FaPencilAlt />
                           </ButtonPen>

                           <ButtonTrash
                              onClick={() => {
                                 setItemForDelete(medicine);
                                 setModalShow(true);
                              }}
                           >
                              <FaTrashAlt />
                           </ButtonTrash>
                        </div>
                     </td>
                  </tr>
               ))}
               {medicines.length ? (
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
   medicines: state.medicine.medicines,
   loading: state.medicine.loading,
});

//Convert actions do redux em propriedades do componente
const mapDispatchToProps = (dispatch) =>
   bindActionCreators(MedicineActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MedicinesList);

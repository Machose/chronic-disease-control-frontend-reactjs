import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { FaRegTrashAlt } from "react-icons/fa";

import LoadingAnimation from "../../../../components/LoadingAnimation";

import api from "../../../../services/api";

// Actions do redux
import * as PhysicalActivityRoutineActions from "../../../../store/modules/physicalActivityRoutine/actions";

import ExclusionConfirmationModal from "../../../../components/ExclusionConfirmationModal";

import {
   Routine,
   Info,
   Repetitions,
   Day,
   Actions,
   Name,
   Time,
   DaysOfWeek,
} from "../../RoutineCardStyles";

function PhysicalActivityRoutineList({
   physicalActivityRoutines,
   findAllRequest,
   deleteRequest,
   loading,
}) {
   const [daysWeek, setDaysWeek] = useState([]);
   const [modalShow, setModalShow] = useState(false);
   const [itemForDelete, setItemForDelete] = useState({});
   const [dayFullNameId, setDayFullNameId] = useState(null);

   useEffect(() => {
      async function loadDaysWeek() {
         const response = await api.get("daysWeek");
         setDaysWeek(response.data);
      }

      findAllRequest();

      loadDaysWeek();
   }, [findAllRequest]);

   return loading ? (
      <LoadingAnimation />
   ) : (
      physicalActivityRoutines.map((routine) => (
         <Routine key={routine._id}>
            <Actions>
               <button
                  onClick={() => {
                     setItemForDelete(routine);
                     setModalShow(true);
                  }}
               >
                  <FaRegTrashAlt size={20} color="#df4d5b" />
               </button>
            </Actions>
            <Info>
               <Name>{routine.physical_activity[0].name}</Name>
               <Time>{routine.schedule}</Time>
            </Info>
            <DaysOfWeek>
               <div>Dias da semana:</div>
               <Repetitions>
                  {daysWeek.map((day) => (
                     <Day
                        onMouseEnter={() =>
                           setDayFullNameId(day._id + routine._id)
                        }
                        onMouseLeave={() => setDayFullNameId(null)}
                        key={day._id}
                        checked={routine.days_week.includes(day._id)}
                        fullName={dayFullNameId === day._id + routine._id}
                     >
                        {dayFullNameId === day._id + routine._id
                           ? day.name
                           : day.name[0]}
                     </Day>
                  ))}
               </Repetitions>
            </DaysOfWeek>
            <ExclusionConfirmationModal
               show={modalShow}
               onHide={() => setModalShow(false)}
               itemname={""}
               onDelete={() => {
                  deleteRequest(itemForDelete._id);
                  setModalShow(false);
               }}
            />
         </Routine>
      ))
   );
}

//Mapeia os dados contidos no estado do redux para serem utilizados no componente
const mapStateToProps = (state) => ({
   physicalActivityRoutines: state.physicalActivityRoutine.physicalActivityRoutines.map(
      (routine) => {
         const [hours, minutes] = String(routine.schedule).split(":");
         return { ...routine, schedule: `${hours}h:${minutes}m` };
      }
   ),
   loading: state.physicalActivityRoutine.loading,
});

//Convert actions do redux em propriedades do componente
const mapDispatchToProps = (dispatch) =>
   bindActionCreators(PhysicalActivityRoutineActions, dispatch);

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(PhysicalActivityRoutineList);

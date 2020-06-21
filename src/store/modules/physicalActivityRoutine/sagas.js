import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "../../../services/api";

import { findAllSuccess, deleteSuccess, saveSuccess } from "./actions";

export function* findAll() {
   const response = yield call(api.get, "physicalActivitiesRoutines");

   const { data } = response;

   yield put(findAllSuccess(data));
}

export function* deleteRequest({ payload }) {
   const { id } = payload;

   const response = yield call(api.delete, `physicalActivitiesRoutines/${id}`);

   const { deleted } = response.data;

   if (!deleted) {
      toast.error("Não foi possível deletar o registro");
      return;
   }

   toast.success("Registro deletado com sucesso");

   yield put(deleteSuccess(id));
}

export function* saveRequest({ payload }) {
   const { physicalActivityRoutine } = payload;

   if (!physicalActivityRoutine) {
      return;
   }

   const { _id } = physicalActivityRoutine;

   if (_id) {
      yield call(
         api.put,
         `physicalActivitiesRoutines/${_id}`,
         physicalActivityRoutine
      );
      toast.success("Registro alterado com sucesso");
   } else {
      yield call(
         api.post,
         `physicalActivitiesRoutines`,
         physicalActivityRoutine
      );
      toast.success("Registro salvo com sucesso");
   }

   yield put(saveSuccess());
   yield findAll();
}

export default all([
   takeLatest("@physicalActivityRoutine/FIND_ALL_REQUEST", findAll),
   takeLatest("@physicalActivityRoutine/DELETE_REQUEST", deleteRequest),
   takeLatest("@physicalActivityRoutine/SAVE_REQUEST", saveRequest),
]);

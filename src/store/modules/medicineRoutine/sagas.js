import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "../../../services/api";

import { findAllSuccess, deleteSuccess, saveSuccess } from "./actions";

export function* findAll() {
   const response = yield call(api.get, "medicineRoutines");

   const { data } = response;

   yield put(findAllSuccess(data));
}

export function* deleteRequest({ payload }) {
   const { id } = payload;

   const response = yield call(api.delete, `medicineRoutines/${id}`);

   const { deleted } = response.data;

   if (!deleted) {
      toast.error("Não foi possível deletar o registro");
      return;
   }

   toast.success("Registro deletado com sucesso");

   yield put(deleteSuccess(id));
}

export function* saveRequest({ payload }) {
   const { medicineRoutine } = payload;

   if (!medicineRoutine) {
      return;
   }

   const { _id } = medicineRoutine;

   if (_id) {
      yield call(api.put, `medicineRoutines/${_id}`, medicineRoutine);
      toast.success("Registro alterado com sucesso");
   } else {
      yield call(api.post, `medicineRoutines`, medicineRoutine);
      toast.success("Registro salvo com sucesso");
   }

   yield put(saveSuccess());
   yield findAll();
}

export default all([
   takeLatest("@medicineRoutine/FIND_ALL_REQUEST", findAll),
   takeLatest("@medicineRoutine/DELETE_REQUEST", deleteRequest),
   takeLatest("@medicineRoutine/SAVE_REQUEST", saveRequest),
]);

import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "../../../services/api";

import { findAllSuccess, deleteSuccess, saveSuccess } from "./actions";

export function* findAll() {
   const response = yield call(api.get, "foodRoutines");

   const { data } = response;

   yield put(findAllSuccess(data));
}

export function* deleteRequest({ payload }) {
   const { id } = payload;

   const response = yield call(api.delete, `foodRoutines/${id}`);

   const { deleted } = response.data;

   if (!deleted) {
      toast.error("Não foi possível deletar o registro");
      return;
   }

   toast.success("Registro deletado com sucesso");

   yield put(deleteSuccess(id));
}

export function* saveRequest({ payload }) {
   const { foodRoutine } = payload;

   if (!foodRoutine) {
      return;
   }

   const { _id } = foodRoutine;

   if (_id) {
      yield call(api.put, `foodRoutines/${_id}`, foodRoutine);
      toast.success("Registro alterado com sucesso");
   } else {
      yield call(api.post, `foodRoutines`, foodRoutine);
      toast.success("Registro salvo com sucesso");
   }

   yield put(saveSuccess());
   yield findAll();
}

export default all([
   takeLatest("@foodRoutine/FIND_ALL_REQUEST", findAll),
   takeLatest("@foodRoutine/DELETE_REQUEST", deleteRequest),
   takeLatest("@foodRoutine/SAVE_REQUEST", saveRequest),
]);

import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "../../../services/api";
import history from "../../../services/history";

import { findAllSuccess, deleteSuccess, saveSuccess } from "./actions";

export function* findAll() {
   const response = yield call(api.get, "foods");

   const { data } = response;

   yield put(findAllSuccess(data));
}

export function* deleteRequest({ payload }) {
   const { id } = payload;

   const response = yield call(api.delete, `foods/${id}`);

   const { deleted } = response.data;

   if (!deleted) {
      toast.error("Não foi possível deletar o registro");
      return;
   }

   toast.success("Registro deletado com sucesso");

   yield put(deleteSuccess(id));
}

export function* saveRequest({ payload }) {
   const { food } = payload;

   if (!food) {
      return;
   }

   const { _id } = food;

   if (_id) {
      yield call(api.put, `foods/${_id}`, food);
      toast.success("Registro alterado com sucesso");
   } else {
      yield call(api.post, `foods`, food);
      toast.success("Registro salvo com sucesso");
   }

   yield put(saveSuccess());

   history.push("/foods");
}

export default all([
   takeLatest("@food/FIND_ALL_REQUEST", findAll),
   takeLatest("@food/DELETE_REQUEST", deleteRequest),
   takeLatest("@food/SAVE_REQUEST", saveRequest),
]);

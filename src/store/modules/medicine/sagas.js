import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "../../../services/api";
import history from "../../../services/history";

import { findAllSuccess, deleteSuccess, saveSuccess } from "./actions";

export function* findAll() {
   const response = yield call(api.get, "medicines");

   const { data } = response;

   yield put(findAllSuccess(data));
}

export function* deleteRequest({ payload }) {
   const { id } = payload;

   const response = yield call(api.delete, `medicines/${id}`);

   const { deleted } = response.data;

   if (!deleted) {
      toast.error("Não foi possível deletar o registro");
      return;
   }

   toast.success("Registro deletado com sucesso");

   yield put(deleteSuccess(id));
}

export function* saveRequest({ payload }) {
   const { medicine } = payload;

   if (!medicine) {
      return;
   }

   const { _id } = medicine;

   if (_id) {
      yield call(api.put, `medicines/${_id}`, medicine);
      toast.success("Registro alterado com sucesso");
   } else {
      yield call(api.post, `medicines`, medicine);
      toast.success("Registro salvo com sucesso");
   }

   yield put(saveSuccess());

   history.push("/medicines");
}

export default all([
   takeLatest("@medicine/FIND_ALL_REQUEST", findAll),
   takeLatest("@medicine/DELETE_REQUEST", deleteRequest),
   takeLatest("@medicine/SAVE_REQUEST", saveRequest),
]);

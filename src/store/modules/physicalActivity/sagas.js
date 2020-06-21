import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "../../../services/api";
import history from "../../../services/history";

import { findAllSuccess, deleteSuccess, saveSuccess } from "./actions";

export function* findAll() {
   const response = yield call(api.get, "physicalActivities");

   const { data } = response;

   yield put(findAllSuccess(data));
}

export function* deleteRequest({ payload }) {
   const { id } = payload;

   const response = yield call(api.delete, `physicalActivities/${id}`);

   const { deleted } = response.data;

   if (!deleted) {
      toast.error("Não foi possível deletar o registro");
      return;
   }

   toast.success("Registro deletado com sucesso");

   yield put(deleteSuccess(id));
}

export function* saveRequest({ payload }) {
   const { physicalActivity } = payload;

   if (!physicalActivity) {
      return;
   }

   const { _id } = physicalActivity;

   if (_id) {
      yield call(api.put, `physicalActivities/${_id}`, physicalActivity);
      toast.success("Registro alterado com sucesso");
   } else {
      yield call(api.post, `physicalActivities`, physicalActivity);
      toast.success("Registro salvo com sucesso");
   }

   yield put(saveSuccess());

   history.push("/physicalActivities");
}

export default all([
   takeLatest("@physicalActivity/FIND_ALL_REQUEST", findAll),
   takeLatest("@physicalActivity/DELETE_REQUEST", deleteRequest),
   takeLatest("@physicalActivity/SAVE_REQUEST", saveRequest),
]);

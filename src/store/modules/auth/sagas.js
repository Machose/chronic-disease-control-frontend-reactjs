import { all, takeLatest, call, put } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "../../../services/api";
import history from "../../../services/history";

import { singInSuccess, singFailure, singUpSuccess } from "./actions";

export function* singIn({ payload }) {
   try {
      const { email, password } = payload;

      const response = yield call(api.post, "/sessions", {
         email,
         password,
      });

      const { token, user } = response.data;

      api.defaults.headers.Authorization = `Bearer ${token}`;

      yield put(singInSuccess(token, user));

      history.push("/dashboard");
   } catch (err) {
      toast.error("Falha na autenticação, verifique seus dados.");
      yield put(singFailure());
   }
}

export function setToken({ payload }) {
   if (!payload) return;

   const { token } = payload.auth;

   if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
   }
}

export function* singUp({ payload }) {
   try {
      const { name, email, password } = payload;

      yield call(api.post, "users", {
         name,
         email,
         password,
      });

      yield put(singUpSuccess());

      toast.success("Cadastro efetuado com sucesso.");
   } catch (err) {
      toast.error("Falha no cadastro, verifique seus dados.");

      yield put(singFailure());
   }
}

export function signOut() {
   history.push("/");
}

export default all([
   takeLatest("persist/REHYDRATE", setToken),
   takeLatest("@auth/SING_IN_REQUEST", singIn),
   takeLatest("@auth/SING_UP_REQUEST", singUp),
   takeLatest("@auth/SIGN_OUT", signOut),
]);

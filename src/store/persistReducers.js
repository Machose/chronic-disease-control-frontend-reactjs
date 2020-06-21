import storage from "redux-persist/lib/storage"; //estratégia de storage padrão (local storage)
import { persistReducer } from "redux-persist";

export default (reducers) => {
   const persistedReducer = persistReducer(
      {
         key: "acdc", //usado apenas para separar apps
         storage,
         whitelist: ["auth", "user"], //nome dos reducer para persistir os dados
      },
      reducers
   );

   return persistedReducer;
};

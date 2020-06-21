import React from "react";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react"; //renderizar o conteudo apenas depois de buscar os dados persistidos no storage
import { Provider } from "react-redux"; //deixa o state disponivel para todos os componentes
import { Router } from "react-router-dom";

import GlobalStyle from "./styles/global";

import "./config/ReactotronConfig";

import { store, persistor } from "./store";
import history from "./services/history";
import Routes from "./routes";

function App() {
   return (
      <Provider store={store}>
         <PersistGate persistor={persistor}>
            <Router history={history}>
               <Routes />
               <GlobalStyle />
               <ToastContainer autoClose={3000} />
            </Router>
         </PersistGate>
      </Provider>
   );
}

export default App;

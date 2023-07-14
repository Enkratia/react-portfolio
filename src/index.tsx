import React from "react";
import ReactDOM from "react-dom/client";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { megamenuApi } from "./redux/megamenuSlice/slice";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import App from "./App";

const rootElem = document.getElementById("root") as HTMLDivElement;

const root = ReactDOM.createRoot(rootElem);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={megamenuApi}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>,
);

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.scss";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { rootStore } from "./Logic/rootStore";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={rootStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

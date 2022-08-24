import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.scss";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { rootStore } from "./Logic/rootStore";

import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(far, fas)

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={rootStore}>
    <BrowserRouter>
    <App></App>
    </BrowserRouter>
  </Provider>
);

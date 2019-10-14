import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store";
import { Provider } from "react-redux";

// Styles
import "antd/dist/antd.css";
import "./styles/index.css";

const store = configureStore();
window.$store = store;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

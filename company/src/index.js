import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <App />,  // Không bao <BrowserRouter> tại đây
  document.getElementById("root")
);

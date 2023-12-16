import React from "react";
import ReactDOM from "react-dom";
import { SnackbarProvider } from "notistack";
import Login from "user_management_bootstraper/Login";

import "./index.css";

const App = () => (
  <div className="container">
    <Login callBackIfLoggedIn={() => {console.log("User Already logged in"); alert("User already logged in")}} />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

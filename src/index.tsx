import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "assets";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "contexts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>
);

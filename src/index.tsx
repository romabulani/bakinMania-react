import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "assets";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider, QuizProvider } from "contexts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <QuizProvider>
          <App />
        </QuizProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);

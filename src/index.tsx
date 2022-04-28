import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "assets";
import { BrowserRouter as Router } from "react-router-dom";
import {
  AuthProvider,
  CategoryProvider,
  QuizProvider,
  ThemeProvider,
} from "contexts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <QuizProvider>
            <CategoryProvider>
              <App />
            </CategoryProvider>
          </QuizProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);

import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {
  Footer,
  Home,
  LoginForm,
  Navigation,
  PrivateRoute,
  Rules,
  ScrollToTop,
  SignupForm,
  Result,
  Question,
} from "components";

function App() {
  return (
    <div className="App pagewrapper">
      <Navigation />
      <ScrollToTop />
      <ToastContainer position="bottom-right" autoClose={800} draggable />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />

        {/* <Route path="/" element={<PrivateRoute />}> */}
        <Route path="/rules" element={<Rules />} />
        <Route path="/question" element={<Question />} />
        <Route path="/results" element={<Result />} />
        {/* </Route> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

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
  ProfileDetails,
} from "components";

function App() {
  return (
    <div className="App pagewrapper">
      <Navigation />
      <ScrollToTop />
      <ToastContainer position="bottom-right" autoClose={800} draggable />
      <div className="middle-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />

          <Route
            path="/rules"
            element={
              <PrivateRoute>
                <Rules />
              </PrivateRoute>
            }
          />
          <Route
            path="/question"
            element={
              <PrivateRoute>
                <Question />
              </PrivateRoute>
            }
          />
          <Route
            path="/results"
            element={
              <PrivateRoute>
                <Result />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfileDetails />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

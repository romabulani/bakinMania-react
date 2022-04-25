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
  ProfileDetails,
  NotFound,
  Leaderboard,
  Loader,
} from "components";
import { useQuiz, useTheme } from "contexts";

function App() {
  const { theme } = useTheme();
  const { loader } = useQuiz();
  return (
    <div className="App pagewrapper" data-theme={theme}>
      <Navigation />
      <ScrollToTop />
      {loader && <Loader />}
      <ToastContainer
        theme={theme === "dark" ? "dark" : "light"}
        position="bottom-right"
        autoClose={800}
        draggable
      />
      <div className="middle-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route
            path="/quiz/:quizId"
            element={
              <PrivateRoute>
                <Rules />
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth, useQuiz } from "contexts";
import "./profile.css";
import { Dashboard } from "./Dashboard";

function ProfileDetails() {
  const { authUser, setAuthUser } = useAuth();
  const navigate = useNavigate();
  const { quizDispatch } = useQuiz();

  useEffect(() => {
    if (localStorage.authUser) setAuthUser(JSON.parse(localStorage.authUser));
  }, [setAuthUser]);

  useEffect(() => {
    quizDispatch({
      type: "SET_ACTIVE_QUESTION",
      payload: -1,
    });
    quizDispatch({ type: "RESET_ANSWERS" });
    // eslint-disable-next-line
  }, []);

  function logoutHandler() {
    localStorage.removeItem("authUser");
    toast.success("Logout successful");
    setAuthUser(null);
    navigate("/");
  }

  return (
    <div className="">
      <div className="profile-dashboard-container">
        <div className="logout-container">
          <div className="large-font-size account-header">
            Account Details<hr></hr>
          </div>
          <div className="flex-row-center profile-details">
            <div className="flex-column  profile-column">
              <p>{` ${authUser?.name}`}</p>
              <p>{` ${authUser?.email}`}</p>
            </div>
          </div>
          <div className="large-font-size account-header">
            Account Settings<hr></hr>
          </div>
          <button
            className="btn btn-outline-error logout-btn"
            onClick={logoutHandler}
          >
            Log Out
          </button>
        </div>
        <Dashboard />
      </div>
    </div>
  );
}

export { ProfileDetails };

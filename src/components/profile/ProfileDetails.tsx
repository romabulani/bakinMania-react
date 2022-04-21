import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "contexts";
import "./profile.css";

function ProfileDetails() {
  const { setAuthToken, authUser, setAuthUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.authUser) setAuthUser(JSON.parse(localStorage.authUser));
  }, []);

  function logoutHandler() {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
    toast.success("Logout successful");
    setAuthToken("");
    setAuthUser(null);
    navigate("/");
  }

  return (
    <div className="">
      <div className="flex-row-center ">
        <div className="logout-container flex-column-center">
          <div className="large-font-size">
            Account Details<hr className="section-line"></hr>
          </div>

          <div className="flex-row-center profile-details">
            <div className="flex-column profile-column">
              <p>Name</p>
              <p>Email</p>
            </div>
            <div className="flex-column  profile-column">
              <p>{` ${authUser?.name}`}</p>
              <p>{` ${authUser?.email}`}</p>
            </div>
          </div>
          <div className="large-font-size">
            Account Settings<hr className="section-line"></hr>
          </div>
          <button
            className="btn btn-outline-error logout-btn"
            onClick={logoutHandler}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export { ProfileDetails };

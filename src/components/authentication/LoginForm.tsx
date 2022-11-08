import { FormEvent, useEffect, useState } from "react";
import { Link, Location, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./auth.css";
import { login } from "services";
import { useAuth } from "contexts";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { toast } from "react-toastify";
import { userType } from "contexts/types";

type LocationState = {
  from: {
    pathname: string;
  };
};

function LoginForm() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [errorData, setErrorData] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const location: Location = useLocation();
  const { from } = location.state as LocationState;
  const { setAuthUser, authUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (authUser) navigate("/", { replace: true });
  }, []);
  const loginHandler = async (e: FormEvent, isGuest: boolean) => {
    e.preventDefault();
    try {
      let response;
      if (isGuest)
        setLoginData({
          email: "adarshbalika@gmail.com",
          password: "adarshBalika123#",
        });
      if (
        !isGuest &&
        (loginData.email.trim() === "" || loginData.password.trim() === "")
      )
        setErrorData(true);
      else {
        if (isGuest)
          response = await login("adarshbalika@gmail.com", "adarshBalika123#");
        else response = await login(loginData.email, loginData.password);
        if (response) {
          const resUser: userType = response?.user as unknown as userType;
          if (resUser) {
            const q = query(
              collection(db, "users"),
              where("uid", "==", resUser.uid)
            );
            const querySnapshot1 = await getDocs(q);
            querySnapshot1.forEach((doc) => {
              const userObj: userType = doc.data() as userType;
              setAuthUser(userObj);
              localStorage.setItem("authUser", JSON.stringify(userObj));
            });
          }
          toast.success("Logged in successfully!");
          if (location.state) navigate(from?.pathname, { replace: true });
          else navigate("/");
        } else setErrorData(true);
      }
    } catch (e) {
      setErrorData(true);
      console.error(e);
    }
  };

  return (
    <div className="auth-container flex-column-center middle-content">
      <h4 className="heading4">LOGIN</h4>
      <form
        className="form-auth"
        onSubmit={(e) => loginHandler(e, false)}
        noValidate
      >
        <div className="form-input">
          <label htmlFor="email" className="input-label">
            Email *
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            className="input-primary border-box"
            value={loginData.email}
            onChange={(e) =>
              setLoginData((loginData) => ({
                ...loginData,
                email: e.target.value,
              }))
            }
            onFocus={() => setErrorData(false)}
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="password" className="input-label">
            Password *
          </label>
          <div className="input-primary input-icon-container border-box">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter password"
              className="input-no-outline"
              value={loginData.password}
              onChange={(e) =>
                setLoginData((loginData) => ({
                  ...loginData,
                  password: e.target.value,
                }))
              }
              onFocus={() => setErrorData(false)}
              required
            />
            <button
              className="btn-no-decoration cursor-pointer"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon
                icon={showPassword ? "eye" : "eye-slash"}
                className="input-icon-style"
              />
            </button>
          </div>
        </div>

        <button
          className="btn btn-primary btn-auth"
          type="submit"
          onClick={(e) => loginHandler(e, false)}
        >
          Login
        </button>
        <button
          className="btn btn-outline-primary btn-auth"
          type="submit"
          onClick={(e) => loginHandler(e, true)}
        >
          Login as Guest
        </button>
        {errorData && (
          <div className="error">
            <FontAwesomeIcon
              icon="circle-exclamation"
              className="error-icon"
            ></FontAwesomeIcon>
            <div>{`  Email or Password is incorrect`}</div>
          </div>
        )}
        <div>
          <span>Don't have an account?</span>
          <Link
            to="/signup"
            className="btn-link btn-link-primary"
            state={location.state}
            replace
          >
            Create One
          </Link>
        </div>
        <div>
          <span>Forgot Password?</span>
          <Link
            to="/passwordreset"
            className="btn-link btn-link-primary"
            replace
          >
            Reset here
          </Link>
        </div>
      </form>
    </div>
  );
}

export { LoginForm };

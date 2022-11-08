import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { auth } from "../../firebase";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { useAuth } from "contexts";

function PasswordReset() {
  const [resetEmail, setResetEmail] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { authUser } = useAuth();
  useEffect(() => {
    if (authUser) navigate("/", { replace: true });
  }, []);

  const onPasswordResetClick = async (e) => {
    e.preventDefault();
    if (!new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$").test(resetEmail))
      setError(true);
    else {
      if (resetEmail.toLowerCase() === "adarshbalika@gmail.com")
        toast.error("You cannot change password of Guest");
      else {
        try {
          await sendPasswordResetEmail(auth, resetEmail);
          toast.success("Reset Password Link sent to the email");
          navigate("/login", { replace: true });
        } catch (e) {
          console.error(e);
          toast.error("Email ID doesn't exist!!");
        }
      }
    }
  };
  return (
    <div className="auth-container flex-column-center middle-content">
      <h4 className="heading4">RESET PASSWORD</h4>
      <form className="form-auth" onSubmit={onPasswordResetClick} noValidate>
        <div className="form-input">
          <label htmlFor="email" className="input-label">
            Email *
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            className="input-primary border-box"
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
            onFocus={() => setError(false)}
            required
          />
        </div>
        {error && (
          <div className="error">
            <FontAwesomeIcon
              icon="circle-exclamation"
              className="error-icon"
            ></FontAwesomeIcon>
            <div>{`  Invalid Email`}</div>
          </div>
        )}
        <button type="submit" className="btn btn-primary btn-auth">
          RESET PASSWORD
        </button>
        <div>
          <span>Already have an account?</span>
          <Link to="/login" className="btn-link btn-link-primary" replace>
            Login here
          </Link>
        </div>
      </form>
    </div>
  );
}

export { PasswordReset };

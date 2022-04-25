import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./nav.css";
import { useTheme } from "contexts";
function Navigation() {
  const navigate = useNavigate();
  const { theme, switchTheme } = useTheme();
  return (
    <>
      <nav className="nav-container">
        <div className="brand">
          <Link to="/">
            <img
              src={
                theme === "dark"
                  ? "https://res.cloudinary.com/dtrjdcrme/image/upload/v1650883482/quiz/logo_darktheme.webp"
                  : "https://res.cloudinary.com/dtrjdcrme/image/upload/v1649076577/ecommerce/logo_sr3h5w.webp"
              }
              alt="muffin-logo"
              className="logo"
            />
          </Link>
          <Link to="/" className="brand-name">
            Bakin Mania
          </Link>
        </div>
        <div className="nav-right">
          <div className="nav-icons-container">
            <div className="nav-item nav-icon">
              <FontAwesomeIcon
                icon="trophy"
                className="icon-style"
                onClick={() => navigate("/leaderboard")}
              ></FontAwesomeIcon>
            </div>
            <div className="nav-item nav-icon" onClick={switchTheme}>
              <FontAwesomeIcon
                icon={theme === "light" ? "moon" : "sun"}
                className="icon-style"
              />
            </div>
            <div className="nav-item nav-icon icon-person">
              <FontAwesomeIcon
                icon="user"
                className="icon-style"
                onClick={() => navigate("/profile")}
              ></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export { Navigation };

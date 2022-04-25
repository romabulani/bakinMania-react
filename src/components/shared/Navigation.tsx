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
              src="https://res.cloudinary.com/dtrjdcrme/image/upload/v1649999358/quiz/logo_an0oti.webp"
              alt="muffin-logo"
              className="logo"
            />
          </Link>
          <Link to="/" className="brand-name">
            Bakin Mania
          </Link>
        </div>
        <form className="searchbar-container">
          <input
            type="search"
            placeholder="Search for Quizzes..."
            className="nav-search-field"
          />
          <button className="btn-no-decoration" type="submit">
            <FontAwesomeIcon
              icon="search"
              className="search-icon"
            ></FontAwesomeIcon>
          </button>
        </form>
        <div className="nav-right">
          <div className="nav-icons-container">
            <div className="nav-item nav-icon">
              <FontAwesomeIcon
                icon="trophy"
                className="icon-style"
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
      <form className="mobile-searchbar-container" aria-label="search">
        <input
          type="search"
          placeholder="Search for Items"
          className="nav-search-field"
        />
        <button className="btn-no-decoration" type="submit">
          <FontAwesomeIcon
            icon="search"
            className="search-icon"
          ></FontAwesomeIcon>
        </button>
      </form>
    </>
  );
}

export { Navigation };

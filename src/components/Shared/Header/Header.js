import { Link } from "react-router-dom";
import useAuth from "../../../hook/useAuth";
import "./Header.css";
const Header = () => {
  const { user, logOut, admin } = useAuth();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light nav-backgroud ">
        <div className="container-fluid">
          <Link className="nav-link text-white active" to="/">
            React Quiz
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"></li>
            </ul>
            <div className="d-flex">
              {user?.email ? (
                <a className="nav-link text-danger fs-4" onClick={logOut}>
                  Logout
                </a>
              ) : (
                <Link className="nav-link text-warning fs-4" to="/login">
                  Login
                </Link>
              )}
              {user?.email && admin && (
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

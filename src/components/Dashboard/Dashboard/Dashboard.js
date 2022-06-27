import { Link, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../../hook/useAuth";
import "./Dashboard.css";
const Dashboard = () => {
  const { pathname } = useLocation();
  const { user, logOut, isLoading, admin } = useAuth();
  if (!admin || isLoading) {
    <div class="spinner-grow text-warning" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>;
  }
  return (
    <div>
      {/* Sidebar */}
      <div>
        <div class="navigation">
          <ul>
            <li>
              <a href="#">
                <span class="icon"></span>
                <span class="title">
                  {" "}
                  <i class="fa-solid fa-chart-line me-2"></i> Quiz App
                </span>
              </a>
            </li>

            <li>
              <Link to="/dashboard">
                <span class="icon">
                  <ion-icon name="home-outline"></ion-icon>
                </span>
                <span class="title">
                  <i class="fa-solid fa-gauge"></i> Dashboard
                </span>
              </Link>
            </li>

            <li>
              <Link to="/dashboard/make-quiz">
                <span class="icon">
                  <ion-icon name="people-outline"></ion-icon>
                </span>
                <span class="title">
                  {" "}
                  <i class="fa-solid fa-cookie"></i> Make Quiz
                </span>
              </Link>
            </li>

            <li>
              <Link to="/dashboard/archive">
                <span class="icon">
                  <ion-icon name="chatbubble-outline"></ion-icon>
                </span>
                <span class="title">
                  <i class="fa-solid fa-box-archive"></i> Archive
                </span>
              </Link>
            </li>

            <li>
              <Link to="/dashboard/user-result">
                <span class="icon">
                  <ion-icon name="help-outline"></ion-icon>
                </span>
                <span class="title">
                  <i class="fa-solid fa-square-poll-vertical"></i> User Result
                </span>
              </Link>
            </li>

            <li>
              <a className="text-danger" onClick={logOut}>
                <span class="icon">
                  <ion-icon name="log-out-outline"></ion-icon>
                </span>
                <span class="title">
                  <i class="fa-solid fa-arrow-right-from-bracket"></i> Sign Out
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* <!-- ========================= Main ==================== --> */}
        <div class="main">
          <div class="topbar">
            <div class="toggle">
              <ion-icon name="menu-outline"></ion-icon>
            </div>

            <div class="search">
              <h3 className="text-dark">Welcome {user?.displayName}</h3>
            </div>

            <div class="user"></div>
          </div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import { Link, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../../hook/useAuth";
import "./Dashboard.css";
const Dashboard = () => {
  const { pathname } = useLocation();
  const { logOut } = useAuth();

  return (
    <div>
      {/* Sidebar */}
      <div>
        <div class="navigation">
          <ul>
            <li>
              <a href="#">
                <span class="icon">
                  <ion-icon name="logo-apple"></ion-icon>
                </span>
                <span class="title">Brand Name</span>
              </a>
            </li>

            <li>
              <Link to="/dashboard">
                <span class="icon">
                  <ion-icon name="home-outline"></ion-icon>
                </span>
                <span class="title">Dashboard</span>
              </Link>
            </li>

            <li>
              <Link to="/dashboard/make-quiz">
                <span class="icon">
                  <ion-icon name="people-outline"></ion-icon>
                </span>
                <span class="title">Make Quiz</span>
              </Link>
            </li>

            <li>
              <Link to="/dashboard/archive">
                <span class="icon">
                  <ion-icon name="chatbubble-outline"></ion-icon>
                </span>
                <span class="title">Archive</span>
              </Link>
            </li>

            <li>
              <Link to="/dashboard/user-result">
                <span class="icon">
                  <ion-icon name="help-outline"></ion-icon>
                </span>
                <span class="title">User Result</span>
              </Link>
            </li>

            <li>
              <a className="text-danger" onClick={logOut}>
                <span class="icon">
                  <ion-icon name="log-out-outline"></ion-icon>
                </span>
                <span class="title">Sign Out</span>
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
              <label>
                <input type="text" placeholder="Search here" />
                <ion-icon name="search-outline"></ion-icon>
              </label>
            </div>

            <div class="user">
              <img src="assets/imgs/customer01.jpg" alt="" />
            </div>
          </div>
          <Outlet></Outlet>
          {/* <!-- ============== ========= Cards ================== --> */}
          {/* <!-- ================ Order Details List ================= --> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

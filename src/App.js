import { Route, Routes } from "react-router-dom";
import "./App.css";
import MakeQuizs from "./components/Admin/MakeQuizs/MakeQuizs";
import Archive from "./components/Dashboard/Archive/Archive";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./components/Dashboard/DashboardHome/DashboardHome";
import UserAnswer from "./components/Dashboard/UserAnswer/UserAnswer";
import UserResult from "./components/Dashboard/UserResult/UserResult";
import Home from "./components/Home/Home";
import AdminRoute from "./components/Login/AdminRoute/AdminRoute";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Registration from "./components/Login/Registration/Registration";
import FinalScore from "./components/User/FinalScore/FinalScore";
import StartQuizs from "./components/User/StartQuizs/StartQuizs";
import useAuth from "./hook/useAuth";

function App() {
  const { isLoading } = useAuth();
  if (isLoading) {
    <div class="spinner-grow text-warning" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>;
  }
  return (
    <div className="boxes">
      {isLoading ? (
        <div class="spinner-grow text-warning" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        <>
          {" "}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/start-quiz/:quizId"
              element={
                <PrivateRoute>
                  <StartQuizs />
                </PrivateRoute>
              }
            />
            <Route
              path="/answer/:quizId"
              element={
                <PrivateRoute>
                  {" "}
                  <FinalScore />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/Registration" element={<Registration />} />
            <Route
              path="/dashboard"
              element={
                <AdminRoute>
                  <Dashboard />
                </AdminRoute>
              }
            >
              <Route index element={<DashboardHome />}></Route>
              <Route path="make-quiz" element={<MakeQuizs />}></Route>

              <Route path="archive" element={<Archive />}></Route>
              <Route path="user-result" element={<UserResult />}></Route>
              <Route
                path="user-result/:answerID"
                element={<UserAnswer />}
              ></Route>
            </Route>{" "}
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;

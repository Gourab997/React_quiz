import { Route, Routes } from "react-router-dom";
import "./App.css";
import MakeQuizs from "./components/Admin/MakeQuizs/MakeQuizs";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Registration from "./components/Login/Registration/Registration";
import FinalScore from "./components/User/FinalScore/FinalScore";
import StartQuizs from "./components/User/StartQuizs/StartQuizs";

function App() {
  return (
    <div >
      <Routes>

        <Route path="/"  element={<Home />} />
        <Route path="quiz" element={<MakeQuizs />} />

        <Route path="/start-quiz/:quizId" element=
          {<PrivateRoute>
            <StartQuizs />
          </PrivateRoute>}
        />
        <Route path="/answer/:quizId" element={<FinalScore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

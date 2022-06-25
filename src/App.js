import { Route, Routes } from "react-router-dom";
import "./App.css";
import MakeQuizs from "./components/Admin/MakeQuizs/MakeQuizs";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login/Login";
import Registration from "./components/Login/Registration/Registration";
import FinalScore from "./components/User/FinalScore/FinalScore";
import StartQuizs from "./components/User/StartQuizs/StartQuizs";

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" exact element={<Home />} />
        <Route path="quiz" element={<MakeQuizs />} />
        <Route path="/start-quiz/:quizId" element={<StartQuizs/>} />
        <Route path="/answer/:quizId" element={<FinalScore/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/Registration"  element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;

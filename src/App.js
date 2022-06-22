import { Route, Routes } from "react-router-dom";
import "./App.css";
import MakeQuizs from "./components/Admin/MakeQuizs/MakeQuizs";
import Home from "./components/Home/Home";
import StartQuizs from "./components/User/StartQuizs/StartQuizs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quiz" element={<MakeQuizs />} />
        <Route path="/start-quiz/:quizId" element={<StartQuizs/>} />
      </Routes>
    </div>
  );
}

export default App;

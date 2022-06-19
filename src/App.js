import { Route, Routes } from "react-router-dom";
import './App.css';
import MakeQuizs from "./components/Admin/MakeQuizs/MakeQuizs";
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<Home />} />
        <Route path="quiz" element={<MakeQuizs />} />
    </Routes>

    </div>
  );
}

export default App;

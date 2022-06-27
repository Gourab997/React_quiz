import { useEffect, useState } from "react";
import Quiz from "../Quiz/Quiz";
import "./Quizs.css";

const Quizs = () => {
  const [allquiz, setAllquiz] = useState([]);
  useEffect(() => {
    fetch("https://tranquil-dawn-82015.herokuapp.com/quiz")
      .then((res) => res.json())
      .then((data) => setAllquiz(data));
  }, []);
  return (
    <div className="container my-5">
      <div className="quizs">
        {allquiz.map((quiz) => (
          <Quiz key={quiz._id} singleQuiz={quiz}></Quiz>
        ))}
      </div>
    </div>
  );
};

export default Quizs;

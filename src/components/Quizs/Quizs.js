import { useEffect, useState } from "react";
import Quiz from "../Quiz/Quiz";

const Quizs = () => {
  const [allquiz, setAllquiz] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/quiz")
      .then((res) => res.json())
      .then((data) => setAllquiz(data));
  }, []);
  return (
    <div>
      
      {allquiz.map((quiz) => (
        <Quiz key={quiz._id} singleQuiz={quiz}></Quiz>
      ))}
    </div>
  );
};

export default Quizs;

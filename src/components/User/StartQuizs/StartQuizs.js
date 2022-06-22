import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StartQuizs = () => {
  const { quizId } = useParams([]);
  const [getquiz, setGetquiz] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/quiz/${quizId}`)
      .then((res) => res.json())
      .then((data) => setGetquiz(data));
  }, [getquiz]);

  return (
    <div>
      {getquiz &&
        getquiz.quizs.map((qus) => (
          <div>
            <h6>{qus.question}</h6>
            <p>{qus.option1}</p>
            <p>{qus.option2}</p>
            <p>{qus.option3}</p>
            <p>{qus.option4}</p>
          </div>
        ))}
      {/* */}
    </div>
  );
};

export default StartQuizs;

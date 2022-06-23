import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const FinalScore = () => {
  const { quizId } = useParams([]);
  const [getquizAnswer, setGetquizAnswer] = useState();
  const [getanswer, setGetanswer] = useState();
  const [quiz_id, setQuiz_id] = useState();
  let count = 0;
  useEffect(() => {
    fetch(`http://localhost:5000/answer/${quizId}`)
      .then((res) => res.json())
      .then((data) => setGetanswer(data));
    setQuiz_id(getanswer?.questionId);
  }, [getanswer]);

  useEffect(() => {
    fetch(`http://localhost:5000/quiz/${quiz_id}`)
      .then((res) => res.json())
      .then((data) => setGetquizAnswer(data.quizs));
  }, [quiz_id]);

  return (
    <div>
      <h1>Final Score</h1>
      <p>{getanswer?.questionId}</p>
      {/* <p>{getanswer && Object.keys(getanswer).length - 2}</p> */}

      {getquizAnswer &&
        getquizAnswer.map((qus, i) => (
          <div>
            <p>
              {getanswer && getanswer[`anwser${i}`] == qus.answer
                ? count++
                : "false"}{" "}
            </p>
            <p>{qus.answer}</p>
          </div>
        ))}
      <p>{count + 1}</p>
    </div>
  );
};

export default FinalScore;

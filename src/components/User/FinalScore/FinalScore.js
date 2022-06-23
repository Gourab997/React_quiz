import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./FinalScore.css";
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

  const handleCounter = () => {
    count++;
  };

  useEffect(() => {
    fetch(`http://localhost:5000/quiz/${quiz_id}`)
      .then((res) => res.json())
      .then((data) => setGetquizAnswer(data.quizs));
  }, [quiz_id]);

  return (
    <div className="card">
      <h3 class="card-title ">Result</h3>
      <div class="card-body border border-primary anwser-grid">
        {getquizAnswer &&
          getquizAnswer.map((qus, i) => (
            <div class="card-body border border-primary">
              <h6>
                Question {i + 1} : {qus.question}?
              </h6>
              <p>
                {" "}
                Correct Answer :
                {getanswer && getanswer[`anwser${i}`] == qus.answer ? (
                  (handleCounter(),
                  getanswer[`anwser${i}`],
                  (
                    <span className="badge bg-success ms-1">
                      {qus.answer} (+1 point){" "}
                    </span>
                  ))
                ) : (
                  <span>
                    <span className="badge bg-danger ms-1">
                      {" "}
                      {qus.answer} (+0 point ){" "}
                    </span>
                  </span>
                )}{" "}
              </p>
            </div>
          ))}{" "}
      </div>

      {/* <p>{getanswer && Object.keys(getanswer).length - 2}</p> */}

      <div className="card-border d-flex justify-content-center align-items-center">
        <h5> Final Score :</h5>{" "}
        <div class="page-wrapper">
          <div className="circle-wrapper">
            <div class="success circle"></div>
            <span className="icon">
              {count} / {getanswer && Object.keys(getanswer).length - 3}{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalScore;

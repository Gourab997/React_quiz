import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserAnswer = () => {
  const { answerID } = useParams([]);
  const [getquizAnswer, setGetquizAnswer] = useState();
  const [getanswer, setGetanswer] = useState();
  const [quiz_id, setQuiz_id] = useState();
  let count = 0;
  useEffect(() => {
    fetch(`https://tranquil-dawn-82015.herokuapp.com/user-answer/${answerID}`)
      .then((res) => res.json())
      .then((data) => setGetanswer(data));
  }, [answerID]);

  const handleCounter = () => {
    count++;
  };

  useEffect(() => {
    setQuiz_id(getanswer?.questionId);
    if (quiz_id) {
      fetch(`https://tranquil-dawn-82015.herokuapp.com/quiz/${quiz_id}`)
        .then((res) => res.json())
        .then((data) => setGetquizAnswer(data.quizs));
    }
  }, [quiz_id, getanswer]);

  return (
    <div>
      <div className="card">
        <h3 class="card-title text-dark text-center">Result</h3>
        <div class="card-body border border-primary answer-grid">
          {getquizAnswer &&
            getquizAnswer.map((qus, i) => (
              <div class="card-body border border-primary">
                <h6 className="text-dark">
                  Question {i + 1} : {qus.question}?
                </h6>
                <p className="text-dark">
                  {" "}
                  Correct Answer :
                  {getanswer && getanswer[`answer${i}`] == qus.answer ? (
                    (handleCounter(),
                    getanswer[`answer${i}`],
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
                {count} / {getanswer && Object.keys(getanswer).length - 5}{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAnswer;

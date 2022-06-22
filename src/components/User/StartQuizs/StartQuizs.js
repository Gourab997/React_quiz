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
        getquiz.quizs.map((qus, i) => (
          <div>
            <div class="card-body">
              <h5 class="card-title">{qus.question}</h5>
              <div>
                <input class="form-check-input" type="radio" name={i} id={i} />
                <label class="form-check-label" for={i}>
                  {qus.option1}
                </label>
                <input class="form-check-input" type="radio" name={i} id={i} />
                <label class="form-check-label" for={i}>
                  {qus.option2}
                </label>
                <input class="form-check-input" type="radio" name={i} id={i} />
                <label class="form-check-label" for={i}>
                  {qus.option3}
                </label>
                <input class="form-check-input" type="radio" name={i} id={i} />
                <label class="form-check-label" for={i}>
                  {qus.option4}
                </label>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default StartQuizs;

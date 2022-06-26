import axios from "axios";
import _uniqueId from "lodash/uniqueId";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../../hook/useAuth";
import Header from "../../Shared/Header/Header";
import "./StartQuizs.css";
const StartQuizs = () => {
  const { quizId } = useParams([]);
  const [getquiz, setGetquiz] = useState();
  const { user } = useAuth();

  const [id] = useState(_uniqueId(Math.floor(Math.random() * 500 + 1)));
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:5000/quiz/${quizId}`)
      .then((res) => res.json())
      .then((data) => setGetquiz(data));
  }, [quizId]);

  const onDataSubmit = (data) => {
    data.questionId = quizId;
    data.questionName = getquiz?.QuizTitle;
    data.uniqueId = id;
    data.userName = user?.displayName;
    axios.post(`http://localhost:5000/answer`, data).then((res) => {
      if (res.data.insertedId) {
        navigate(`/answer/${data.uniqueId}`);
        alert("answer submitted Successfully");
      }
    });
  };
  return (
    <div>
      <Header></Header>

      <form onSubmit={handleSubmit(onDataSubmit)}>
        {getquiz &&
          getquiz.quizs.map((qus, i) => (
            <div>
              <div id="quizWrap" class="card-body">
                <h5 id="quizQn" class="card-title">
                  {qus.question}
                </h5>

                <div>
                  <div className="question">
                    <input
                      class="form-check-input  me-3"
                      type="radio"
                      name={i}
                      value="A"
                      {...register(`answer${i}`)}
                    />

                    <label class="form-check-label" for={i}>
                      {qus.option1}
                    </label>
                  </div>
                  <div className="question">
                    <input
                      class="form-check-input me-3"
                      type="radio"
                      name={i}
                      value="B"
                      {...register(`answer${i}`)}
                    />
                    <label class="form-check-label" for={i}>
                      {qus.option2}
                    </label>
                  </div>
                  <div className="question">
                    <input
                      class="form-check-input me-3"
                      type="radio"
                      name={i}
                      {...register(`answer${i}`)}
                      value="C"
                    />
                    <label class="form-check-label" for={i}>
                      {qus.option3}
                    </label>
                  </div>
                  <div className="question">
                    <input
                      class="form-check-input me-3"
                      type="radio"
                      name={i}
                      {...register(`answer${i}`)}
                      value="D"
                    />
                    <label class="form-check-label" for={i}>
                      {qus.option4}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ))}
        <div className="container d-flex justify-content-center align-items-center mb-3">
          <div></div>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default StartQuizs;

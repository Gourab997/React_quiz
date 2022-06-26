import { Link } from "react-router-dom";
import "./Quiz.css";
const Quiz = ({ singleQuiz }) => {
  const { _id, QuizTitle } = singleQuiz;
  return (
    <div className="container">
      {" "}
      <div class="card card-background w-75">
        <div class="card-body d-flex justify-content-between">
          <h5 class="card-title ">{QuizTitle}</h5>

          <Link to={`/start-quiz/${_id}`} id="btn">
            Start Quiz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Quiz;

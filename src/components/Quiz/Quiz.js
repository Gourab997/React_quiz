import { Link } from "react-router-dom";
const Quiz = ({ singleQuiz }) => {
  const { _id, QuizTitle } = singleQuiz;
  return (
    <div>
      {" "}
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <Link to={`/start-quiz/${_id}`} class="btn btn-primary">
            Start Quiz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Quiz;

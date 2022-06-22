import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
const StartQuizs = () => {
  const { quizId } = useParams([]);
  const [getquiz, setGetquiz] = useState();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  useEffect(() => {
    fetch(`http://localhost:5000/quiz/${quizId}`)
      .then((res) => res.json())
      .then((data) => setGetquiz(data));
  }, [getquiz]);
  const onDataSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onDataSubmit)}>
        {getquiz &&
          getquiz.quizs.map((qus, i) => (
            <div>
              <div class="card-body">
                <h5 class="card-title">{qus.question}</h5>

                <div>
                  <input
                    class="form-check-input"
                    type="radio"
                    name={i}
                    value="A"
                    {...register(`anwser${i}`)}
                  />
                  <label class="form-check-label" for={i}>
                    {qus.option1}
                  </label>
                  <input
                    class="form-check-input"
                    type="radio"
                    name={i}
                    value="B"
                    {...register(`anwser${i}`)}
                  />
                  <label class="form-check-label" for={i}>
                    {qus.option2}
                  </label>
                  <input
                    class="form-check-input"
                    type="radio"
                    name={i}
                    {...register(`anwser${i}`)}
                    value="C"
                  />
                  <label class="form-check-label" for={i}>
                    {qus.option3}
                  </label>
                  <input
                    class="form-check-input"
                    type="radio"
                    name={i}
                    {...register(`anwser${i}`)}
                    value="D"
                  />
                  <label class="form-check-label" for={i}>
                    {qus.option4}
                  </label>
                </div>
              </div>
            </div>
          ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StartQuizs;

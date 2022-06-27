import { useEffect, useState } from "react";

const DashboardHome = () => {
  const [allquiz, setAllquiz] = useState([]);

  const handleQuiz = () => {
    fetch("http://localhost:5000/quiz")
      .then((res) => res.json())
      .then((data) => setAllquiz(data));
  };

  useEffect(() => {
    fetch("http://localhost:5000/quiz")
      .then((res) => res.json())
      .then((data) => setAllquiz(data));
  }, []);
  const handleOnDelete = (id, e) => {
    const url = `http://localhost:5000/delete/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          handleQuiz();
        }
      });
  };
  return (
    <div className="container">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Quiz name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {allquiz.map((quiz, i) => (
            <tr>
              <th scope="row">{i + 1}</th>
              <td>{quiz.QuizTitle}</td>
              <td>
                <button
                  onClick={() => handleOnDelete(quiz._id)}
                  class="btn btn-danger ms-2"
                >
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardHome;

import { useEffect, useState } from "react";

const Archive = () => {
  const [allarchive, setAllarchive] = useState([]);
  const handleQuiz = () => {
    fetch("http://localhost:5000/archive")
      .then((res) => res.json())
      .then((data) => setAllarchive(data));
  };
  useEffect(() => {
    fetch("http://localhost:5000/archive")
      .then((res) => res.json())
      .then((data) => setAllarchive(data));
  }, []);
  const handleOnArchive = (id, e) => {
    const url = `http://localhost:5000/archive/${id}`;
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
          {allarchive.map((quiz, i) => (
            <tr>
              <th scope="row">{i + 1}</th>
              <td>{quiz.QuizTitle}</td>
              <td>
                <button
                  onClick={() => handleOnArchive(quiz._id)}
                  class="btn btn-primary"
                >
                  <i class="fa-solid fa-rotate-left"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Archive;

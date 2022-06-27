import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserResult = () => {
  const [answer, setAnswer] = useState([]);

  useEffect(() => {
    fetch("https://tranquil-dawn-82015.herokuapp.com/answer")
      .then((res) => res.json())
      .then((data) => setAnswer(data));
  }, []);
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">User Name</th>
            <th scope="col">Quiz Name</th>
            <th scope="col">View Answer</th>
          </tr>
        </thead>
        <tbody>
          {answer.map((quiz, i) => (
            <tr>
              <th scope="row">{i + 1}</th>
              <td>{quiz.userName}</td>
              <td>{quiz.questionName}</td>
              <td>
                {" "}
                <Link
                  className="btn btn-success"
                  to={`/dashboard/user-result/${quiz._id}`}
                >
                  <i class="fa-solid fa-eye"></i>
                </Link>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserResult;

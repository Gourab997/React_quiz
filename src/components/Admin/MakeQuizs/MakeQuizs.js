import axios from "axios";
import _uniqueId from "lodash/uniqueId";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./MakeQuizs.css";

const MakeQuizs = () => {
  const [inputList, setInputList] = useState([
    {
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      answer: "",
    },
  ]);
  const [radioValue, setradioValue] = useState([]);
  const [id] = useState(_uniqueId("prefix-"));
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([
      ...inputList,
      {
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        answer: "",
      },
    ]);
  };
  const onSubmit = (data) => {
    data.quizs = inputList;
    data.isVisible = 1;
    axios.post("https://tranquil-dawn-82015.herokuapp.com//quiz", data).then((res) => {
      if (res.data.insertedId) {
        navigate(`/dashboard`);
        alert("quiz Created Successfully");
      }
    });
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-3 d-flex ">
          <label for="exampleFormControlInput1" class="form-label">
            Quiz Title
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Quiz Title"
            {...register("QuizTitle")}
          />
        </div>

        {inputList.map((x, i) => {
          return (
            <div className="card container my-4 py-4">
              <div className="container">
                <div className="d-flex justify-content-evenly">
                  <label>
                    {" "}
                    <span class="badge bg-info ">Question {i + 1}</span>{" "}
                  </label>
                  <input
                    name="question"
                    class="card-title w-75"
                    placeholder="Question"
                    value={x.question}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </div>
                <div className="container ">
                  <div className="d-flex justify-content-center   my-3">
                    <input
                      className="ml10 w-25 me-3"
                      name="option1"
                      placeholder="Option 1"
                      value={x.option1}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </div>
                  <div className="d-flex justify-content-center my-3">
                    <input
                      className="ml10 w-25 me-3"
                      name="option2"
                      placeholder="Option 2"
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </div>
                  <div className="d-flex  justify-content-center my-3">
                    <input
                      className="ml10 w-25 me-3"
                      name="option3"
                      placeholder="Option 3"
                      value={x.option3}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </div>
                  <div className="d-flex justify-content-center   my-3">
                    <input
                      className="ml10 w-25 me-3"
                      name="option4"
                      placeholder="Option 4"
                      value={x.option4}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </div>
                </div>

                <div className="d-flex">
                  <label>Answer</label>
                  <select
                    name="answer"
                    value={x.answer}
                    onChange={(e) => handleInputChange(e, i)}
                    className="form-control dropdown-select w-50"
                  >
                    <option value="A">Option 1</option>
                    <option value="B">Option 2</option>
                    <option value="C">Option 3</option>
                    <option value="D">Option 4</option>
                  </select>
                </div>
              </div>

              <div className="btn-box ">
                {inputList.length !== 1 && (
                  <a
                    className="mr10 btn btn-danger float-end"
                    onClick={() => handleRemoveClick(i)}
                  >
                    Remove
                  </a>
                )}
                {inputList.length - 1 === i && (
                  <a
                    className="btn btn-success float-end"
                    onClick={handleAddClick}
                  >
                    Add More Question
                  </a>
                )}
              </div>
            </div>
          );
        })}
        {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}

        <input className="btn btn-success" type="submit" />
      </form>
    </div>
  );
};

export default MakeQuizs;

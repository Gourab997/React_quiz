import axios from "axios";
import _uniqueId from "lodash/uniqueId";
import { useState } from "react";
import { useForm } from "react-hook-form";
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
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const handleRadioChange = (e) => {
    console.log(e);
  };
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
    axios.post("http://localhost:5000/quiz", data).then((res) => {
      if (res.data.insertedId) {
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
                      name="option1"
                      placeholder="Option 3"
                      value={x.option3}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </div>
                  <div className="d-flex justify-content-center   my-3">
                    <input
                      className="ml10 w-25 me-3"
                      name="option1"
                      placeholder="Option 4"
                      value={x.option4}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <div class="form-check me-2">
                    <input
                      key={i}
                      class="form-check-input"
                      type="radio"
                      name="answer"
                      value="A"
                      id={i}
                      onChange={(e) => handleInputChange(e, i)}
                      checked={x.answer === "A"}
                    />
                    <label class="form-check-label" for={i}>
                      A
                    </label>
                  </div>
                  <div class="form-check me-2">
                    <input
                      key={i}
                      class="form-check-input"
                      type="radio"
                      name="answer"
                      id={i}
                      value="B"
                      onChange={(e) => handleInputChange(e, i)}
                      checked={x.answer === "B"}
                    />
                    <label class="form-check-label" for={i}>
                      B
                    </label>
                  </div>
                  <div class="form-check me-2">
                    <input
                      key={i}
                      class="form-check-input"
                      type="radio"
                      name="answer"
                      value="C"
                      id={i}
                      onChange={(e) => handleInputChange(e, i)}
                      checked={x.answer === "C"}
                    />
                    <label class="form-check-label" for={i}>
                      C
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="answer"
                      id={i}
                      value="D"
                      onChange={(e) => handleInputChange(e, i)}
                      checked={x.answer === "D"}
                    />
                    <label class="form-check-label" for={i}>
                      D
                    </label>
                  </div>
                </div>
                <select
                  name="answer"
                  value={x.answer}
                  onChange={(e) => handleInputChange(e, i)}
                  class="form-control"
                >
                  <option value="A">Option 1</option>
                  <option value="B">Option 2</option>
                  <option value="C">Option 3</option>
                  <option value="D">Option 4</option>
                </select>
              </div>

              <div className="btn-box ">
                {inputList.length !== 1 && (
                  <button
                    className="mr10 btn btn-danger float-end"
                    onClick={() => handleRemoveClick(i)}
                  >
                    Remove
                  </button>
                )}
                {inputList.length - 1 === i && (
                  <button
                    className="btn btn-success float-end"
                    onClick={handleAddClick}
                  >
                    Add More Question
                  </button>
                )}
              </div>
            </div>
          );
        })}
        <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>

        <input type="submit" />
      </form>
    </div>
  );
};

export default MakeQuizs;

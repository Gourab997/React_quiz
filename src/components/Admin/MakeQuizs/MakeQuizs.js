import axios from "axios";
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
                    <div class="form-check ">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value={x.answer}
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Answer
                      </label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center my-3">
                    <input
                      className="ml10 w-25 me-3"
                      name="option2"
                      placeholder="Option 2"
                      id="A"
                      value="A"
                      checked={x.answer}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                    <div class="form-check ">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value={x.answer}
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Answer
                      </label>
                    </div>
                  </div>
                  <div className="d-flex  justify-content-center my-3">
                    <input
                      className="ml10 w-25 me-3"
                      name="option1"
                      placeholder="Option 3"
                      value={x.option3}
                      onChange={(e) => handleInputChange(e, i)}
                    />

                    <div class="form-check ">
                      <input
                        class="form-check-input"
                        name="answer"
                        type="checkbox"
                        value=""
                        onChange={(x.answer = "A")}
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Answer
                      </label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center   my-3">
                    <input
                      className="ml10 w-25 me-3"
                      name="option1"
                      placeholder="Option 4"
                      value={x.option4}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                    <div class="form-check ">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        name="answer"
                        value="A"
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Answer
                      </label>
                    </div>
                  </div>
                </div>
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

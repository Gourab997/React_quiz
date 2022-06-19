import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./MakeQuizs.css";

const MakeQuizs = () => {
  const [inputList, setInputList] = useState([
    { question: "", answer1: "", answer2: "", answer3: "", answer4: "" },
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
      { question: "", answer1: "", answer2: "", answer3: "", answer4: "" },
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-3">
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
            <div className="card my-4">
              <div className="container">
                <div className="d-flex justify-content-evenly">
                  <label>Question</label>
                  <input
                    name="question"
                    class="card-title"
                    placeholder="Question"
                    value={x.question}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </div>
                <div className="container">
                  <div className="d-flex justify-content-between my-3">
                    <input
                      className="ml10"
                      name="answer1"
                      placeholder="Option 1"
                      value={x.answer1}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                    <div class="form-check ">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Answer
                      </label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between my-3">
                    <input
                      className="ml10"
                      name="answer1"
                      placeholder="Option 1"
                      value={x.answer1}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                    <div class="form-check ">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Answer
                      </label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between my-3">
                    <input
                      className="ml10"
                      name="answer1"
                      placeholder="Option 1"
                      value={x.answer1}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                    <div class="form-check ">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Answer
                      </label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between my-3">
                    <input
                      className="ml10"
                      name="answer1"
                      placeholder="Option 1"
                      value={x.answer1}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                    <div class="form-check ">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Answer
                      </label>
                    </div>
                  </div>

               
                </div>
              </div>

              <div className="btn-box">
                {inputList.length !== 1 && (
                  <button className="mr10" onClick={() => handleRemoveClick(i)}>
                    Remove
                  </button>
                )}
                {inputList.length - 1 === i && (
                  <button onClick={handleAddClick}>Add</button>
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

import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

const MakeQuizs = () => {
  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);
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
    setInputList([...inputList, { firstName: "", lastName: "" }]);
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
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            {...register("QuizTitle")}
          />
        </div>

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        {inputList.map((x, i) => {
          return (
            <div className="box">
              <input
                name="firstName"
                placeholder="Enter First Name"
                value={x.firstName}
                onChange={(e) => handleInputChange(e, i)}
              />
              <input
                className="ml10"
                name="lastName"
                placeholder="Enter Last Name"
                value={x.lastName}
                onChange={(e) => handleInputChange(e, i)}
              />
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

import axios from "axios";
import { useForm } from "react-hook-form";

const MakeQuizs = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/quiz", data).then((res) => {
      if (res.data.insertedId) {
        alert("quiz Created Successfully");
      }
    });
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register("example")} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default MakeQuizs;

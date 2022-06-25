import Quizs from "../Quizs/Quizs";
import Header from "../Shared/Header/Header";

const Home = () => {
  return (
    <div>
       <Header></Header>
      <h1>This is the home page</h1>
      <Quizs></Quizs>
    </div>
  );
};

export default Home;

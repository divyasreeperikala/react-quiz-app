import { useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data/questions";

function Quiz() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const navigate = useNavigate();

  const handleAnswer = (option) => {

    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const next = currentQuestion + 1;

    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      navigate("/result", { state: { score } });
    }

  };

  return (
    <div className="quiz">

      <h2>{questions[currentQuestion].question}</h2>

      <div className="options">

        {questions[currentQuestion].options.map((option, index) => (

          <button
            key={index}
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>

        ))}

      </div>

    </div>
  );
}

export default Quiz;
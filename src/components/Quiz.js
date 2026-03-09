import { useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data/questions";

function Quiz() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const navigate = useNavigate();

  const handleAnswer = (option) => {

    let newScore = score;

    if (option === questions[currentQuestion].answer) {
      newScore = score + 1;
      setScore(newScore);
    }

    const next = currentQuestion + 1;

    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      navigate("/result", { state: { score: newScore } });
    }

  };

  return (
    <div className="quiz">

      <div className="progress">
        Question {currentQuestion + 1} / {questions.length}
      </div>

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
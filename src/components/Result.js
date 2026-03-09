import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Result() {

  const location = useLocation();
  const navigate = useNavigate();

  const score = location.state?.score || 0;

  return (
    <div className="result">

      <h2>Quiz Completed 🎉</h2>

      <h3>Your Score: {score}</h3>

      <p>
        {score >= 5 ? "Excellent Work 🚀" :
        score >= 3 ? "Good Job 👍" :
        "Keep Practicing 💡"}
      </p>

      <button onClick={() => navigate("/")}>
        Play Again
      </button>

    </div>
  );
}

export default Result;
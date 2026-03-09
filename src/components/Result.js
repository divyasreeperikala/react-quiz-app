import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Result() {

  const location = useLocation();
  const navigate = useNavigate();

  const score = location.state?.score || 0;

  return (
    <div className="result">

      <h2>Your Score</h2>

      <h3>{score}</h3>

      <button onClick={() => navigate("/")}>
        Play Again
      </button>

    </div>
  );
}

export default Result;
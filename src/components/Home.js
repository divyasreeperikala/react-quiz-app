import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {

  const [name, setName] = useState("");
  const navigate = useNavigate();

  const startQuiz = (e) => {
    e.preventDefault();
    navigate("/quiz", { state: { name } });
  };

  return (
    <div className="home">

      <h2>Enter Your Name</h2>

      <form onSubmit={startQuiz}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <button type="submit">Start Quiz</button>
      </form>

    </div>
  );
}

export default Home;
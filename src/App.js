import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">

        <h1>React Quiz App</h1>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
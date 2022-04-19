import { Link } from "react-router-dom";
import "./rules.css";

function Rules() {
  return (
    <main className="main-container flex-column-center">
      <div className="rules flex-column-center">
        <h3 className="text-center heading3">Cakes Quiz</h3>
        <ul className="ulist-style-circle">
          <li>There are total 3 Levels Easy, Medium and Hard.</li>
          <li>
            You can go to the next level only after completing the previous one.
          </li>
          <li>For each question, you will get 90 seconds to answer.</li>
          <li>Each level will have 5 questions.</li>
          <li>Each correct answer will give you 20 points.</li>
          <li>You require atleast 60 points to pass that level.</li>
          <li>You cannot select multiple answers for one question.</li>
          <li>You cannot skip the question.</li>
          <li>
            Once you have navigated to the next question, you cannot come back
            to previous one.
          </li>
        </ul>
        <Link className="btn btn-primary no-link-decoration" to="/question">
          Start Quiz
        </Link>
      </div>
    </main>
  );
}

export { Rules };

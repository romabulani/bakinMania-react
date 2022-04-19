import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./question.css";

function Question() {
  return (
    <main className="main-container flex-row-center">
      <div className="question-container flex-column-center">
        <div className="question-timer-container flex-row-center">
          <div className="question-number">Question 1</div>
          <div className="timer">
            <FontAwesomeIcon icon="stopwatch" className="keyword" />
            <span>00:59</span>
          </div>
        </div>
        <div className="question-and-options flex-column-center">
          <div className="question-header">
            Which common cake ingredient can be replaced with a mashed banana?
          </div>
          <div className="options-container flex-column-center">
            <label className="option-label">
              <input type="radio" className="option" name="option" />
              Eggs
            </label>
            <label className="option-label">
              <input type="radio" className="option" name="option" />
              Butter
            </label>
            <label className="option-label">
              <input type="radio" className="option" name="option" />
              Milk
            </label>
            <label className="option-label">
              <input type="radio" className="option" name="option" />
              Flour
            </label>
          </div>
          <Link className="btn btn-primary no-link-decoration" to="/results">
            {`Next >>`}
          </Link>
        </div>
      </div>
    </main>
  );
}

export { Question };

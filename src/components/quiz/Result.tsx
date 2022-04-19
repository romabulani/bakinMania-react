import { Link } from "react-router-dom";
import "./result.css";

function Result() {
  return (
    <main className="main-container flex-row-center">
      <div className="results-container flex-column-center">
        <h3 className="heading3">🎉 Congratulations!! You passed the Level</h3>
        <div className="result-container flex-column-center">
          <div className="question-number">Question 1</div>
          <div className="question-header">
            Which common cake ingredient can be replaced with a mashed banana?
          </div>
          <div className="options-container flex-column-center">
            <label className="result-label result-label-success">
              <input type="radio" className="option" name="option" />
              Eggs
            </label>
            <label className="result-label">
              <input type="radio" className="option" name="option" />
              Butter
            </label>
            <label className="result-label">
              <input type="radio" className="option" name="option" />
              Milk
            </label>
            <label className="result-label">
              <input type="radio" className="option" name="option" />
              Flour
            </label>
          </div>
        </div>
        <div className="result-container flex-column-center">
          <div className="question-number">Question 2</div>
          <div className="question-header">
            Which common cake ingredient can be replaced with a mashed banana?
          </div>
          <div className="options-container flex-column-center">
            <label className="result-label result-label-success">
              <input type="radio" className="option" name="option" />
              Eggs
            </label>
            <label className="result-label">
              <input type="radio" className="option" name="option" />
              Butter
            </label>
            <label className="result-label result-label-failure">
              <input type="radio" className="option" name="option" />
              Milk
            </label>
            <label className="result-label">
              <input type="radio" className="option" name="option" />
              Flour
            </label>
          </div>
        </div>
        <Link className="btn btn-primary no-link-decoration" to="/">
          BACK TO HOME
        </Link>
      </div>
    </main>
  );
}

export { Result };

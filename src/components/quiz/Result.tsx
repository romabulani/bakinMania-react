import { useAuth, useQuiz } from "contexts";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addScoreToDatabase } from "services";
import { calculateScore } from "utils";
import "./result.css";

function Result() {
  const { quizState, quizDispatch } = useQuiz();
  const { authUser } = useAuth();
  const navigate = useNavigate();
  const [currScore, setCurrScore] = useState(0);
  const { selectedAnswers, activeQuiz, activeQuizAnswers } = quizState;
  const getClassname = (currOption: string, index: number) => {
    if (activeQuizAnswers[index] === currOption) return "result-label-success";
    if (selectedAnswers[index] === currOption) return "result-label-failure";
    return "";
  };

  useEffect(() => {
    const innerCurrScore = calculateScore(activeQuizAnswers, selectedAnswers);
    setCurrScore(innerCurrScore);
    quizDispatch({ type: "SET_SCORE", payload: innerCurrScore });
    quizDispatch({ type: "SET_ACTIVE_QUESTION", payload: -1 });
    async function addScore() {
      await addScoreToDatabase(innerCurrScore, authUser, quizState);
    }
    addScore();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (selectedAnswers.length === 0) navigate("/");
  }, [selectedAnswers, navigate]);

  return (
    <main className="main-container flex-row-center">
      <div className="results-container flex-column-center">
        <h3 className="heading3">{`${
          currScore >= 60
            ? "🎉 Congratulations!! You passed the Quiz"
            : "😔 Oh No! You couldn't Pass"
        }`}</h3>
        <h4 className="heading4">{`You scored ${currScore}`}</h4>
        {activeQuiz.map((quiz, index) => (
          <div className="result-container flex-column-center" key={index}>
            <hr className="section-line" />
            <div className="flex-row-spacebetween question-message-container">
              <div className="question-number">Question {index + 1}</div>
              {selectedAnswers[index] === "" && (
                <div className="error-color">Option not selected</div>
              )}
            </div>
            <div className="result-question-header">{quiz.statement}</div>
            <div className="options-container flex-column-center">
              {quiz.options.map((option) => (
                <label
                  className={`result-label ${getClassname(option, index)}`}
                  key={option}
                >
                  <input type="radio" className="option" name="option" />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}

        <Link className="btn btn-primary no-link-decoration" to="/" replace>
          BACK TO HOME
        </Link>
      </div>
    </main>
  );
}

export { Result };

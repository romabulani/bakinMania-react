import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuiz } from "contexts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./question.css";

function Question() {
  const { quizState, quizDispatch } = useQuiz();
  const navigate = useNavigate();
  const { activeQuestion, activeQuiz } = quizState;
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const optionsArray = activeQuiz[activeQuestion]?.options;

  const onNextClickHandler = async () => {
    quizDispatch({
      type: "SET_ACTIVE_QUESTION",
      payload: activeQuestion + 1,
    });
    quizDispatch({
      type: "SET_ANSWERS",
      payload: selectedAnswer,
    });
    if (activeQuestion === 4) {
      navigate("/results", { replace: true });
    }
  };

  return (
    <main className="main-container flex-row-center">
      {activeQuestion <= 4 && (
        <div className="question-container flex-column-center">
          <div className="question-timer-container flex-row-center">
            <div className="question-number">Question {activeQuestion + 1}</div>
            <div className="timer">
              <FontAwesomeIcon icon="stopwatch" className="keyword" />
              <span>00:59</span>
            </div>
          </div>
          <div className="question-and-options flex-column-center">
            <div className="question-header">
              {activeQuiz[activeQuestion]?.statement}
            </div>
            <div className="options-container flex-column-center">
              {optionsArray.map((option, index) => (
                <label
                  key={index}
                  className={
                    selectedAnswer === option
                      ? "option-label active-option"
                      : "option-label"
                  }
                >
                  <input
                    type="radio"
                    className="option"
                    name="option"
                    onClick={() => setSelectedAnswer(option)}
                  />
                  {option}
                </label>
              ))}
            </div>
            <button
              className="btn btn-primary no-link-decoration"
              onClick={onNextClickHandler}
            >
              {activeQuestion === 4 ? "Submit" : `Next >>`}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export { Question };

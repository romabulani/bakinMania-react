import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuiz } from "contexts";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./question.css";

function Question() {
  const { quizState, quizDispatch } = useQuiz();
  const navigate = useNavigate();
  const { activeQuestion, activeQuiz } = quizState;
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const optionsArray = activeQuiz[activeQuestion]?.options;
  const [timerSec, setTimerSec] = useState(60);

  useEffect(() => {
    const timerId = setInterval(
      () => setTimerSec((timerSec) => timerSec - 1),
      1000
    );
    return () => clearInterval(timerId);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (timerSec === 0) {
      quizDispatch({
        type: "SET_ANSWERS",
        payload: selectedAnswer,
      });
      if (activeQuestion === 4) navigate("/results", { replace: true });
      else {
        quizDispatch({
          type: "SET_ACTIVE_QUESTION",
          payload: activeQuestion + 1,
        });
        setTimerSec(60);
      }
    }
    // eslint-disable-next-line
  }, [timerSec]);

  const onNextClickHandler = () => {
    setTimerSec(60);
    quizDispatch({
      type: "SET_ACTIVE_QUESTION",
      payload: activeQuestion + 1,
    });
    quizDispatch({
      type: "SET_ANSWERS",
      payload: selectedAnswer,
    });
    setSelectedAnswer("");
    if (activeQuestion === 4) {
      navigate("/results", { replace: true });
    }
  };

  const onQuitClickHandler = () => {
    quizDispatch({
      type: "SET_ACTIVE_QUESTION",
      payload: -1,
    });
    quizDispatch({
      type: "RESET_ANSWERS",
    });
    navigate("/", { replace: true });
  };
  return (
    <main className="main-container flex-row-center">
      {activeQuestion <= 4 && (
        <div className="question-container flex-column-center">
          <div className="question-timer-container flex-row-center">
            <div className="question-number">Question {activeQuestion + 1}</div>
            <div className="timer">
              <FontAwesomeIcon icon="stopwatch" className="keyword" />
              <span className="p-left-5">{timerSec} sec</span>
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
          </div>
          <div className="question-button-container">
            <button
              className="btn btn-outline-error btn-quit"
              onClick={onQuitClickHandler}
            >
              Quit
            </button>
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

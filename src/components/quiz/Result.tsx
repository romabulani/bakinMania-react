import { useAuth, useQuiz } from "contexts";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addScoreToDatabase } from "services";
import "./result.css";

function Result() {
  const { quizState, quizDispatch } = useQuiz();
  const { authUser } = useAuth();
  const navigate = useNavigate();
  const [currScore, setCurrScore] = useState(0);
  const {
    selectedAnswers,
    activeQuiz,
    activeQuizAnswers,
    activeQuestion,
    score,
  } = quizState;

  const getClassname = (currOption: string, index: number) => {
    if (activeQuizAnswers[index] === currOption) return "result-label-success";
    if (selectedAnswers[index] === currOption) return "result-label-failure";
    return "";
  };

  useEffect(() => {
    let innerCurrScore = 0;
    for (let i = 0; i < activeQuizAnswers.length; i++)
      if (activeQuizAnswers[i] === selectedAnswers[i]) innerCurrScore += 20;
    setCurrScore(innerCurrScore);
    quizDispatch({ type: "SET_SCORE", payload: currScore });
    async function addScore() {
      await addScoreToDatabase(innerCurrScore, authUser, quizState);
    }
    addScore();
    quizDispatch({ type: "SET_SCORE", payload: 0 });
  }, [
    activeQuizAnswers,
    authUser,
    currScore,
    quizDispatch,
    quizState,
    selectedAnswers,
  ]);

  useEffect(() => {
    if (activeQuestion === -1) navigate("/");
  }, [activeQuestion, navigate]);

  return (
    <main className="main-container flex-row-center">
      <div className="results-container flex-column-center">
        <h3 className="heading3">{`${
          score >= 60
            ? "🎉 Congratulations!! You passed the Level"
            : "😔 Oh No! You couldn't Pass"
        }`}</h3>
        <h4 className="heading4">{`You scored ${currScore}`}</h4>
        {activeQuiz.map((quiz, index) => (
          <div className="result-co ntainer flex-column-center" key={index}>
            <div className="question-number">Question {index + 1}</div>
            <div className="question-header">{quiz.statement}</div>
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

        <Link className="btn btn-primary no-link-decoration" to="/">
          BACK TO HOME
        </Link>
      </div>
    </main>
  );
}

export { Result };

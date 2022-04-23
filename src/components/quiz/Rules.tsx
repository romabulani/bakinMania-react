import { useQuiz } from "contexts";
import { quizData } from "data";
import { useParams } from "react-router-dom";
import { Question } from "./Question";
import "./rules.css";

function Rules() {
  const params = useParams();
  const { quizDispatch, quizState } = useQuiz();

  const onStartClickHandler = () => {
    quizDispatch({ type: "SET_CATEGORY", payload: params.quizId || "" });
    quizDispatch({ type: "SET_ACTIVE_QUESTION", payload: 0 });
    quizDispatch({
      type: "SET_ACTIVE_QUIZ",
      payload: quizData[params.quizId as keyof typeof quizData].questions,
    });
    quizDispatch({
      type: "SET_ACTIVE_QUIZ_ANSWERS",
      payload: quizData[params.quizId as keyof typeof quizData].answers,
    });
  };

  return (
    <>
      {quizState.activeQuestion === -1 ? (
        <main className="main-container flex-column-center">
          <div className="rules flex-column-center">
            <h3 className="text-center heading3">Rules for Game</h3>
            <ul className="ulist-style-circle">
              <li>For each question, you will get 60 seconds to answer.</li>
              <li>Each correct answer will give you 20 points.</li>
              <li>You cannot select multiple answers for one question.</li>
            </ul>
            <button
              className="btn btn-primary no-link-decoration"
              onClick={onStartClickHandler}
            >
              Let's Start
            </button>
          </div>
        </main>
      ) : (
        <Question />
      )}
    </>
  );
}

export { Rules };

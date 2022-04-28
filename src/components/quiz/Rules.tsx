import { useQuiz } from "contexts";
import { useParams } from "react-router-dom";
import { getQuiz } from "services";
import { Question } from "./Question";
import "./rules.css";

function Rules() {
  const params = useParams();
  const { quizDispatch, quizState } = useQuiz();

  const onStartClickHandler = async () => {
    const response = await getQuiz(params.quizId || "");
    quizDispatch({ type: "SET_CATEGORY", payload: params.quizId || "" });
    quizDispatch({ type: "SET_ACTIVE_QUESTION", payload: 0 });
    quizDispatch({
      type: "SET_ACTIVE_QUIZ",
      payload: response?.questions,
    });
    quizDispatch({
      type: "SET_ACTIVE_QUIZ_ANSWERS",
      payload: response?.answers,
    });
    quizDispatch({
      type: "SET_CATEGORY_NAME",
      payload: response?.categoryName,
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
              <li>You cannot go back to the previous question.</li>
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

import { useAuth, useQuiz } from "contexts";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDashboard } from "services";
import "./dashboard.css";

function Dashboard() {
  type QuizDataTypeFromFirebase = {
    categoryId: number;
    categoryName: string;
    score: number;
    id: number;
  };
  type UserDataTypeFromFirebase = {
    email: string;
    name: string;
    uid: string;
    authProvider: string;
    quizzesTaken: Array<QuizDataTypeFromFirebase>;
    totalScore: number;
  } | null;

  const { authUser } = useAuth();
  const { setLoader } = useQuiz();
  const [userData, setUserData] = useState<UserDataTypeFromFirebase>();
  const navigate = useNavigate();

  useEffect(() => {
    setLoader(true);
    async function getUserDashboard() {
      const response = await getDashboard(authUser);
      setUserData(response);
    }
    getUserDashboard();
    setTimeout(() => setLoader(false), 500);
    // eslint-disable-next-line
  }, []);

  const quizPassed = (quizScore: number) => (quizScore >= 60 ? "PASS" : "FAIL");

  return (
    <div className="dashboard">
      <div className="dashboard-header flex-row-spacebetween">
        <h4 className="heading4">Your Progress</h4>
        <h4 className="heading4">{`Total Score : ${userData?.totalScore}`}</h4>
      </div>
      <hr className="section-line" />
      {userData?.quizzesTaken
        .reverse()
        .map(({ id, categoryId, categoryName, score }) => (
          <div key={id} className={`quiz-card `}>
            <div className="category-and-retake">
              <div className="large-font-size">{categoryName}</div>
              <div>
                <button
                  className="btn btn-primary btn-retake"
                  onClick={() => navigate(`/quiz/${categoryId}`)}
                >
                  Retake
                </button>
              </div>
            </div>

            <div className="large-font-size">{`${score} ${quizPassed(
              score
            )}`}</div>
          </div>
        ))}
    </div>
  );
}

export { Dashboard };

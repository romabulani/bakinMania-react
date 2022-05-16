import { useQuiz } from "contexts";
import { useEffect, useState } from "react";
import { getLeaderboard } from "services";
import "./leaderboard.css";

function Leaderboard() {
  const [userData, setUserData] = useState([]);
  const { setLoader, quizDispatch } = useQuiz();
  useEffect(() => {
    setLoader(true);
    async function getUsers() {
      const response = await getLeaderboard();
      setUserData(response);
    }
    getUsers();

    quizDispatch({
      type: "SET_ACTIVE_QUESTION",
      payload: -1,
    });
    quizDispatch({ type: "RESET_ANSWERS" });
    const timerId = setTimeout(() => setLoader(false), 1000);
    return () => clearTimeout(timerId);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex-row-center">
      <table className="leaderboard-table">
        <caption className="table-caption">Leaderboard</caption>
        <thead>
          <tr className="table-row">
            <th scope="col" className="table-header-cell">
              Rank
            </th>
            <th scope="col" className="table-header-cell">
              Name
            </th>
            <th scope="col" className="table-header-cell">
              Total Score
            </th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user: any, index) => (
            <tr key={user.uid}>
              <td data-label="Rank" className="table-cell">
                {index + 1}
              </td>
              <td data-label="Name" className="table-cell">
                {user.name}
              </td>
              <td data-label="Total Score" className="table-cell">
                {user.totalScore}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { Leaderboard };

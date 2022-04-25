import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const getLeaderboard = async () => {
  const dbUser = collection(db, "users");
  const data = await getDocs(dbUser);

  let userData: any = [];

  data.docs.forEach((doc) => (userData = [...userData, doc.data()]));
  return userData.sort((a: any, b: any) => b.totalScore - a.totalScore);
};

export { getLeaderboard };

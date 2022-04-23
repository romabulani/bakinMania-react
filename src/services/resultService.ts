import { QuizType, userType } from "contexts/types";
import { db } from "../firebase";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { categoryData } from "data";

const addScoreToDatabase = async (
  currScore: number,
  authUser: userType,
  quizState: QuizType
) => {
  const dbUser = collection(db, "users");
  const data = await getDocs(dbUser);

  let userData: any;
  let userDocId: string = "";

  data.docs.forEach((doc) => {
    if (doc.data().uid.toString() === authUser?.uid) {
      userData = doc.data();
      userDocId = doc.id;
    }
  });
  const getUser = doc(db, "users", userDocId);
  const categoryName = categoryData.filter(
    (category) => category._id === quizState.category
  )[0].categoryName;

  await updateDoc(getUser, {
    quizzesTaken: [
      ...userData.quizzesTaken,
      { id: Date.now(), categoryName, score: currScore },
    ],
  });
};

export { addScoreToDatabase };

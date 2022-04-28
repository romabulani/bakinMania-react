import { db } from "../firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

const getQuiz = async (categoryId: string) => {
  const docRef = doc(db, "quizzes", categoryId);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

const getCategories = async () => {
  const querySnapshot = await getDocs(collection(db, "quizcategories"));
  const categories: any = [];
  querySnapshot.forEach((doc) => categories.push(doc.data()));
  return categories;
};
export { getQuiz, getCategories };

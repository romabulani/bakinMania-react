import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { userType } from "contexts/types";

const getDashboard = async (authUser: userType) => {
  const dbUser = collection(db, "users");
  const data = await getDocs(dbUser);

  let userData;

  data.docs.forEach((doc) => {
    if (doc.data().uid.toString() === authUser?.uid) {
      userData = doc.data() as userType;
      return;
    }
  });
  return userData;
};

export { getDashboard };

import { userType } from "contexts/types";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { auth, db } from "../firebase";

const login = async (email: string, password: string) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    console.error(err);
  }
};

const signup = async (name: string, email: string, password: string) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    const initialUserObj: userType = {
      uid: user.uid,
      name,
      email,
      quizzesTaken: [],
      totalScore: 0,
    };
    const docRef = await addDoc(collection(db, "users"), initialUserObj);
    if (docRef) return initialUserObj;
    else throw new Error();
  } catch (err) {
    toast.error("Account Already exists");
    console.error(err);
  }
};

const logout = () => {
  signOut(auth);
};

export { login, signup, logout };

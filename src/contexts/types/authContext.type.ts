export type userType = {
  email: string;
  name: string;
  uid: string;
  quizzesTaken: [];
  totalScore: number;
} | null;

export type AuthContextType = {
  authUser: userType;
  setAuthUser: (arg0: userType) => void;
};

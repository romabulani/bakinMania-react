export type userType = {
  email: string;
  name: string;
  uid: string;
  authProvider: string;
  quizzesTaken: [];
  score: number;
} | null;

export type AuthContextType = {
  authToken: string;
  setAuthToken: (arg0: string) => void;
  authUser: userType;
  setAuthUser: (arg0: userType) => void;
};

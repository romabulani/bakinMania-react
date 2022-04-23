export type userType = {
  email: string;
  name: string;
  uid: string;
  authProvider: string;
  quizzesTaken: [];
} | null;

export type AuthContextType = {
  authToken: string;
  setAuthToken: (arg0: string) => void;
  authUser: userType;
  setAuthUser: (arg0: userType) => void;
};

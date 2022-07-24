import { createContext, useContext, useReducer, useState } from "react";
import { quizReducer } from "./quizReducer";
import { QuizContextType, QuizType } from "./types";

const QuizContext = createContext<QuizContextType>({} as QuizContextType);

export const initialQuizState: QuizType = {
  category: "",
  categoryName: "",
  activeQuestion: -1,
  selectedAnswers: [],
  score: 0,
  activeQuiz: [],
  activeQuizAnswers: [],
};

const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [quizState, quizDispatch] = useReducer(quizReducer, initialQuizState);
  const [loader, setLoader] = useState(false);
  return (
    <QuizContext.Provider
      value={{ quizState, quizDispatch, initialQuizState, loader, setLoader }}
    >
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { QuizProvider, useQuiz };

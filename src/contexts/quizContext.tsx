import { createContext, useContext, useReducer, useState } from "react";
import { QuizActionType, QuizContextType, QuizType } from "./types";

const QuizContext = createContext<QuizContextType>({} as QuizContextType);

const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const initialQuizState: QuizType = {
    category: "",
    categoryName: "",
    activeQuestion: -1,
    selectedAnswers: [],
    score: 0,
    activeQuiz: [],
    activeQuizAnswers: [],
  };

  const quizReducer = (state: QuizType, action: QuizActionType): QuizType => {
    switch (action.type) {
      case "SET_CATEGORY":
        return {
          ...state,
          category: action.payload,
        };
      case "SET_CATEGORY_NAME":
        return {
          ...state,
          categoryName: action.payload,
        };
      case "SET_ANSWERS":
        return {
          ...state,
          selectedAnswers: [...state.selectedAnswers, action.payload],
        };
      case "SET_SCORE":
        return {
          ...state,
          score: action.payload,
        };
      case "SET_ACTIVE_QUESTION":
        return {
          ...state,
          activeQuestion: action.payload,
        };
      case "SET_ACTIVE_QUIZ":
        return {
          ...state,
          activeQuiz: action.payload,
        };
      case "SET_ACTIVE_QUIZ_ANSWERS":
        return {
          ...state,
          activeQuizAnswers: action.payload,
        };
      case "RESET_ANSWERS":
        return {
          ...state,
          selectedAnswers: [],
        };
      default:
        return { ...state };
    }
  };
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

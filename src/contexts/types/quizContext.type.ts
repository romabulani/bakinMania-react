export type QuestionAnswersObj = {
  statement: string;
  options: Array<string>;
};

export type QuizQuestionAndAnswers = Array<QuestionAnswersObj>;

export type QuizType = {
  category: string;
  categoryName: string;
  selectedAnswers: Array<string>;
  score: number;
  activeQuestion: number;
  activeQuiz: QuizQuestionAndAnswers;
  activeQuizAnswers: Array<string>;
};

export type QuizActionType =
  | {
      type: "SET_CATEGORY";
      payload: string;
    }
  | {
      type: "SET_CATEGORY_NAME";
      payload: string;
    }
  | {
      type: "SET_ACTIVE_QUIZ";
      payload: QuizQuestionAndAnswers;
    }
  | {
      type: "SET_ANSWERS";
      payload: string;
    }
  | {
      type: "SET_SCORE";
      payload: number;
    }
  | {
      type: "SET_ACTIVE_QUESTION";
      payload: number;
    }
  | {
      type: "SET_ACTIVE_QUIZ_ANSWERS";
      payload: Array<string>;
    }
  | {
      type: "RESET_ANSWERS";
    }
  | {
      type: string;
      payload?: any;
    };

export type QuizContextType = {
  quizState: QuizType;
  quizDispatch: (arg0: QuizActionType) => void;
  initialQuizState: QuizType;
  loader: boolean;
  setLoader: (arg0: boolean) => void;
};

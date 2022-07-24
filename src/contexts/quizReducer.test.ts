import { initialQuizState } from "./quizContext";
import { quizReducer } from "./quizReducer";
import { QuizActionType, QuizType } from "./types";

describe("testing quiz dispatch reducer", () => {
  //AAA - Arrange Act Assert for every test case
  test("Should set the category of quiz being played currently in SET_CATEGORY dispatch", () => {
    // Arrange
    const initialState: QuizType = {
      ...initialQuizState,
      category: "",
    } as QuizType;

    const action: QuizActionType = {
      type: "SET_CATEGORY",
      payload: "558cf8c9-a4cd-4991-8c21-98271d7aaf00",
    };

    const finalState: QuizType = {
      ...initialQuizState,
      category: "558cf8c9-a4cd-4991-8c21-98271d7aaf00",
    } as QuizType;

    //Act
    const computedState = quizReducer(initialState, action);

    //Assert
    expect(computedState).toEqual(finalState);
  });

  test("Should set the category name of quiz being played currently in SET_CATEGORY_NAME dispatch", () => {
    // Arrange
    const initialState: QuizType = {
      ...initialQuizState,
      categoryName: "",
    } as QuizType;

    const action: QuizActionType = {
      type: "SET_CATEGORY_NAME",
      payload: "Muffins",
    };

    const finalState: QuizType = {
      ...initialQuizState,
      categoryName: "Muffins",
    } as QuizType;

    //Act
    const computedState = quizReducer(initialState, action);

    //Assert
    expect(computedState).toEqual(finalState);
  });

  test("Should set the answers selected by player in SET_ANSWERS dispatch", () => {
    // Arrange
    const initialState: QuizType = {
      ...initialQuizState,
      selectedAnswers: ["Tea time"],
    } as QuizType;

    const action: QuizActionType = {
      type: "SET_ANSWERS",
      payload: "Soft bread",
    };

    const finalState: QuizType = {
      ...initialQuizState,
      selectedAnswers: ["Tea time", "Soft bread"],
    } as QuizType;

    //Act
    const computedState = quizReducer(initialState, action);

    //Assert
    expect(computedState).toEqual(finalState);
  });

  test("Should set the active Question, index from 0 to 4 in SET_ACTIVE_QUESTION dispatch", () => {
    // Arrange
    const initialState: QuizType = {
      ...initialQuizState,
      activeQuestion: -1,
    } as QuizType;

    const action: QuizActionType = {
      type: "SET_ACTIVE_QUESTION",
      payload: 0,
    };

    const finalState: QuizType = {
      ...initialQuizState,
      activeQuestion: 0,
    } as QuizType;

    //Act
    const computedState = quizReducer(initialState, action);

    //Assert
    expect(computedState).toEqual(finalState);
  });

  test("Should set the active Quiz, with questions and answers in SET_ACTIVE_QUIZ dispatch", () => {
    // Arrange
    const initialState: QuizType = {
      ...initialQuizState,
      activeQuiz: [],
    } as QuizType;

    const action: QuizActionType = {
      type: "SET_ACTIVE_QUIZ",
      payload: [
        {
          statement:
            "The term 'muffin' came from an old French word 'moufflet'. What does moufflet mean?",
          options: [
            "Sweet bread",
            "Rounded bread",
            "Soft bread",
            "Light bread",
          ],
        },
        {
          statement: "English muffins date back to which century?",
          options: [
            "8th century",
            "20th century",
            "16th century",
            "10th century",
          ],
        },
      ],
    };

    const finalState: QuizType = {
      ...initialQuizState,
      activeQuiz: [
        {
          statement:
            "The term 'muffin' came from an old French word 'moufflet'. What does moufflet mean?",
          options: [
            "Sweet bread",
            "Rounded bread",
            "Soft bread",
            "Light bread",
          ],
        },
        {
          statement: "English muffins date back to which century?",
          options: [
            "8th century",
            "20th century",
            "16th century",
            "10th century",
          ],
        },
      ],
    } as QuizType;

    //Act
    const computedState = quizReducer(initialState, action);

    //Assert
    expect(computedState).toEqual(finalState);
  });

  test("Should set the answers of active Quiz SET_ACTIVE_QUIZ_ANSWERS dispatch", () => {
    // Arrange
    const initialState: QuizType = {
      ...initialQuizState,
      activeQuizAnswers: [],
    } as QuizType;

    const action: QuizActionType = {
      type: "SET_ACTIVE_QUIZ_ANSWERS",
      payload: ["Soft bread", "10th century"],
    };

    const finalState: QuizType = {
      ...initialQuizState,
      activeQuizAnswers: ["Soft bread", "10th century"],
    } as QuizType;

    //Act
    const computedState = quizReducer(initialState, action);

    //Assert
    expect(computedState).toEqual(finalState);
  });

  test("Should reset the selected answers in RESET_ANSWERS dispatch", () => {
    // Arrange
    const initialState: QuizType = {
      ...initialQuizState,
      selectedAnswers: ["Soft bread", "10th century"],
    } as QuizType;

    const action: QuizActionType = {
      type: "RESET_ANSWERS",
    };

    const finalState: QuizType = {
      ...initialQuizState,
      selectedAnswers: [],
    } as QuizType;

    //Act
    const computedState = quizReducer(initialState, action);

    //Assert
    expect(computedState).toEqual(finalState);
  });

  test("Should return the initial State for default switch case", () => {
    // Arrange
    const initialState: QuizType = {
      ...initialQuizState,
      category: "Muffins",
    } as QuizType;

    const action: QuizActionType = {
      type: "DEFAULT_STATE",
    };

    const finalState: QuizType = {
      ...initialQuizState,
      category: "Muffins",
    } as QuizType;

    //Act
    const computedState = quizReducer(initialState, action);

    //Assert
    expect(computedState).toEqual(finalState);
  });
});

import { calculateScore } from "./calculateScore";

describe("testing total score of player in quiz", () => {
  test("testing calculation of total score", () => {
    //Arrange
    const activeQuizAnswers = [
      "Soft bread",
      "10th century",
      "Tea time",
      "A utensil for cooking muffins",
      "Grilled on a griddle",
    ];

    const selectedAnswers = [
      "Rounded bread",
      "12th century",
      "Tea time",
      "A utensil for cooking muffins",
      "Grilled on a griddle",
    ];

    const expectedScore = 60;

    //Act
    const computedScore = calculateScore(activeQuizAnswers, selectedAnswers);

    //Assert
    expect(computedScore).toEqual(expectedScore);
  });
});

export const calculateScore = (
  activeQuizAnswers: Array<string>,
  selectedAnswers: Array<string>
) => {
  let innerCurrScore = 0;
  for (let i = 0; i < activeQuizAnswers.length; i++)
    if (activeQuizAnswers[i] === selectedAnswers[i]) innerCurrScore += 20;
  return innerCurrScore;
};

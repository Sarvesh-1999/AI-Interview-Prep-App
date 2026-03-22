export const sortPinnedQuestions = (questions) => {
  return questions.sort((a, b) => b.pinned - a.pinned);
};
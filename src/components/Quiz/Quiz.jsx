import { useCallback, useState } from "react";
import QUESTIONS from "../../questions.js";
import quizCompleteImage from "../../assets/quiz-complete.png";
import Questions from "../Questions/Questions.jsx";

export default function Quiz() {
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const activeQuestionIndex = selectedAnswers.length;

  if (activeQuestionIndex === QUESTIONS.length) {
    return (
      <div id="summary">
        <img src={quizCompleteImage}></img>
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  const handleSelectAnswer = useCallback(function handleSelectAnswer(answer) {
    setSelectedAnswers((prevList) => [...prevList, answer]);
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  return (
    <div id="quiz">
      <Questions
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelect={handleSelectAnswer}
        onSkip={handleSkipAnswer}
      />
    </div>
  );
}

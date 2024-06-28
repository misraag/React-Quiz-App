import { useCallback, useState } from "react";
import QUESTIONS from "../../questions.js";
import Questions from "../Questions/Questions.jsx";
import Summary from "../Summary/Summary.jsx";

export default function Quiz() {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const activeQuestionIndex = selectedAnswers.length;
  const quizIsCompleted = activeQuestionIndex === QUESTIONS.length


  const handleSelectAnswer = useCallback(function handleSelectAnswer(answer) {
    setSelectedAnswers((prevList) => [...prevList, answer]);
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  
  if (quizIsCompleted) {
    return (
      <Summary userAnswers={selectedAnswers}/>
    );
  }

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

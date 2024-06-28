import { useCallback, useRef, useState } from "react";
import QUESTIONS from "../../questions.js";
import quizCompleteImage from "../../assets/quiz-complete.png";
import { AnswersContext } from "../../context/answers-context.jsx";
import Progress from "../QuestionProgress/Progress.jsx";
import Answers from "../Answers/Answers.jsx";
import Questions from "../Questions/Questions.jsx";

export default function Quiz() {
  const [answerState, setAnswerState] = useState("");
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const activeQuestionIndex =
    answerState === "" ? selectedAnswers.length : selectedAnswers.length - 1;

  if (activeQuestionIndex === QUESTIONS.length) {
    return (
      <div id="summary">
        <img src={quizCompleteImage}></img>
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  const handleSelectAnswer = useCallback(function handleSelectAnswer(answer) {
    setAnswerState("answered");
    setSelectedAnswers((prevList) => [...prevList, answer]);

    setTimeout(() => {
      if (answer === QUESTIONS[activeQuestionIndex].answers[0]) {
        setAnswerState("correct");
      } else {
        setAnswerState("wrong");
      }
      setTimeout(() => {
        setAnswerState("");
      }, 2000);
    }, 1000);
  }, [activeQuestionIndex]);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  return (
    <div id="quiz">
      <Questions
        key={activeQuestionIndex}
        questionText={QUESTIONS[activeQuestionIndex].text}
        answers={[...QUESTIONS[activeQuestionIndex].answers]}
        selectedAnswer={selectedAnswers[selectedAnswers.length - 1]}
        answerState={answerState}
        onSelect={handleSelectAnswer}
        onSkip={handleSkipAnswer}
      />
    </div>
  );
}

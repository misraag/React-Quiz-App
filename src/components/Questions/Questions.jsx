import Progress from "../QuestionProgress/Progress";
import Answers from "../Answers/Answers.jsx";
import QUESTIONS from "../../questions.js";
import { useState } from "react";

export default function Questions({ index, onSkip, onSelect }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isSelected: null,
  });

  let timer = 10000;

  if(answer.selectedAnswer) {
    timer = 1000;
  } 

  if(answer.isSelected) {
    timer = 2000;
  }

  function handleAnswerSelect(answer) {
    setAnswer({
      selectedAnswer: answer,
      isSelected: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isSelected: QUESTIONS[index].answers[0] === answer,
      });

      setTimeout(() => {
        onSelect(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";

  if (answer.selectedAnswer && answer.isSelected !== null) {
    answerState = answer.isSelected ? "correct" : "wrong";
  } else if (answer.selectedAnswer){
    answerState = "answered";
  }

  return (
    <div id="question">
      <Progress key={timer} timeout={timer} onTimeout={answer.selectedAnswer === '' ? onSkip : null} mode={answerState}></Progress>
      <h2>{QUESTIONS[index].text}</h2>

      <Answers
        options={[...QUESTIONS[index].answers]}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelectAnswer={handleAnswerSelect}
      />
    </div>
  );
}

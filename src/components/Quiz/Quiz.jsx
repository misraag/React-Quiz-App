import { useState } from "react";
import Options from "../Options/Options";
import QUESTIONS from "../../questions.js";
import quizCompleteImage from '../../assets/quiz-complete.png'
import { AnswersContext } from "../../context/answers-context.jsx";

export default function Quiz() {
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const activeQuestionIndex = selectedAnswers.length;

  function handleSelectingAnswer(answer) {
    setSelectedAnswers((prev) => [answer, ...prev]);
  }

//   const answerContext = {
//     answerList: selectedAnswers,
//     onSelecting: handleSelectingAnswer,
//   };

  function handleSelectAnswer(answer) {
    console.log(answer)
    setSelectedAnswers((prevList) => [...prevList, answer])
  }

  if(activeQuestionIndex === QUESTIONS.length) {
    return <div id="summary">
        <img src={quizCompleteImage}></img>
        <h2>Quiz Completed!</h2>
    </div>
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers]
  shuffledAnswers.sort(() => Math.random() - 0.5);


  return (
    <div id="quiz">
      <div id="question">
        {/* <progress></progress> */}
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>

      
        <ul id="answers">
            {
                shuffledAnswers.map((answer) => {
                    return <li key={answer} className="answer">
                        <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                    </li>
                })
            }
        </ul>
      </div>

      {/* <Options index={activeQuestion} /> */}
    </div>
  );
}

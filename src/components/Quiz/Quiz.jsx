import { useState } from "react";
import Options from "../Options/Options";
import QUESTIONS from "../../questions.js";
import { AnswersContext } from "../../context/answers-context.jsx";

export default function Quiz() {
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const activeQuestion = selectedAnswers.length;

  function handleSelectingAnswer(answer) {
    setSelectedAnswers((prev) => [answer, ...prev]);
  }

//   const answerContext = {
//     answerList: selectedAnswers,
//     onSelecting: handleSelectingAnswer,
//   };

  function handleSelectAnswer(answer) {
    console.log(answer)
  }

  return (
    <div id="quiz">
      <div id="question">
        {/* <progress></progress> */}
        <h2>{QUESTIONS[activeQuestion].text}</h2>

      
        <ul id="answers">
            {
                QUESTIONS[activeQuestion].answers.map((answer) => {
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

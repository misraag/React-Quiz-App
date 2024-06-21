import { useState } from "react";
import Options from "../Options/Options";
import questions from "../../questions.js";
import { AnswersContext } from "../../context/answers-context.jsx";

export default function Quiz() {
    const [selectedAnswers, setSelectedAnswers] = useState([]);

    const activeQuestion = selectedAnswers.length;

    function handleSelectingAnswer(answer) {
        setSelectedAnswers((prev) => 
            [answer, ...prev]
        )
    }

    const answerContext = {
        answerList: selectedAnswers,
        onSelecting: handleSelectingAnswer
    }

    return <AnswersContext.Provider value={answerContext} id="quiz">
        <div id="question">
            <progress></progress>
            <h2>{questions[activeQuestion].text}</h2>
        </div>
        
        <Options index={activeQuestion} />
        
    </AnswersContext.Provider>
}
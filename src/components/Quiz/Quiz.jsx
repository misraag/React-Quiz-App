import { useState } from "react";
import Options from "../Options/Options";
import questions from "../../questions.js";

export default function Quiz() {
    const [selectedAnswers, setSelectedAnswers] = useState([]);

    const activeQuestion = selectedAnswers.length;

    return <section id="quiz">
        <div id="question">
            <progress></progress>
            <h2>{questions[0].text}</h2>
        </div>
        
        <Options index={activeQuestion}/>
        
    </section>
}
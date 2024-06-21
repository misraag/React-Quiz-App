import { useContext, useState } from "react";
import questions from "../../questions";
import Button from "./Buttons";
import { AnswersContext } from "../../context/answers-context";

export default function Options({ index, onNext}) {
  const [selectedIdx, setSelectedIdx] = useState({
    idx: null,
    color: null
  });
  const { answers } = questions[index];
  const answerCtx = useContext(AnswersContext);

  function handleAnswerClick(answer, idx) {
    // Set the selected button to 'selected' immediately
    setSelectedIdx({
      idx: idx,
      color: 'selected'
    });

    // After 3 seconds, check if the answer is correct and update the class
    setTimeout(() => {
      if (answer === answers[0]) {
        setSelectedIdx({
          idx: idx,
          color: 'correct'
        });
      } else {
        setSelectedIdx({
          idx: idx,
          color: 'wrong'
        });
      }
      answerCtx.onSelecting(answer)
    }, 3000);
  }

  return (
    <section id="answers">
      {answers.map((answer, idx) => (
        <Button
          onClick={() => handleAnswerClick(answer, idx)}
          key={idx}
          className={`${selectedIdx.idx === idx ? selectedIdx.color : ''}`}
        >
          {answer}
        </Button>
      ))}
    </section>
  );
}

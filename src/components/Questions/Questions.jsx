import Progress from "../QuestionProgress/Progress";
import Answers from "../Answers/Answers.jsx";

export default function Questions({
  questionText,
  answers,
  selectedAnswer,
  answerState,
  onSkip,
  onSelect,
}) {
  return (
    <div id="quiz">
      <div id="question">
        <Progress timeout={10000} onTimeout={onSkip}></Progress>
        <h2>{questionText}</h2>

        <Answers
          options={answers}
          selectedAnswer={selectedAnswer}
          answerState={answerState}
          onSelectAnswer={onSelect}
        />
      </div>
    </div>
  );
}

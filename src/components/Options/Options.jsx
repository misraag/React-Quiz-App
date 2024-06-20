import questions from "../../questions";
import Button from "./Buttons";
export default function Options({ index }) {
  const { answers } = questions[index];

  return (
    <section id="answers">
      {answers.map((answer, idx) => (
        <Button key={idx}>{answer}</Button>
      ))}
    </section>
  );
}

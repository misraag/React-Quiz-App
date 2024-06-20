import Options from "../Options/Options";

export default function Question() {

    return <section id="quiz">
        <div id="question">
            <progress></progress>
            <h2>Question is this question?</h2>
        </div>
        <Options/>
    </section>
}
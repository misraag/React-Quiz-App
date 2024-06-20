import imgLogo from '../assets/quiz-logo.png'

export default function Header() {

    return <header>
    <img src={imgLogo} alt='Quiz logo'></img>
    <h1>REACT QUIZ</h1>
    </header>
}
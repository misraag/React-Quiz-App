import { createContext } from "react";

export const AnswersContext = createContext({
    answerList: [],
    onSelecting: ()=>{},
})
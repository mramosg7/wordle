import { LettersType } from "./letters"

export type keyboardProps = {
    letters : LettersType,
    deleteLetter:()=>void,
    registerLetter:(letter: string) =>void
}
import { keyboardProps } from "../../types/keyboard";
import Key from "../ui/key";



export default function Keyboard({letters, deleteLetter, registerLetter}: keyboardProps){

    return(
        <div className="flex flex-wrap gap-2 items-center justify-center">
            {letters.map((letter)=>(
                <Key key={`tile-${letter.letter}`} letter={letter.letter} status={letter.status} deleteLetter={deleteLetter} registerLetter={registerLetter}  />
            ))}
        </div>
    )
}